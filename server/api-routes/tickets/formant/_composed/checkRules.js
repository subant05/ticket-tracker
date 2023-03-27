import Congruity from "congruity";
import { verifyStreamsValidity } from "../_utils/verifyStreamsValidity.js";
import { checkConditions } from "../_utils/checkConditions.js";
import { filterNumericSetDataByConditions } from "../_utils/filterNumericSetDataByConditions.js";
import { getJsonStreamTypeData } from "../_utils/getJsonStreamTypeData.js";
import { getRuleFormatting } from "../_utils/getRuleFormatting.js";
import { formatJsonData } from "../_utils/formatJsonData.js";
import { getRules } from "../_utils/getRules.js";
import { filterJsonDataByConditions } from "./filterJsonDataByConditions.js";
/**
 *  checkRules
 */
export const checkRules = Congruity.fn.asyncCompose(
  verifyStreamsValidity,
  checkConditions,
  formatJsonData,
  getRuleFormatting,
  Congruity.fn.asyncAlt(
    filterNumericSetDataByConditions,
    filterJsonDataByConditions
  ),
  getRules
);
