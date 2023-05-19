import _ from "lodash";
import Congruity from "congruity";
import { recordExpertConnectTagsInDB } from "../_utils/recordExpertConnectTagsInDB.js";
import { recordExpertConnectTagsS3 } from "../_utils/recordExpertConnectTagsS3.js";

export const recordExpertConnectTags = Congruity.fn.asyncCompose(
  recordExpertConnectTagsS3,
  recordExpertConnectTagsInDB
);
