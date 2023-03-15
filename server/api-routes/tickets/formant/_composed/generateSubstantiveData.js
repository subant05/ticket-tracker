import Congruity from "congruity";
import { generateFormantTicketTitle } from "../_utils/generateFormantTicket.js";
import { generateVadcDiagnostic } from "../_utils/generateVadcDiagnostic.js";

export const generateSubstantiveData = Congruity.fn.asyncCompose(
  async (result) => result.map(generateVadcDiagnostic),
  async (result) => result.map(generateFormantTicketTitle)
);
