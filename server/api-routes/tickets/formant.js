import express from "express";
import { formantConnect } from "../_utils/authentication/checkAuthentication.js";
import fetch from "node-fetch";
import ExpertConnectCredentials from "../_utils/credentials/expertConnect.js";
import { Query } from "../../database/postgres/index.js";
import { getVehicleFormantData } from "../_utils/services/formant/getVehicleFormantData.js";
import { createExpertConnectTicket } from "../_utils/services/expert-connect/createTicket.js";
import { createJiraTicket } from "../_utils/services/jira/createTask.js";
import { updateExpertConnectTicket } from "../_utils/services/expert-connect/updateTicket.js";
import { updateJiraTicket } from "../_utils/services/jira/updateTask.js";
import { parseValues } from "../_utils/services/formant/getVehicleFormantData.js";
import { generateFormantRequestSpecifications } from "../_utils/formating/generateFormantRequestSpecifiations.js";
import { Formant } from "../_utils/rules";
import moment from "moment";

const router = express.Router();

router.use(formantConnect);

const queue = {};

router.post("/", async (req, res) => {
  let specifications = {};
  let eventVerified = false;

  try {
    // FORMANT REQUEST
    console.log("FORMANT EVENT: ", JSON.stringify(req.body.payload, null, " "));

    specifications = generateFormantRequestSpecifications(req);
    eventVerified = await Formant.checkEvent(specifications);

    console.log("QUEUE: ", queue[specifications.streamName]);

    if (
      eventVerified &&
      (!queue[specifications.streamName] ||
        queue[specifications.streamName].indexOf(specifications.deviceId) ===
          -1)
    ) {
      // ADD DEVICE TO QUEUE
      if (!queue[specifications.streamName])
        queue[specifications.streamName] = [specifications.deviceId];
      else queue[specifications.streamName].push(specifications.deviceId);

      const expertConnectTicket = await createExpertConnectTicket({
        ...specifications,
      });
      specifications.expertConnectTicket = expertConnectTicket;
      specifications.expertConnectUrl = expertConnectTicket.data.url;

      //  JIRA ISSUE POST
      const jiraTicket = await createJiraTicket({ ...specifications });
      specifications.jiraUrl = `${process.env.JIRA_URL}/browse/${jiraTicket.key}`;
      specifications.jiraTicket = {
        ...jiraTicket,
        project: "SQUASH",
        category: "Defect",
        requirement: "INTERVENTIONS",
        machine_type: "Loamy (Autonomous Tractor)",
        priority: "Medium",
        roadmap_item: "Spring 2023-Delivery",
        team: "Robotics",
        issue_type: "Bug/Story",
        bug_source: "Field Support / ExpertConnect",
      };

      const tickets = await Query.Tickets.Insert.All.sqlInsertTickets([
        specifications,
      ]);

      if (!tickets.rows.length) throw new Error("Unable to insert all tickets");

      // UPDATE TICKETS
      const updatedEC = await updateExpertConnectTicket(
        specifications.expertConnectTicket.data.id,
        specifications
      );
      const updatedJira = await updateJiraTicket(
        jiraTicket.key,
        specifications
      );

      // REMOVE DEVICE FROM QUEUE
      queue[specifications.streamName].splice(
        queue[specifications.streamName].indexOf(specifications.deviceId),
        1
      );
    }

    res.setHeader("Content-Type", "application/json");
    res.send(specifications);
  } catch (e) {
    console.log("FORMANT TICKET CREATION ERROR: ", e.message);
    console.log("FORMANT TICKET CREATION ERROR: ", e.stack);

    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ Error: e.message });
  } finally {
    console.log(
      "FINAL SPECIFICATIONS: ",
      JSON.stringify(specifications, null, " ")
    );

    // REMOVE DEVICE FROM QUEUE
    if (
      eventVerified &&
      specifications.streamName &&
      queue[specifications.streamName] &&
      queue[specifications.streamName].indexOf(specifications.deviceId) !== -1
    ) {
      queue[specifications.streamName].splice(
        queue[specifications.streamName].indexOf(specifications.deviceId),
        1
      );
    }
  }
});

export default router;
