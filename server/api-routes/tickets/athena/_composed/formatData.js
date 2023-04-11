import _ from "lodash";
import Congruity from "congruity";
import { v4 as uuid } from "uuid";
import { getVehicleInformation } from "../_utils/getVehicleInformation.js";
import { parseRequestBody } from "../_utils/parseRequestBody.js";
import { formatLatestDatapoint } from "../_utils/formatLatestDatapoint.js";

export const formatData = Congruity.fn.asyncCompose(
  getVehicleInformation,
  formatLatestDatapoint,
  parseRequestBody
);
