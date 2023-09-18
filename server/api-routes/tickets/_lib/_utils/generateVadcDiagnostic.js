import _ from "lodash";

export function generateVadcDiagnostic(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.vadcDiagnostics = JSON.stringify({
    ERC: clonedData.ERC,
    SUP: clonedData.SUP,
    TRIGGER: clonedData.TRIGGER,
  });

  return clonedData;
}
