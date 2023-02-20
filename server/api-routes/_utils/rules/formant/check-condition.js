export function checkCondition(rule, datapoint){
  if(rule.condition !== datapoint.label )
      return false
  
  switch(rule.operator){
      case "=":
        const eqValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return eqValue === datapoint.value
        break;
      case ">":
        const gtValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return datapoint.value >  gtValue 
        break;
      case "<":
        const ltValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return datapoint.value < ltValue
        break;
      case ">=":
        const gteValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return  datapoint.value >= gteValue
        break;
      case "<=":
        const lteValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return datapoint.value <= lteValue
        break;
      case "!=":
        const notEqualValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return notEqualValue !== datapoint.value
        break;
      case "!":
        const falseValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return falseValue === "false" && !datapoint.value
        break;
      case "!!":
        const trueValue = !isNaN(rule.value) ? parseInt(rule.value) : rule.value
        return trueValue === "true" && !!datapoint.value
        break;
      default:
        return false;
        break;
  }
}