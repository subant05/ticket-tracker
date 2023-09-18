import _ from "lodash";

export function verifyStreamsValidity(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.isStreamsValid =
    (clonedData.rules.rows.length === 1 &&
      !clonedData.rules.rows[0].condition) ||
    (clonedData.validatedConditions.length &&
      clonedData.rules.rows.length &&
      clonedData.validatedConditions.length === clonedData.rules.rows.length);

  return clonedData;
}
