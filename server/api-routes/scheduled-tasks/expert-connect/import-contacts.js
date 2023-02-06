import express from "express";
import {importContacts} from './tasks/import-contacts.js'

const router = express.Router();

router.get("/",async (req,res)=> await importContacts(res))

export default router;