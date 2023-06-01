import express from "express";
import Formant from "./formant/index.js";

const childRouter = express.Router();
const parentRouter = express.Router();

try {
  // Children
  childRouter.use("/formant", Formant);
  // Root
  parentRouter.use("/", childRouter);
} catch (err) {
  console.log(err);
}

export { parentRouter as default };
