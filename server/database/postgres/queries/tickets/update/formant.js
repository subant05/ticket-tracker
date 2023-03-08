import { client, pool } from "../../../connection.js";

export const sqlDeactivateTickets = async (tickets = []) => {
  let updated = { rows: [] };
  try {
    if (!tickets.length)
      throw new Error(
        "Must include a list of tickets inorder to deactive active rules"
      );

    updated = await client.query(
      `
      UPDATE tickets.formant
        SET active = FALSE
      WHERE id in (${tickets.map((slot) => slot.id).join(",")})
    `,
      []
    );
  } catch (e) {
    console.log(
      "FORMANT UPDATE TICKET FROM ACTIVE TO DEACTIVE ERROR",
      e.message
    );
    console.log("FORMANT UPDATE TICKET FROM ACTIVE TO DEACTIVE STACK", e.stack);
  } finally {
    return updated;
  }
};
