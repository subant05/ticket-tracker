const { client, pool } = require("../../../connection.js")
import { createExpertConnectTicket } from "../../../../../api-routes/_utils/services/expert-connect/createTicket.js"
import moment from "moment"

export const sqlInsertExpertConnectTicket = async (data) =>{
  let ticket = {rows:[]}

  try {

      ticket = await client.query(`
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
      `,[
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
      ])

  }catch(e){
      console.log("EXPERT CONNECT TICKET INSERT ERROR", e.message)
      console.log("EXPERT CONNECT TICKET INSERT STACK", e.stack)

  } finally {
    return ticket
  }
}
