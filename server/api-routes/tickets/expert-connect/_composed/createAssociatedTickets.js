import _ from "lodash";
import Congruity from "congruity";
import { copyDescriptionAndMisc } from "../_utils/copyDescriptionAndMisc.js";
import { parseSpecifications } from "../_utils/parseSpecifications.js";
import { getBundleFromMisc } from "../_utils/getBundleFromMisc.js";
import { generateJiraTicketPayload } from "../_utils/generateJiraTicketPayload.js";
import { addExpertConnectTagsToJira } from "../_utils/addExpertConnectTagsToJira.js";
import { createJiraTicket } from "../_utils/createJiraTicket.js";
import { addJiraLinkToDescription } from "../_utils/addJiraLinkToDescription.js";
import { updateExpertConnectTicket } from "../_utils/updateExpertConnectTicket.js";

export const createAssociatedTickets = Congruity.fn.asyncCompose(
  updateExpertConnectTicket,
  addJiraLinkToDescription,
  createJiraTicket,
  addExpertConnectTagsToJira,
  generateJiraTicketPayload,
  getBundleFromMisc,
  parseSpecifications(),
  copyDescriptionAndMisc
);
