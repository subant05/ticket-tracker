const { client, pool } = require("../../../connection.js")
import { createExpertConnectTicket } from "../../../../../api-routes/_utils/services/expert-connect/createTicket.js"
import { createJiraTicket } from "../../../../../api-routes/_utils/services/jira/createTask.js"
import moment from "moment"

export const sqlInsertJiraTicket = async (data) =>{
  let ticket = {rows:[]}

  try {

      ticket = await client.query(`
          INSERT INTO tickets.jira
          (
           jira_ticket,
           jira_id,
           project,
           description,
           summary,
           category,
           requirement,
           bundle,
           machine_type,
           priority,
           roadmap_item,
           team_id,
           formant_link,
           expert_connect_link,
           issue_type,
           bug_source
          )
          VALUES (
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8,
            $9,
            $10,
            $11,
            (select id from personnel.jira_teams where name = $12),
            $13,
            $14,
            $15,
            $16
            )
          
          RETURNING *
      `,[
        data.key,
        data.id,
        data.project,
        data.description,
        data.title,
        data.category,
        data.requirement,
        data.bundle,
        data.machine_type,
        data.priority,
        data.roadmap_item,
        data.team,
        data.formantUrl,
        data.expertConnectUrl,
        data.issue_type,
        data.bug_source
      ])

  }catch(e){
      console.log("EXPERT CONNECT TICKET INSERT ERROR", e.message)
      console.log("EXPERT CONNECT TICKET INSERT STACK", e.stack)

  } finally {
    return ticket
  }
}
