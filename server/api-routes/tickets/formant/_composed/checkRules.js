import Congruity from "congruity";
import { verifyStreamsValidity } from "../_utils/verifyStreamsValidity.js";
import { checkConditions } from "../_utils/checkConditions.js";
import { filterNumericSetDataByConditions } from "../_utils/filterNumericSetDataByConditions.js";
import { filterJsonDataByConditions } from "../_utils/filterJsonDataByConditions.js";
import { getRuleFormatting } from "../_utils/getRuleFormatting.js";
import { formatData } from "../_utils/formatJsonData.js";
import { getRules } from "../_utils/getRules.js";
/**
 *  checkRules
 */
export const checkRules = Congruity.fn.asyncCompose(
  verifyStreamsValidity,
  checkConditions,
  formatData,
  getRuleFormatting,
  Congruity.fn.asyncAlt(
    filterNumericSetDataByConditions,
    filterJsonDataByConditions
  ),
  getRules
);
