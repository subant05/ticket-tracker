import Congruity from "congruity";
import { getVehicleInformation } from "../_utils/getVehicleInformation.js";
import { updateVehicleName } from "../_utils/updateVehicleName.js";
import { parseRequestBody } from "../_utils/parseRequestBody.js";

/**
 *  generateFormantRequestSpecifications
 */
export const generateFormantRequestSpecifications = Congruity.fn.asyncCompose(
  getVehicleInformation,
  updateVehicleName,
  parseRequestBody
);
