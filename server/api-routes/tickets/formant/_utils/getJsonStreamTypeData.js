import _ from "lodash";
import { getJsonData } from "../../../_utils/services/formant/getJsonData.js";
import Congruity from "congruity";
import { getRuleFormatting } from "./getRuleFormatting.js";
import { formatJsonData } from "./formatJsonData.js";

export async function getJsonStreamTypeData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const jsonUrlRegExp = new RegExp(`^(${process.env.FORMANT_UPLOAD_URL})`);

  if (data.stream_type !== "json") return false;

  clonedData.latestDatapoint = await getJsonData(data.latestDatapoint);

  return clonedData;
}

export const filterJsonByConditions = Congruity.fn.compose(
  formatJsonData,
  getRuleFormatting,
  getJsonStreamTypeData
);
