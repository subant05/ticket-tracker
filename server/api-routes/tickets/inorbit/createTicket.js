import Congruity from "congruity";
import { setupTickets } from "../_lib/_composed/setupTickets.js";
import { generateSubstantiveData } from "../_lib/_composed/generateSubstantiveData.js";
import { createTickets } from "../_lib/_composed/createTickets.js";
import { updateTickets } from "../_lib/_composed/updateTickets.js";
import { recordExpertConnectTags } from "../_lib/_composed/recordExpertConnectTags.js";
import { areRulesValidated } from "../_lib/_utils/areRulesValid.js";
import { getLatestInOrbitDataSourceDatapoint } from "../_lib/_composed/getLatestInOrbitDataSourceDatapoint.js";
import { addVPUPostionToMachineId } from "../_lib/_utils/addVPUPostionToMachineId.js";

export const createTicketFromInOrbit = Congruity.fn.asyncCompose(
  recordExpertConnectTags,
  updateTickets,
  createTickets,
  generateSubstantiveData,
  areRulesValidated,
  setupTickets,
  addVPUPostionToMachineId(2),
  getLatestInOrbitDataSourceDatapoint
);
