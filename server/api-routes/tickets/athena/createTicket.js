import Congruity from "congruity";
import { setupTickets } from "./_composed/setupTickets.js";
import { shouldCreateTicket } from "./_alt/shouldCreateTicket.js";
import { generateSubstantiveData } from "./_composed/generateSubstantiveData.js";
import { createTickets } from "./_composed/createTickets.js";
import { updateTickets } from "./_composed/updateTickets.js";
import { filterVehicles } from "./_utils/filterVehicles.js";
import { recordExpertConnectTags } from "./_composed/recordExpertConnectTags.js";
import { areRulesValidated } from "./_utils/areRulesValid.js";

export const createTicketFromAthena = Congruity.fn.asyncCompose(
  recordExpertConnectTags,
  updateTickets,
  createTickets,
  generateSubstantiveData,
  // shouldCreateTicket,
  areRulesValidated,
  setupTickets
);
