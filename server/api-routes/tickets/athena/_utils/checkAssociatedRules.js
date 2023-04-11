import _ from "lodash";
import { checkCondition } from "./checkCondition.js";

export function checkAssociatedRules(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  let isValid = [];

  Object.keys(clonedData.associatedStreamData).forEach((key) => {
    if (key !== "update_status") {
      const rulesMet = clonedData.associatedStreamData[key].filter(
        (datapoint) => {
          return clonedData.associatedStreamRules.find((rule) =>
            checkCondition(rule, datapoint)
          );
        }
      );

      isValid = isValid.concat(rulesMet);
    }
  });

  clonedData.associatedStreamsRuleMatch = isValid;
  return clonedData;
}
