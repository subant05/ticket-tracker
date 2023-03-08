import { client, pool } from "../../../connection.js";

export const sqlInsertTickets = async (data) => {
  let ticket = { rows: [] };

  try {
    ticket = await client.query(`select tickets.insert_tickets($1) `, [
      JSON.stringify(data),
    ]);
  } catch (e) {
    console.log(
      "FORMANT, EXPERT CONNECT & JIRA TICKET INSERT ERROR",
      e.message
    );
    console.log("FORMANT, EXPERT CONNECT & JIRA TICKET INSERT STACK", e.stack);
  } finally {
    return ticket;
  }
};
