import _ from "lodash";
import { getJsonData } from "../../../_utils/services/formant/getJsonData.js";

export async function filterJsonDataByConditions(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const jsonUrlRegExp = new RegExp(`^(${process.env.FORMANT_UPLOAD_URL})`);

  if (data.stream_type !== "json") return false;

  clonedData.latestDatapoint = await getJsonData(data.latestDatapoint);

  return clonedData;
}
