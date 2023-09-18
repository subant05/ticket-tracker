import Congruity from "congruity";
import { verifyStreamsValidity } from "../_utils/verifyStreamsValidity.js";
import { checkConditions } from "../_utils/checkConditions.js";
import { getRuleFormatting } from "../_utils/getRuleFormatting.js";
import { getRules } from "../_utils/getRules.js";
import { formatJsonData } from "../_utils/formatJsonData.js";
/**
 *  checkRules
 */
export const checkRules = Congruity.fn.asyncCompose(
  verifyStreamsValidity,
  checkConditions,
  formatJsonData,
  getRuleFormatting,
  getRules
);
