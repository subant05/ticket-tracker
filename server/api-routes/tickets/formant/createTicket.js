import Congruity from "congruity";
import { setupTickets } from "./_composed/setupTickets.js";
import { generateSubstantiveData } from "./_composed/generateSubstantiveData.js";
import { createTickets } from "./_composed/createTickets.js";
import { updateTickets } from "./_composed/updateTickets.js";
import { shouldCreateTicket as isValidTicket } from "./_utils/shouldCreateTicket.js";
import { shouldDeactivateTicket as isInvalidTicket } from "./_utils/shouldDeactivateTicket.js";

export const shouldCreateTicket = async (result) =>
  result.asyncMap(Congruity.fn.asyncAlt(isValidTicket, isInvalidTicket));

export const createTicketFromFormantEvent = Congruity.fn.asyncCompose(
  updateTickets,
  createTickets,
  Congruity.fn.tap((data) => console.log("Whats current ticket object", data)),
  generateSubstantiveData,
  Congruity.fn.tap((data) =>
    console.log(
      "Whats the value after shouldCreateTicket & shouldDeactivateTicket: ",
      data
    )
  ),
  shouldCreateTicket,
  setupTickets
);

export const createTicketsManually = Congruity.fn.asyncCompose(
  updateTickets,
  createTickets,
  generateSubstantiveData,
  setupTickets
);
