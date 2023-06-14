import { client, pool } from "../../../connection.js";

export const sqlSelectAssociatedTickets = async (data) => {
  let tickets = {
    rows: [],
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: false,
    },
  };

  try {
    const { offset, limit, deviceName = "" } = data;
    if (isNaN(offset) || isNaN(limit))
      throw new Error("Limit and Offset must be numbers");

    tickets = await client.query(
      `
      select *,
          (select count(*) from tickets.tickets_view ) as total 
      from tickets.tickets_view
      WHERE device_name LIKE '%${deviceName}%'
      ORDER BY formant_time DESC
      OFFSET $1
      LIMIT $2
    `,
      [offset, limit]
    );

    if (!tickets.rows.length) throw new Error("No tickets found");

    const total = tickets.rows[0].total;
    (tickets.pageInfo = {
      hasPreviousPage: false,
      hasNextPage: false,
    }),
      (tickets.pageInfo.hasPreviousPage =
        parseInt(offset) === 1 ? false : true);
    tickets.pageInfo.hasNextPage =
      limit * offset < total && tickets.rows.length === parseInt(limit)
        ? true
        : false;
    console.log(tickets.pageInfo.hasPreviousPage);
  } catch (e) {
    console.log("FORMANT SELECT TICKETS ERROR", e.message);
    console.log("FORMANT SELECT TICKETS ERROR", e.stack);
  } finally {
    return tickets;
  }
};

export const sqlSelectAssociatedTicketsByDeviceName = async (data) => {
  let tickets = {
    rows: [],
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: false,
    },
  };

  try {
    const { offset, limit, deviceName = "" } = data;

    tickets = await client.query(
      `
      select *,
          (select count(*) from tickets.tickets_view ) as total 
      from tickets.tickets_view
      WHERE device_name LIKE '%${deviceName}%'
      ORDER BY formant_time DESC
      OFFSET $1
      LIMIT $2
    `,
      [offset, limit]
    );

    const total = tickets.rows[0].total;
    (tickets.pageInfo = {
      hasPreviousPage: false,
      hasNextPage: false,
    }),
      (tickets.pageInfo.hasPreviousPage =
        parseInt(offset) === 1 ? false : true);
    tickets.pageInfo.hasNextPage =
      limit * offset < total && tickets.rows.length === parseInt(limit)
        ? true
        : false;
  } catch (e) {
    console.log("FORMANT SELECT TICKETS ERROR", e.message);
    console.log("FORMANT SELECT TICKETS ERROR", e.stack);
  } finally {
    return tickets;
  }
};
