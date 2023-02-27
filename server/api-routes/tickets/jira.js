import express from "express";
// import {expertConnect} from '../_utils/authentication/checkAuthentication.js'
import fetch from "node-fetch";
import ExpertConnectCredentials from "../_utils/credentials/expertConnect.js";
import { loginFormantDeploymentService } from "../_utils/authentication/formantAuth";

const router = express.Router();

// router.use(expertConnect)

router.post("/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ data: "JIRA Post Method Response" });
});

export default router;
