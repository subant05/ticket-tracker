import express from "express";
import { inOrbitConnect } from "../../_utils/authentication/in-orbitAuth.js";
import { createTicketFromInOrbit } from "./createTicket.js";

const router = express.Router();

router.use(inOrbitConnect);

router.post("/", async (req, res) => {
  try {
    const ticketData = await createTicketFromInOrbit(req);
    const results = ticketData.getOrElse({ message: "No ticket created." });

    if (results) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to create tickets");
    }
  } catch (e) {
    console.log("ATHENA TICKET CREATION ERROR: ", e.message);
    console.log("ATHENA TICKET CREATION ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

export default router;
