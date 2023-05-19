import _ from "lodash";
import { formantS3DataUpload } from "./formatS3DataUpload.js";
import { uploadTicket } from "../../../_utils/services/aws/s3.js";

export const recordExpertConnectTagsS3 = async (data) => {
  if (!data || !data) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const s3Data = formantS3DataUpload(data);
    const uploadedData = await uploadTicket(s3Data);

    if (!uploadedData) throw new Error("Unable to Upload file to tags to S3");

    clonedData.s3Data = s3Data;
    return clonedData;
  } catch (e) {
    console.log("EXPERT CONNECT TICKET TAG S3 UPLOAD ERROR", e.message);
    console.log("EXPERT CONNECT TICKET TAG S3 UPLOAD ERROR", e.stack);
    return null;
  }
};
