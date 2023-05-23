import _ from "lodash";
import Congruity from "congruity";
import { recordExpertConnectTagsInDB } from "../_utils/recordExpertConnectTagsInDB.js";
import { recordExpertConnectTagsS3 } from "../_utils/recordExpertConnectTagsS3.js";

export const recordExpertConnectTags = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(recordExpertConnectTagsS3),
  async (result) => result.asyncMap(recordExpertConnectTagsInDB)
);
