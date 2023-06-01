import express from "express";
import { webClientConnect } from "../../_utils/authentication/checkAuthentication.js";
import { sqlInsertFormantRules } from "../../../database/postgres/queries/rules/insert/formant.js";

const router = express.Router();

router.use(webClientConnect);

router.post("/", async (req, res) => {
  try {
    const results = await sqlInsertFormantRules(req.body);

    if (results.length) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to create Rules");
    }
  } catch (e) {
    console.log("RULE CREATION ERROR: ", e.message);
    console.log("RULE TICKET CREATION ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

export { router as default };
