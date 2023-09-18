import _ from "lodash";
import { checkCondition } from "./checkCondition.js";

export function checkConditions(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.validatedConditions = clonedData.latestDatapoint.filter(
    (datapoint) => {
      return clonedData.rules.rows.find((rule) =>
        checkCondition(rule, datapoint)
      );
    }
  );

  return clonedData;
}
