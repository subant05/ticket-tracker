import _ from "lodash";
import Congruity from "congruity";
import { updateJiraTicket } from "../_utils/updateJiraTicket.js";
import { generateJiraTicketPayload } from "../_utils/generateJiraTicketPayload.js";
import { getJiraTicketId } from "../_utils/getJiraTicketId.js";
import { parseSpecifications } from "../_utils/parseSpecifications.js";
import { getBundleFromMisc } from "../_utils/getBundleFromMisc.js";
import { copyDescriptionAndMisc } from "../_utils/copyDescriptionAndMisc.js";
import { verifyUpdate } from "../_utils/verifyUpdate.js";

export const updateAssociatedTickets = Congruity.fn.asyncCompose(
  Congruity.fn.tap((data) => {
    console.log("Is Verified? ", data);
  }),
  updateJiraTicket,
  generateJiraTicketPayload,
  getBundleFromMisc,
  getJiraTicketId,
  parseSpecifications(),
  copyDescriptionAndMisc,
  verifyUpdate
);
