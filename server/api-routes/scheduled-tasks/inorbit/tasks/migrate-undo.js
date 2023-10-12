import fs from "fs";
import { client } from "../../../../database/postgres/connection.js";
import { getVehicles } from "../../../_utils/services/inorbit/getVehicles.js";
import { getVehicleGroups } from "../../../_utils/services/inorbit/getVehiclesGroup.js";
import { getGroups } from "../../../_utils/services/inorbit/getGroups.js";

export async function inOrbitMigrationUndo(res) {
  try {
    fs.readFile("migration-undo.json", "utf8", (err, data) => {
      if (err) throw new Error("Unable to read migration-undo.json");

      const sqlQueries = JSON.parse(data);
      if (!sqlQueries.length)
        throw new Error("Undo Queries were not written to migration-undo.json");

      sqlQueries.forEach(async (sql) => await client.query(sql.join(";")));
    });

    res.send("Migration Undo Success");
  } catch (e) {
    console.log("INORBIT MIGRATION UNDO ERROR: ", e.message);
    console.log("INORBIT MIGRATION UNDO ERROR: ", e.stack);

    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
}
