import Congruity from "congruity";
import { setupTickets } from "../_lib/_composed/setupTickets.js";
import { shouldCreateTicket } from "../_lib/_alt/shouldCreateTicket.js";
import { generateSubstantiveData } from "../_lib/_composed/generateSubstantiveData.js";
import { createTickets } from "../_lib/_composed/createTickets.js";
import { updateTickets } from "../_lib/_composed/updateTickets.js";
import { filterVehicles } from "../_lib/_utils/filterVehicles.js";
import { recordExpertConnectTags } from "../_lib/_composed/recordExpertConnectTags.js";
import { areRulesValidated } from "../_lib/_utils/areRulesValid.js";
import { updateAthena } from "../_lib/_composed/updateAthena.js";

export const createTicketFromAthena = Congruity.fn.asyncCompose(
  recordExpertConnectTags,
  // updateAthena,
  updateTickets,
  createTickets,
  generateSubstantiveData,
  // shouldCreateTicket,
  areRulesValidated,
  setupTickets
);
