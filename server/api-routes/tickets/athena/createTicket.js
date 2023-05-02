import Congruity from "congruity";
import { setupTickets } from "./_composed/setupTickets.js";
import { shouldCreateTicket } from "./_alt/shouldCreateTicket.js";
import { generateSubstantiveData } from "./_composed/generateSubstantiveData.js";
import { createTickets } from "./_composed/createTickets.js";
import { updateTickets } from "./_composed/updateTickets.js";
import { filterVehicles } from "./_utils/filterVehicles.js";

export const createTicketFromAthena = Congruity.fn.asyncCompose(
  updateTickets,
  createTickets,
  generateSubstantiveData,
  shouldCreateTicket,
  setupTickets,
  filterVehicles(["752", "710"])
);
