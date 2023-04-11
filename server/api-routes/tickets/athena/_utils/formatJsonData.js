import _ from "lodash";

export function formatJsonData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (!clonedData && typeof clonedData.value !== "object")
    clonedData.value = {};

  const matched = clonedData.latestDatapoint
    .filter((dataPoint) => {
      return clonedData.dataFormatting.find(
        (format) => format.key === dataPoint.label
      );
    })
    .forEach((dataPointTwo) => {
      const property = clonedData.dataFormatting.find(
        (format) => format.key === dataPointTwo.label
      );
      clonedData[property.value] = dataPointTwo.value;
    });

  clonedData.value = JSON.stringify(clonedData.latestDatapoint);

  return clonedData;
}
