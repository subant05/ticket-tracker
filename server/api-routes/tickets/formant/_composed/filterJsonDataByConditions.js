import Congruity from "congruity";
import { getRuleFormatting } from "../_utils/getRuleFormatting.js";
import { formatJsonData } from "../_utils/formatJsonData.js";
import { getJsonStreamTypeData } from "../_utils/getJsonStreamTypeData.js";

export const filterJsonDataByConditions = Congruity.fn.asyncCompose(
  Congruity.fn.tap((data) => {
    console.log("Got Stream Data: ", data);
  }),
  formatJsonData,
  getRuleFormatting,
  getJsonStreamTypeData
);
