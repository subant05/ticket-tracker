import express from "express";
import Formant from "./formant/index.js";
import Jira from "./jira.js";
import ExpertConnect from "./expert-connect/index.js";
import Athena from "./athena/index.js";
import BagMonitoring from "./bag-monitoring/index.js";
import All from "./all/index.js";

const childRouter = express.Router();
const parentRouter = express.Router();

try {
  // Children
  childRouter.use("/formant", Formant);
  childRouter.use("/jira", Jira);
  childRouter.use("/expert-connect", ExpertConnect);
  childRouter.use("/athena", Athena);
  childRouter.use("/bag-monitoring", BagMonitoring);
  childRouter.use("/all", All);

  // Root
  parentRouter.use("/", childRouter);
} catch (err) {
  console.log(err);
}

export { parentRouter as default };
