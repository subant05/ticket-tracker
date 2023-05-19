import { client, pool } from "../../../connection.js";
import { createExpertConnectTicket } from "../../../../../api-routes/_utils/services/expert-connect/createTicket.js";
import moment from "moment";

export const sqlInsertExpertConnectTicket = async (data) => {
  let ticket = { rows: [] };

  try {
    ticket = await client.query(
      `
          INSERT INTO tickets.expert_connect
          (
            vehicle_id,
            title,
            description,
            product,
            machine_hours,
            serial_number,
            misc,
            resolution,
            contact_id,
            advisor_id,
            team_id,
            bundle,
            ec_id
          )
          VALUES (
            (select id from vehicles.vehicle where device_id = $1),
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            (select id from personnel.expert_connect_contacts where ec_id = $9),
            (select id from personnel.expert_connect_advisors where ec_id = $10),
            (select id from personnel.expert_connect_teams where ec_id = $11),
            $12,
            $13
            )
          
          RETURNING *
      `,
      [
        data.device_id,
        data.title,
        data.description,
        data.product,
        data.machineHours,
        data.serialNumber,
        data.misc,
        data.resolution,
        data.customer.id,
        data.advisor.id,
        data.team.id,
        data.bundle,
        data.id,
      ]
    );
  } catch (e) {
    console.log("EXPERT CONNECT TICKET INSERT ERROR", e.message);
    console.log("EXPERT CONNECT TICKET INSERT STACK", e.stack);
  } finally {
    return ticket;
  }
};

export const sqlInsertExpertConnectTicketTags = async (data) => {
  let ticketTags = { rows: [] };

  try {
    const expertConnectData = data.expertConnectTicket.data;
    const ticketId = expertConnectData.id;
    const tagsInsertValue = expertConnectData.tags
      .map((tag) => {
        return `(
                  (SELECT id FROM tickets.expert_connect WHERE ec_id ='${ticketId}'),
                  (SELECT id FROM  tags.expert_connect WHERE ec_id = '${tag.id}')
                )`;
      })
      .join(",");

    const deleteList = `
      SELECT id FROM tags.expert_connect 
      WHERE ec_id IN (${expertConnectData.tags
        .map((tag) => `'${tag.id}'`)
        .join(",")})
    `;

    ticketTags = await client.query(
      `
      WITH ins_ticket_tags AS (
        INSERT INTO tickets.expert_connect_ticket_tags
        (
          ticket_id,
          tag_id
        )
        VALUES ${tagsInsertValue}
        ON CONFLICT (ticket_id, tag_id)
        DO UPDATE 
        SET ticket_id = EXCLUDED.ticket_id, 
        tag_id = EXCLUDED.tag_id

        RETURNING *
      )

      DELETE FROM tickets.expert_connect_ticket_tags 
      WHERE ticket_id = (SELECT id FROM tickets.expert_connect WHERE ec_id = '${ticketId}')
      AND tag_id NOT IN (${deleteList})
      `
    );
  } catch (e) {
    console.log("EXPERT CONNECT TICKET & TAGS ASSOC. INSERT ERROR", e.message);
    console.log("EXPERT CONNECT TICKET & TAGS ASSOC. INSERT STACK", e.stack);
  } finally {
    return ticketTags;
  }
};
