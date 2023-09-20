import { createExpertConnectTicket } from "../_utils/createExpertConnectTicket.js";
import Congruity from "congruity";
import { createJiraTicket } from "../_utils/createJiraTicket.js";
import { insertTicketsIntoDatabase } from "../_utils/insertTicketsIntoDatabase.js";
import { skipTicket } from "../_utils/skipTicket.js";

export const createTickets = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(insertTicketsIntoDatabase),
  // async (result) =>
  //   result.asyncMap(
  //     Congruity.fn.tap((data) => {
  //       console.log("JIRA TICKET: ", data.jiraTicket);
  //     })
  //   ),
  async (result) =>
    result.asyncMap(
      Congruity.fn.asyncAlt(skipTicket("jira"), createJiraTicket)
    ),
  async (result) =>
    result.asyncMap(
      Congruity.fn.tap((data) => {
        console.log("Expert Connect TICKET: ", data.expertConnectTicket);
      })
    ),
  async (result) =>
    result.asyncMap(
      Congruity.fn.asyncAlt(
        skipTicket("expert connect"),
        createExpertConnectTicket
      )
    )
);
