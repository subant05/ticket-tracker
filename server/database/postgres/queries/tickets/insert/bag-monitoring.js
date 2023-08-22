import { client, pool } from "../../../connection.js";
import moment from "moment";

export const sqlInsertBagMonitoringTicket = async (data) => {
  let ticket = { rows: [] };

  try {
    const {
      machine_id,
      error_message,
      error_code,
      vpu_position,
      timestamp,
      system,
    } = data;

    ticket = await client.query(
      `
      INSERT INTO tickets.bag_monitoring (
        error_message,
        error_code,
        vpu_position,
        time,
        vehicle_name
      ) VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
      )

      RETURNING *
    `,
      [
        error_message,
        error_code,
        vpu_position,
        timestamp,
        `${system}_${machine_id}`,
      ]
    );
  } catch (e) {
    console.log("BAG MONITORING TICKET INSERT ERROR", e.message);
    console.log("BAG MONITORING TICKET INSERT STACK", e.stack);
  } finally {
    return ticket;
  }
};
