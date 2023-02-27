import express from "express";
import VehicleImport from "./import-vehicles.js";
import GroupImport from "./import-groups.js";

const childRouter = express.Router();
const parentRouter = express.Router();

try {
  // Children
  childRouter.use("/import-vehicles", VehicleImport);
  childRouter.use("/import-groups", GroupImport);

  // Root
  parentRouter.use("/", childRouter);
} catch (err) {
  console.log(err);
}

export { parentRouter as default };
