import fs from "fs";
import { client } from "../../../../database/postgres/connection.js";
import { getVehicles } from "../../../_utils/services/inorbit/getVehicles.js";
import { getVehicleGroups } from "../../../_utils/services/inorbit/getVehiclesGroup.js";
import { getGroups } from "../../../_utils/services/inorbit/getGroups.js";

async function generateVehicleUpdateUndoQuery(currentActiveFormantVehicles) {
  return currentActiveFormantVehicles.rows.map((row) => {
    return `
        UPDATE vehicles.vehicle 
        SET device_id = '${row.device_id}' 
        WHERE id = ${row.id}
      `
      .replace(/([\n]+)/gi, "")
      .trim();
  });
}

async function generateGroupUpdateUndoQuery(currentActiveFormantGroups) {
  return currentActiveFormantGroups.rows.map((row) => {
    return `
      UPDATE vehicles.group 
      SET group_id = '${row.group_id}'
      WHERE id = ${row.id}
    `
      .replace(/([\n]+)/gi, "")
      .trim();
  });
}

async function importInOrbitGroups() {
  try {
    const groups = await getGroups();

    return Promise.all(
      groups.map(async (group) => {
        // console.log(group)
        return await client.query(
          `INSERT INTO vehicles.group (
            name, 
            group_id)
            VALUES (
              $1,
              $2
            )
            ON CONFLICT (name) 
            DO UPDATE SET name = $1, 
            group_id = $2
            RETURNING *
        `,
          [group.name, group.id]
        );
      })
    );
  } catch (e) {
    console.log("INORBIT GROUP IMPORT ERROR: ", e.message);
    console.log("INORBIT GROUP IMPORT ERROR: ", e.stack);

    return null;
  }
}

async function importInOrbitVehicles() {
  try {
    const vehicles = await getVehicles();

    vehicles.forEach(async (device) => {
      await client.query(
        `Update vehicles.vehicle
         SET device_id = $1
         WHERE name = $2 
         AND decommissioned = false
        `,
        [device.id, device.name]
      );
      const groups = await getVehicleGroups(device.id);

      if (groups.length) {
        let insertGroupValues = groups.forEach(async (group) => {
          await client.query(
            `INSERT INTO vehicles.vehicle_group(vehicle_id, group_id)
                            VALUES (
                              (select id from vehicles.vehicle where device_id = $1),
                            (select id from vehicles.group where name = $2)
                            )
                            ON CONFLICT (vehicle_id) 
                            DO UPDATE SET group_id = (select id from vehicles.group where name = $2)
            
                            RETURNING *
                        `,
            [device.id, group.name]
          );
        });
      }
    });
  } catch (e) {
    console.log("INORBIT VEHICLE IMPORT ERROR: ", e.message);
    console.log("INORBIT VEHICLE IMPORT ERROR: ", e.stack);

    return null;
  }
}

export async function inOrbitMigrate(res) {
  try {
    const currentActiveFormantVehicles = await client.query(
      "Select id, device_id, name FROM vehicles.vehicle where decommissioned = false"
    );
    const currentActiveFormantGroups = await client.query(
      "Select id, group_id, name FROM vehicles.group"
    );

    const undoSteps = [
      await generateVehicleUpdateUndoQuery(currentActiveFormantVehicles),
      await generateGroupUpdateUndoQuery(currentActiveFormantGroups),
    ];

    fs.writeFileSync(
      "migration-undo.json",
      JSON.stringify(undoSteps, null, " ")
    );

    fs.readFile("migration-undo.json", "utf8", (err, data) => {
      if (err) throw new Error("Unable to read migration-undo.json");

      const sqlQueries = JSON.parse(data);
      if (sqlQueries.length !== 2)
        throw new Error(
          "Undo Queries were not writtent to migration-undo.json"
        );
    });

    await importInOrbitGroups();
    await importInOrbitVehicles();

    res.send("Migration Success");
  } catch (e) {
    console.log("INORBIT MIGRATION ERROR: ", e.message);
    console.log("INORBIT MIGRATION ERROR: ", e.stack);

    res.status(503);
    res.setHeader("Content-Type", "text/json");
    res.send({ error: e.message, stack: e.stack });
  }
}
