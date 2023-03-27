import _ from "lodash";

export function formatData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (data.stream_type !== "json") return clonedData;

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

  return clonedData;
}
