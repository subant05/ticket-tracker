import express from "express";
import { webClientConnect } from "../../_utils/authentication/checkAuthentication.js";
import * as Rules from "../../../database/postgres/queries/rules/index.js";

const router = express.Router();

router.use(webClientConnect);

router.post("/", async (req, res) => {
  try {
    const results = await Rules.Insert.Formant.sqlInsertFormantRules(req.body);

    if (results.length) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to create Rules");
    }
  } catch (e) {
    console.log("RULE CREATE ERROR: ", e.message);
    console.log("RULE CREATE ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

router.get("/", async (req, res) => {
  try {
    const results = await Rules.Select.Formant.sqlSelectRulesByStreamName(
      req.query
    );

    // console.log(results.rows);

    if (results.rows.length) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to select Rules");
    }
  } catch (e) {
    console.log("RULE SELECT ERROR: ", e.message);
    console.log("RULE SELECT ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

router.put("/", async (req, res) => {
  try {
    const results = await Rules.Update.Formant.sqlUpdateRulesById(req.body);

    if (results) {
      res.setHeader("Content-Type", "application/json");
      res.send(req.body);
    } else {
      throw new Error("Unable to update rule");
    }
  } catch (e) {
    console.log("RULE UPDATE ERROR: ", e.message);
    console.log("RULE UPDATE ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

router.delete("/", async (req, res) => {
  try {
    const results = await Rules.Delete.Formant.sqlDeleteRulesById(req.query);

    if (results.rowCount) {
      res.setHeader("Content-Type", "application/json");
      res.send(results);
    } else {
      throw new Error("Unable to delete rule");
    }
  } catch (e) {
    console.log("RULE DELETE ERROR: ", e.message);
    console.log("RULE DELETE ERROR: ", e.stack);
    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
});

export { router as default };
