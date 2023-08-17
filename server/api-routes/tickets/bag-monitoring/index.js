import express from "express";
import { bagMonitoringAuth } from "../../_utils/authentication/bagMonitoringAuth.js";
import { createTicket } from "./_composed/index.js";

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

export default router;
