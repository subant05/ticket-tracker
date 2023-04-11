import _ from "lodash";

export function formatAssociatedData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  Object.keys(clonedData.associatedStreamData).forEach((key) => {
    if (key === "update_status") {
      clonedData["bundle"] = clonedData.associatedStreamData[key];
    } else {
      clonedData.associatedDataFormatting.forEach((format) => {
        clonedData.associatedStreamData[key].forEach((datapoint) => {
          if (datapoint.label === format.key)
            clonedData[format.value] = datapoint.value;
          clonedData.value[datapoint.label] = datapoint.value;
        });
      });
    }
  });

  return clonedData;
}
