import express from "express";
import ScheduledTasks from './scheduled-tasks/index.js';
import Tickets from './tickets'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const childRouter = express.Router();
const parentRouter = express.Router();

childRouter.use('/scheduled-tasks', ScheduledTasks)
childRouter.use('/tickets', Tickets)

export default parentRouter.use('/', childRouter);

