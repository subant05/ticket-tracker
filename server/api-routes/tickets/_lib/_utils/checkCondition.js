export function checkCondition(rule, datapoint, skip = []) {
  if (rule.condition !== datapoint.label) return false;

  const ruleValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value;
  let isValid = false;

  switch (rule.operator) {
    case "=":
      isValid = ruleValue === datapoint.value;
      break;
    case ">":
      isValid = datapoint.value > ruleValue;
      break;
    case "<":
      isValid = datapoint.value < ruleValue;
      break;
    case ">=":
      isValid = datapoint.value >= ruleValue;
      break;
    case "<=":
      isValid = datapoint.value <= ruleValue;
      break;
    case "<=||>=":
      const lessThanOrGreaterThanRange = ruleValue.split(",");
      isValid =
        datapoint.value <= lessThanOrGreaterThanRange[0] ||
        datapoint.value >= lessThanOrGreaterThanRange[1];
      break;
    case ">=||<=":
      const greaterThanOrLessThanRange = ruleValue.split(",");
      isValid =
        datapoint.value >= greaterThanOrLessThanRange[0] ||
        datapoint.value <= greaterThanOrLessThanRange[1];
      break;
    case "<=&&>=":
      const lessThanAndGreaterThanRange = ruleValue.split(",");
      isValid =
        datapoint.value <= lessThanAndGreaterThanRange[0] &&
        datapoint.value >= lessThanAndGreaterThanRange[1];
      break;
    case ">=&&<=":
      const greaterThanAndLessThanRange = ruleValue.split(",");
      isValid =
        datapoint.value >= greaterThanAndLessThanRange[0] &&
        datapoint.value <= greaterThanAndLessThanRange[1];
      break;
    case "||":
      const orList = ruleValue.split(",");
      const isFound = orList.find(
        (value) => value.trim().toString() === datapoint.value.toString()
      );

      isValid = typeof isFound !== "undefined";
      break;
    case "!=":
      isValid = ruleValue != datapoint.value;
      break;
    case "!==":
      isValid = ruleValue !== datapoint.value;
      break;
    case "!":
      isValid = ruleValue === "false" && !datapoint.value;
      break;
    case "!!":
      isValid = ruleValue === "true" && !!datapoint.value;
      break;
    default:
      isValid = false;
      break;
  }

  console.log(
    "Is Found: ",
    !isValid,
    rule.condition === datapoint.label,
    rule.ticket_type,
    skip,
    skip instanceof Array
    // skip.indexOf(rule.ticket_type.replace(/_/gi, " ").toLowerCase()) === -1
  );
  if (
    !isValid &&
    rule.condition === datapoint.label &&
    rule.ticket_type &&
    skip &&
    skip instanceof Array &&
    skip.indexOf(rule.ticket_type.replace(/_/gi, " ").toLowerCase()) === -1
  ) {
    skip.push(rule.ticket_type.replace(/_/gi, " ").toLowerCase());

    isValid = true;
  }

  return isValid;
}
