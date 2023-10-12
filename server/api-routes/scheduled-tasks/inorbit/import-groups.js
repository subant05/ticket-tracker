import express from "express";
import { importGroups } from "./tasks/import-groups.js";

const router = express.Router();

router.get("/", async (req, res) => await importGroups(res));

export default router;
