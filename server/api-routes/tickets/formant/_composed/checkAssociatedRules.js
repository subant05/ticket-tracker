import Congruity from "congruity";
import { verifyAssociatedStreamsValidity } from "../_utils/verifyAssociatedStreamsValidity.js";
import { formatAssociatedData } from "../_utils/formatAssociatedData.js";
import { checkAssociatedRules as checkAssocRules } from "../_utils/checkAssociatedRules.js";
import { geAssociatedStreamFormatting } from "../_utils/geAssociatedStreamFormatting.js";
import { geAssociatedStreamRules } from "../_utils/geAssociatedStreamRules.js";
import { getAssociatedStreamData } from "../_utils/getAssociatedStreamData.js";
import { geAssociatedStreams } from "../_utils/geAssociatedStreams.js";
/**
 *  checkAssociatedRules
 */
export const checkAssociatedRules = Congruity.fn.asyncCompose(
  verifyAssociatedStreamsValidity,
  formatAssociatedData,
  checkAssocRules,
  geAssociatedStreamFormatting,
  geAssociatedStreamRules,
  Congruity.fn.tap((data) => {
    console.log("What is the assocated data: ", data.associatedStreamData);
  }),
  getAssociatedStreamData,
  geAssociatedStreams
);
