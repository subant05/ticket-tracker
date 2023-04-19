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
  updateJiraTicket,
  generateJiraTicketPayload,
  getBundleFromMisc,
  getJiraTicketId,
  parseSpecifications(),
  copyDescriptionAndMisc,
  Congruity.fn.tap((data) =>
    console.log("EXPERT CONNECT TICKET: SHOULD UPDATE?: ", data !== null)
  ),
  verifyUpdate
);
