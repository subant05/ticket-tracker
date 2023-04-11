import _ from "lodash";

export function formatLatestDatapoint(data) {
  if (!data) return null;

  const clonedData = _.cloneDeep(data);
  const latestDatapoint = _.cloneDeep(data.latestDatapoint);

  clonedData.latestDatapoint = Object.entries(latestDatapoint).map((entry) => {
    return { label: entry[0], value: entry[1] };
  });

  return clonedData;
}
