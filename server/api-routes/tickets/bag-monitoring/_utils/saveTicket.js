import { BagMonitoring } from "../../../../database/postgres/queries/tickets/insert/index.js";
import _ from "lodash";

export async function saveTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const result = await BagMonitoring.sqlInsertBagMonitoringTicket(clonedData);

    if (!result.rows.length)
      throw new Error("Error inserting bag monitoring ticket into database");

    clonedData.recordedToDB = true;

    return clonedData;
  } catch (e) {
    console.log("SEND BAG MONITORING EMAIL ERROR: ", e.message);
    console.log("SEND BAG MONITORING EMAIL ERROR: ", e.stack);
    clonedData.recordedToDB = false;
    clonedData.dbErrorMessage = e.error;
    clonedData.dbErrorStacktrace = e.stack;
  } finally {
    return clonedData;
  }
}
