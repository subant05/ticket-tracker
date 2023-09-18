import _ from "lodash";
import { Query } from "../../../../database/postgres/index.js";

export async function insertTicketsIntoDatabase(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  // console.log("Before DB Insert: --------------");
  // console.log(data);
  // console.log("--------------");
  // console.log(JSON.stringify(data));
  // console.log("--------------");

  try {
    const tickets = await Query.Tickets.Insert.All.sqlInsertTickets([
      clonedData,
    ]);

    if (!tickets.rows.length) throw new Error("Unable to insert all tickets");

    return clonedData;
  } catch (e) {
    console.log("FORMANT TICKET CREATION ERROR: ", e.message);
    console.log("FORMANT TICKET CREATION ERROR: ", e.stack);
    return null;
  }
}
