import { client, pool } from "../../../connection.js";

export const sqlSelectAllBagMonitoringTickets = async (data) => {
  let tickets = {
    rows: [],
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: false,
    },
  };

  try {
    const {
      offset,
      limit,
      device_name = "",
      error_message = "",
      error_code = "",
      vpu_position = "",
    } = data;

    if (isNaN(offset) || isNaN(limit))
      throw new Error("Limit and Offset must be numbers");

    tickets = await client.query(
      `
      SELECT 
        (select count(*) from tickets.bag_monitoring) as total,
        id,
        error_message,
        error_code,
        vpu_position,
        time,
        vehicle_name
      FROM tickets.bag_monitoring 
      WHERE 1=1
      ${
        device_name && device_name !== "null"
          ? " AND vehicle_name LIKE" + "'%" + device_name + "%'"
          : ""
      } 
      ${
        error_message && error_message !== "null"
          ? " AND error_message LIKE" + "'%" + error_message + "%'"
          : ""
      } 
      ${
        error_code && error_code !== "null"
          ? " AND error_code =" + error_code
          : ""
      } 
      ${
        vpu_position && vpu_position !== "null"
          ? " AND vpu_position =" + vpu_position
          : ""
      } 
      ORDER BY time DESC
      OFFSET $1
      LIMIT $2
    `,
      [offset, limit]
    );

    console.log(offset, limit);

    if (!tickets.rows.length) throw new Error("No tickets found");

    const total = tickets.rows[0].total;
    (tickets.pageInfo = {
      hasPreviousPage: false,
      hasNextPage: false,
    }),
      (tickets.pageInfo.hasPreviousPage =
        parseInt(offset) === 1 ? false : true);
    tickets.pageInfo.hasNextPage =
      total - offset < limit || !tickets.rows.length ? false : true;

    console.log(tickets.pageInfo.hasPreviousPage);
  } catch (e) {
    console.log("BAG MONITORING SELECT TICKETS ERROR", e.message);
    console.log("BAG MONITORING TICKETS ERROR", e.stack);
  } finally {
    return tickets;
  }
};
