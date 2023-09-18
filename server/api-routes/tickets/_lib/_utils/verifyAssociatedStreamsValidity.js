import _ from "lodash";

export function verifyAssociatedStreamsValidity(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.isAssociatedStreamsValid =
    !clonedData.associatedStreams.length ||
    !clonedData.associatedStreamRules.length ||
    (clonedData.associatedStreamsRuleMatch.length &&
      clonedData.associatedStreamRules.length &&
      clonedData.associatedStreamsRuleMatch.length ===
        clonedData.associatedStreamRules.length);

  return clonedData;
}
