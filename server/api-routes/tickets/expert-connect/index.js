import express from "express";
import Congruity from "congruity";
import { expertConnect as expertConenctWebHook } from "../../_utils/authentication/checkAuthentication.js";
import { exprertConnect as expertConnectAuthentication } from "../../_utils/authentication/expressConnectAuth.js";
import { getExpertConnectTicketData } from "./_composed/getExpertConnectTicketData.js";
import { createOrUpdateExpertConnectTicket } from "./alternates/createOrUpdateExpertConnectTicket.js";
import { recordExpertConnectTags } from "./_composed/recordExpertConnectTags.js";

const router = express.Router();

router.use(expertConenctWebHook);
router.use(expertConnectAuthentication);

const handleExpertConnectWebhook = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(recordExpertConnectTags),
  async (result) => result.asyncMap(createOrUpdateExpertConnectTicket),
  async (result) => result.asyncMap(getExpertConnectTicketData),
  Congruity.monad.Either.fromNullable
);

router.post("/", async (req, res) => {
  try {
    console.log("Expert Connect Webhook: ", req.body);
    const ticketData = await handleExpertConnectWebhook(req.body);
    const results = ticketData.getOrElse({ message: "No ticket created." });

    if (results) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to create associated expert connecttickets");
    }
  } catch (e) {
    console.log("EXPERT CONNECT ASSOCIATED TICKET CREATION ERROR: ", e.message);
    console.log("EXPERT CONNECT ASSOCIATED TICKET CREATION ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

export default router;
