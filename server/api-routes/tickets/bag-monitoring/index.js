import express from "express";
import { bagMonitoringAuth } from "../../_utils/authentication/bagMonitoringAuth.js";
import { createTicket } from "./_composed/index.js";
import { sqlSelectAllBagMonitoringTickets } from "../../../database/postgres/queries/tickets/select/bag-monitoring.js";
import { getTickets } from "./getTickets.js";
import { webClientConnect } from "../../_utils/authentication/checkAuthentication.js";

const router = express.Router();

router.use(bagMonitoringAuth);

router.post("/", async (req, res) => {
  try {
    console.log("Bag Monitoring: ", req.body);
    await createTicket(req.body);

    res.setHeader("Content-Type", "text/json");
    res.send({ success: "Email sent", body: req.body });
  } catch (e) {
    console.log("BAG MONITORING ERROR: ", e.message);
    console.log("BAG MONITORING ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack, body: req.body });
  }
});

router.get("/", async (req, res) => {
  try {
    const ticketData = await getTickets(req);
    const results = ticketData.getOrElse({ message: "No ticket fetched." });

    if (!results.message) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to get bag monitoring tickets");
    }
  } catch (e) {
    console.log("FETCHING BAG MONITORING TICKETS ERROR: ", e.message);
    console.log("FETCHING BAG MONITORING TICKETS ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

export default router;
