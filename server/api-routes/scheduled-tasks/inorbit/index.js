import express from "express";
import VehicleImport from "./import-vehicles.js";
import GroupImport from "./import-groups.js";
import Migrate from "./migrate.js";

const childRouter = express.Router();
const parentRouter = express.Router();

try {
  // Children
  childRouter.use("/import-vehicles", VehicleImport);
  childRouter.use("/import-groups", GroupImport);
  childRouter.use("/migrate", Migrate);

  // Root
  parentRouter.use("/", childRouter);
} catch (err) {
  console.log(err);
}

export { parentRouter as default };
