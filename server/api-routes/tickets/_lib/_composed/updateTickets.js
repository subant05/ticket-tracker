import Congruity from "congruity";
import { updateExpertConnectTicket } from "../_utils/updateExpertConnectTicket.js";
import { updateJiraTicket } from "../_utils/updateJiraTicket.js";
import { updateExpertConnectTicketTags } from "../_utils/updateExpertConnectTicketTags.js";
import { skipTicket } from "../_utils/skipTicket.js";

export const updateTickets = Congruity.fn.asyncCompose(
  async (result) =>
    result.asyncMap(
      Congruity.fn.asyncAlt(skipTicket("jira"), updateJiraTicket)
    ),
  async (result) =>
    result.asyncMap(
      Congruity.fn.asyncAlt(
        skipTicket("expert connect"),
        updateExpertConnectTicketTags
      )
    ),
  async (result) =>
    result.asyncMap(
      Congruity.fn.asyncAlt(
        skipTicket("expert connect"),
        updateExpertConnectTicket
      )
    )
);
