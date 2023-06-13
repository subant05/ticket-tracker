import express from "express";
import { webClientConnect } from "../../_utils/authentication/checkAuthentication.js";
import { getTickets } from "./getTickets.js";

const router = express.Router();

router.use(webClientConnect);

router.get("/", async (req, res) => {
  try {
    const ticketData = await getTickets(req);
    const results = ticketData.getOrElse({ message: "No ticket fetched." });

    if (results) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to get tickets");
    }
  } catch (e) {
    console.log("FETCHING TICKETS ERROR: ", e.message);
    console.log("FETCHING TICKETS ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

export default router;
