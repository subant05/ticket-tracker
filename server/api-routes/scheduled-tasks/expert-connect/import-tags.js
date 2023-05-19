import express from "express";
import { importTags } from "./tasks/import-tags.js";

const router = express.Router();

router.get("/", async (req, res) => await importTags(res));

export default router;
