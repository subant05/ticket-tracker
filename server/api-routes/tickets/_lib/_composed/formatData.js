import _ from "lodash";
import Congruity from "congruity";
import { v4 as uuid } from "uuid";
import { getVehicleInformation } from "../_utils/getVehicleInformation.js";
import { parseRequestBody } from "../_utils/parseRequestBody.js";
import { formatLatestDatapoint } from "../_utils/formatLatestDatapoint.js";
import { createFormantShareLink } from "../_utils/createFormantShareLink.js";
import { createInOrbitShareLink } from "../_utils/createInOrbitShareLink.js";
import { getCombinedDatapoints } from "../_utils/getCombinedDatapoints.js";

export const formatData = Congruity.fn.asyncCompose(
  Congruity.fn.alt(createInOrbitShareLink, createFormantShareLink),
  getVehicleInformation,
  formatLatestDatapoint,
  getCombinedDatapoints,
  parseRequestBody
);
