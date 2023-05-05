import _ from "lodash";
import Congruity from "congruity";
import { updateJiraTicket } from "../_utils/updateJiraTicket.js";
import { generateJiraTicketPayload } from "../_utils/generateJiraTicketPayload.js";
import { getJiraTicketId } from "../_utils/getJiraTicketId.js";
import { parseSpecifications } from "../_utils/parseSpecifications.js";
import { getBundleFromMisc } from "../_utils/getBundleFromMisc.js";
import { copyDescriptionAndMisc } from "../_utils/copyDescriptionAndMisc.js";
import { verifyUpdate } from "../_utils/verifyUpdate.js";
import { getJiraTicket } from "../_utils/getJiraTicket.js";
import { updateJiraLabelsWithExperConnectTags } from "../_utils/updateJiraLabelsWithExperConnectTags.js";

export const updateAssociatedTickets = Congruity.fn.asyncCompose(
  updateJiraTicket,
  updateJiraLabelsWithExperConnectTags,
  // Congruity.fn.tap((data) =>
  //   console.log("####################:\n", data.existingJiraTicket)
  // ),
  getJiraTicket,
  generateJiraTicketPayload,
  getBundleFromMisc,
  getJiraTicketId,
  parseSpecifications(),
  copyDescriptionAndMisc,
  verifyUpdate
);
