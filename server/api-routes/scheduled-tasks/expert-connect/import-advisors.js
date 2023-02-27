import express from "express";
import { importAdvisors } from "./tasks/import-advisors.js";

const router = express.Router();

router.get("/", async (req, res) => await importAdvisors(res));

export default router;
