import express from "express";
import ContactsImport from "./import-contacts.js";
import AdvisorsImport from "./import-advisors.js";
import TeamsImport from "./import-teams.js";
import TagsImport from "./import-tags.js";

const childRouter = express.Router();
const parentRouter = express.Router();

try {
  // Children
  childRouter.use("/import-contacts", ContactsImport);
  childRouter.use("/import-advisors", AdvisorsImport);
  childRouter.use("/import-teams", TeamsImport);
  childRouter.use("/import-tags", TagsImport);

  // Root
  parentRouter.use("/", childRouter);
} catch (err) {
  console.log(err);
}

export { parentRouter as default };
