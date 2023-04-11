import express from "express";
import Formant from "./formant/index.js";
import Jira from "./jira.js";
import ExpertConnect from "./expert-connect/index.js";
import Athena from "./athena/index.js";

const childRouter = express.Router();
const parentRouter = express.Router();

try {
  // Children
  childRouter.use("/formant", Formant);
  childRouter.use("/jira", Jira);
  childRouter.use("/expert-connect", ExpertConnect);
  childRouter.use("/athena", Athena);

  // Root
  parentRouter.use("/", childRouter);
} catch (err) {
  console.log(err);
}

export { parentRouter as default };
