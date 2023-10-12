import Congruity from "congruity";
import { setupTickets } from "../_lib/_composed/setupTickets.js";
import { generateSubstantiveData } from "../_lib/_composed/generateSubstantiveData.js";
import { createTickets } from "../_lib/_composed/createTickets.js";
import { updateTickets } from "../_lib/_composed/updateTickets.js";
import { recordExpertConnectTags } from "../_lib/_composed/recordExpertConnectTags.js";
import { areRulesValidated } from "../_lib/_utils/areRulesValid.js";
import { addVPUPostionToMachineId } from "../_lib/_utils/addVPUPostionToMachineId.js";
import { determineDashboardProvider } from "../_lib/_utils/determineDashboardProvider.js";

export const createTicketFromAthena = Congruity.fn.asyncCompose(
  recordExpertConnectTags,
  updateTickets,
  createTickets,
  generateSubstantiveData,
  areRulesValidated,
  setupTickets,
  // VPU Position Moved to 3rd VPU
  addVPUPostionToMachineId(2),
  determineDashboardProvider
);
