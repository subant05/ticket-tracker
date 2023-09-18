import express from "express";
import Jira from "./jira.js";
import ExpertConnect from "./expert-connect/index.js";
import Athena from "./athena/index.js";
import InOrbit from "./inorbit/index.js";

import BagMonitoring from "./bag-monitoring/index.js";
import All from "./all/index.js";

const childRouter = express.Router();
const parentRouter = express.Router();

try {
  // Children
  childRouter.use("/jira", Jira);
  childRouter.use("/expert-connect", ExpertConnect);
  childRouter.use("/athena", Athena);
  childRouter.use("/inorbit", InOrbit);
  childRouter.use("/bag-monitoring", BagMonitoring);
  childRouter.use("/all", All);

  // Root
  parentRouter.use("/", childRouter);
} catch (err) {
  console.log(err);
}

export { parentRouter as default };
