import _ from "lodash";
import Congruity from "congruity";
import { v4 as uuid } from "uuid";
import { getVehicleInformation } from "../_utils/getVehicleInformation.js";
import { parseRequestBody } from "../_utils/parseRequestBody.js";
import { formatLatestDatapoint } from "../_utils/formatLatestDatapoint.js";
import { createFormantShareLink } from "../_utils/createFormantShareLink.js";

export const formatData = Congruity.fn.asyncCompose(
  createFormantShareLink,
  getVehicleInformation,
  formatLatestDatapoint,
  parseRequestBody
);
