import express from "express";
import {importVehicles} from './tasks/import-vehicles.js'

const router = express.Router();

router.get("/",async (req,res)=> await importVehicles(res))

export default router;