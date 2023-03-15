import express from "express";
import { formantConnect } from "../../_utils/authentication/checkAuthentication.js";
import {
  createTicketFromFormantEvent,
  createTicketsManually,
} from "./createTicket.js";

const router = express.Router();

router.use(formantConnect);

const queue = {};

router.post("/", async (req, res) => {
  try {
    const ticketData = await createTicketFromFormantEvent(req);
    const results = ticketData.getOrElse({ message: "No ticket created." });

    if (results) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to create tickets");
    }
  } catch (e) {
    console.log("FORMANT TICKET CREATION ERROR: ", e.message);
    console.log("FORMANT TICKET CREATION ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

router.post("/manual", async (req, res) => {
  try {
    const ticketData = await createTicketsManually(req);
    const results = ticketData.getOrElse({
      message: "No Manual ticket created.",
    });

    if (results) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to create tickets");
    }
  } catch (e) {
    console.log("FORMANT TICKET CREATION ERROR: ", e.message);
    console.log("FORMANT TICKET CREATION ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

export default router;
