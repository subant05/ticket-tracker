import express from "express";
import {importTeams} from './tasks/import-teams.js'

const router = express.Router();

router.get("/",async (req,res)=> await importTeams(res))

export default router;