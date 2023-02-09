import express from "express";
import {formantConnect} from '../_utils/authentication/checkAuthentication.js'
import fetch from 'node-fetch'
import ExpertConnectCredentials from '../_utils/credentials/expertConnect.js'
import { Query } from "../../database/postgres/index.js";
import { getVehicleFormantData } from "../_utils/services/formant/getVehicleFormantData.js";
import { createExpertConnectTicket } from "../_utils/services/expert-connect/createTicket.js";
import { createJiraTicket } from "../_utils/services/jira/createTask.js";
import { updateExpertConnectTicket } from "../_utils/services/expert-connect/updateTicket.js";
import { updateJiraTicket } from "../_utils/services/jira/updateTask.js";
import moment from "moment"

const router = express.Router();

router.use(formantConnect)


router.post("/", async (req, res) => {
  try{

      // FORMANT REQUEST
      const specifications = { 
        eventType:req.body.eventType
        , ...req.body.payload
        , stream_name: req.body.payload.streamName
        , stream_type: req.body.payload.streamType
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
      specifications.ERC =  formantData.vadcDiagnostics.ERC
      specifications.SUP =  formantData.vadcDiagnostics.SUP
      specifications.TRIGGER =  formantData.vadcDiagnostics.TRIGGER
      specifications.title = `State Demotion - ERC=${specifications.ERC}, SUP=${specifications.SUP}`

      //  EXPERT CONNECT TICKET POST
      const expertConnectTicket = await createExpertConnectTicket({...specifications})
      specifications.expertConnectTicket = expertConnectTicket
      specifications.expertConnectUrl = expertConnectTicket.data.url

      //  JIRA ISSUE POST
      const jiraTicket = await createJiraTicket({...specifications})
      specifications.jiraUrl = `${process.env.JIRA_URL}/browse/${jiraTicket.key}`
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
    
      const tickets = await Query
        .Tickets
        .Insert
        .All
        .sqlInsertTickets([specifications])

      if(!tickets.rows.length)
        throw new Error("Unable to insert all tickets")
       
      // UPDATE TICKETS
      const updatedEC = await updateExpertConnectTicket(specifications.expertConnectTicket.data.id, specifications)
      const updatedJira = await updateJiraTicket(jiraTicket.key, specifications)

      console.log("Tickets: ", specifications)
      res.setHeader('Content-Type', 'application/json')
      res.send(specifications)

  } catch(e){
      res.status(503)
      res.setHeader('Content-Type', 'text/json')
      res.send({"Error":e.message})
  }
})

export default router;