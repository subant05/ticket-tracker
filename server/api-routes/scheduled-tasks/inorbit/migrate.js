import express from "express";
import { inOrbitMigrate } from "./tasks/migrate.js";
import { inOrbitMigrationUndo } from "./tasks/migrate-undo.js";
import { migrationAuth } from "../../_utils/authentication/migrationAuth.js";

const router = express.Router();

router.use(migrationAuth);

router.get("/", async (req, res) => await inOrbitMigrate(res));
router.get("/undo", async (req, res) => await inOrbitMigrationUndo(res));

export default router;
