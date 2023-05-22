import _ from "lodash";

const verifyRules = (data) => {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (clonedData.isStreamsValid && clonedData.isAssociatedStreamsValid)
    return clonedData;
  else return null;
};

export const areRulesValidated = (result) => result.map(verifyRules);
