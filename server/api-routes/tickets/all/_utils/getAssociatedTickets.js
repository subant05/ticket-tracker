import { Query } from "../../../../database/postgres/index.js";
import _ from "lodash";

export async function getAssociatedTickets(data) {
  if (!data || data === null) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const tickets = await Query.Tickets.Select.All.sqlSelectAssociatedTickets(
      data
    );

    if (!tickets.rows.length) throw new Error("No tickets fround");

    clonedData.tickets = tickets;

    return clonedData;
  } catch (e) {
    console.log("FETCHING ASSOCIATED TICKETS ERROR", e.message);
    console.log("FETCHING ASSOCIATED TICKETS ERROR", e.stack);

    return null;
  }
}
