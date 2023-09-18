export function checkCondition(rule, datapoint) {
  if (rule.condition !== datapoint.label) return false;

  const ruleValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value;

  switch (rule.operator) {
    case "=":
      return ruleValue === datapoint.value;
      break;
    case ">":
      return datapoint.value > ruleValue;
      break;
    case "<":
      return datapoint.value < ruleValue;
      break;
    case ">=":
      return datapoint.value >= ruleValue;
      break;
    case "<=":
      return datapoint.value <= ruleValue;
      break;
    case "<=||>=":
      const lessThanOrGreaterThanRange = ruleValue.split(",");
      return (
        datapoint.value <= lessThanOrGreaterThanRange[0] ||
        datapoint.value >= lessThanOrGreaterThanRange[1]
      );
      break;
    case ">=||<=":
      const greaterThanOrLessThanRange = ruleValue.split(",");
      return (
        datapoint.value >= greaterThanOrLessThanRange[0] ||
        datapoint.value <= greaterThanOrLessThanRange[1]
      );
      break;
    case "<=&&>=":
      const lessThanAndGreaterThanRange = ruleValue.split(",");
      return (
        datapoint.value <= lessThanAndGreaterThanRange[0] &&
        datapoint.value >= lessThanAndGreaterThanRange[1]
      );
      break;
    case ">=&&<=":
      const greaterThanAndLessThanRange = ruleValue.split(",");
      return (
        datapoint.value >= greaterThanAndLessThanRange[0] &&
        datapoint.value <= greaterThanAndLessThanRange[1]
      );
      break;
    case "||":
      const orList = ruleValue.split(",");
      const isFound = orList.find(
        (value) => value.trim().toString() === datapoint.value.toString()
      );

      return typeof isFound !== "undefined";
      break;
    case "!=":
      return ruleValue != datapoint.value;
      break;
    case "!==":
      return ruleValue !== datapoint.value;
      break;
    case "!":
      return ruleValue === "false" && !datapoint.value;
      break;
    case "!!":
      return ruleValue === "true" && !!datapoint.value;
      break;
    default:
      return false;
      break;
  }
}
