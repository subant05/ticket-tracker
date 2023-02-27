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
