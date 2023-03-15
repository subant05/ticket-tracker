import _ from "lodash";

export function filterNumericSetDataByConditions(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (data.stream_type !== "numeric set") return false;

  return clonedData;
}
