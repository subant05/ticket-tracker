import _ from "lodash";
import { sqlInsertExpertConnectTicketTags } from "../../../../database/postgres/queries/tickets/insert/expert-connect.js";

export const recordExpertConnectTagsInDB = async (data) => {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const result = await sqlInsertExpertConnectTicketTags(clonedData);

    if (result.rows.length) throw new Error("No Rows Update or Inserted");

    return clonedData;
  } catch (e) {
    console.log("EXPERT CONNECT TICKET & TAGS ASSOC. INSERT ERROR", e.message);
    console.log("EXPERT CONNECT TICKET & TAGS ASSOC. INSERT STACK", e.stack);
    return null;
  }
};
