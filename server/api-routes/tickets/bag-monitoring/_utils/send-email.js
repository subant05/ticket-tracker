import _ from "lodash";
import { bagMonitoring } from "../../../../_utils/mailer/index.js";

export async function sendEmail(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    await bagMonitoring(data);
    return clonedData;
  } catch (e) {
    console.log("SEND BAG MONITORING EMAIL ERROR: ", e.message);
    console.log("SEND BAG MONITORING EMAIL ERROR: ", e.stack);

    return null;
  }
}
