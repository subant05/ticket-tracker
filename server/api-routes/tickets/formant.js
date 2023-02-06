import express from "express";
import {formantConnect} from '../_utils/authentication/checkAuthentication.js'
import fetch from 'node-fetch'
import ExpertConnectCredentials from '../_utils/credentials/expertConnect.js'
import { Query } from "../../database/postgres/index.js";
import { getVehicleFormantData } from "../_utils/services/formant/getVehicleFormantData.js";
import { createExpertConnectTicket } from "../_utils/services/expert-connect/createTicket.js";
import { createJiraTicket } from "../_utils/services/jira/createTask.js";
import moment from "moment"

const router = express.Router();

router.use(formantConnect)


router.post("/", async (req, res) => {
  try{

      // // Formant
      // const insertFormantResult = await Query
      //   .Tickets
      //   .Insert
      //   .Formant
      //   .sqlInsertFormantTicket({ eventType:req.body.eventType, ...req.body.payload })

      // if(!insertFormantResult.rows.length)
      //   throw new Error("Formant Ticket Insertion failed")

    //   {
    //     "id": "9",
    //     "vehicle_id": "309",
    //     "formant_id": "e0be1601-0ac2-41f8-b239-1dbe9a2d68db",
    //     "device_id": "f4a7e159-761e-446c-bdc3-63687d460a79",
    //     "message": "Oven temperature high",
    //     "severity": "warning",
    //     "stream_name": "oven.temperature_c",
    //     "stream_type": "numeric",
    //     "tags": "{\"location\":\"sf\"}",
    //     "value": "250",
    //     "time": "2023-02-01T00:13:22.903Z",
    //     "url": "https://app.formant.io/events/e0be1601-0ac2-41f8-b239-1dbe9a2d68db",
    //     "created_at": "2023-02-02T22:27:11.093Z",
    //     "updated_at": "2023-02-02T22:27:11.093Z",
    //     "type": "alert",
    //     "bundle": 5107
    // }

      // const formantTicket = insertFormantResult.rows[0]
      // const vadcDiagnostics = JSON.parse(formantTicket.vadc_diagnostics)
      // const specifications = {
      //   ...formantTicket
      //   , ...vadcDiagnostics
      //   , formantUrl: formantTicket.url
      //   , title: "State Demotion - ERC, SUP" 
      // }
      
      ///////////////////////////////
      // FORMANT REQUEST
      const specifications = { 
        eventType:req.body.eventType
        , ...req.body.payload
        , stream_name: req.body.payload.steamName
        , stream_type: req.body.payload.steamType
        , type: req.body.eventType
        , formantUrl: req.body.payload.sourceUrl
        , time: req.body.payload.time.replace("T", " ")
       }
      const startDateTime = moment(specifications.time).subtract(1,'hour').utc().format()
      const endDateTime = moment(specifications.time).utc().format()
      const formantData = await getVehicleFormantData(specifications.deviceId, startDateTime, endDateTime)
      
      specifications.bundle = formantData.bundle
      specifications.vadcDiagnostics = formantData.vadcDiagnostics
      specifications.device = formantData.device
      specifications.name = formantData.device.name
      
      //  EXPERT CONNECT TICKET POST
      const expertConnectTicket = await createExpertConnectTicket({...specifications})
      specifications.expertConnectTicket = expertConnectTicket
      specifications.expertConnectUrl = expertConnectTicket.data.url

      //  JIRA ISSUE POST
      const jiraTicket = await createJiraTicket({...specifications})
      specifications.jiraTicket = {
        ...jiraTicket
        , project: "TRAP"
        , category: "Defect"
        , requirement : "INTERVENTIONS"
        , machine_type : "Loamy (Autonomous Tractor)"
        , priority: "Medium"
        , roadmap_item: "Spring 2023-Delivery"
        , team: "Robotics"
        , issue_type: "Bug/Story"
        , bug_source: "Field Support / ExpertConnect"
      }

      console.log(JSON.stringify(specifications))

    
      const tickets = await Query
        .Tickets
        .Insert
        .All
        .sqlInsertTickets([specifications])

      if(!tickets.rows.length)
       throw new Error("Unable to insert all tickets")

      console.log("Tickets: ", tickets.rows[0])
      res.setHeader('Content-Type', 'application/json')
      res.send(tickets.rows[0])

      ///////////////////////////////

      // // Expert Connect
      // const insertExpertConnectResult = await Query
      //     .Tickets
      //     .Insert
      //     .ExpertConnect
      //     .sqlInsertExpertConnectTicket(specifications)

      // if(!insertExpertConnectResult.rows.length)
      //     throw new Error("Expert Connect Ticket Insertion failed")


      // // Jira
      // const insertJiraTicket = await Query
      //     .Tickets
      //     .Insert
      //     .Jira
      //     .sqlInsertJiraTicket({
      //       ...formantTicket
      //       , ...insertExpertConnectResult.rows[0]
      //       , expertConnectUrl: `${process.env.EXPERT_CONNECT_APP_URL}/ticket/${insertExpertConnectResult.ec_id}`
      //     })

      // if(!insertJiraTicket.rows.length)
      //     throw new Error("Jira Ticket Insertion failed")

      // res.setHeader('Content-Type', 'application/json')
      // res.send(insertJiraTicket.rows)
  } catch(e){
      res.status(503)
      res.setHeader('Content-Type', 'text/json')
      res.send({"Error":e.message})
  }
})

export default router;