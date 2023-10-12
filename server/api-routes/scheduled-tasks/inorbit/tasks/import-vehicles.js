import { client } from "../../../../database/postgres/connection.js";
import { getVehicles } from "../../../_utils/services/inorbit/getVehicles.js";
import { getVehicleGroups } from "../../../_utils/services/inorbit/getVehiclesGroup.js";

export const importVehicles = async (res) => {
  try {
    const vehicles = await getVehicles();

    vehicles.forEach(async (device) => {
      const deviceValueInsert = `('${device.id}','${device.name}', false)`;
      await client.query(
        `INSERT INTO vehicles.vehicle (device_id, name, decommissioned)
                    VALUES ${deviceValueInsert}
                    ON CONFLICT (device_id, name) 
                    DO UPDATE SET decommissioned = ${!device.enabled}

                    RETURNING *
                `,
        []
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

    if (res) res.send("Submission Success");
    else process.exit(0);
  } catch (e) {
    console.log(e);

    if (res) res.send("Submission Failed");
    else process.exit(1);
  }
};
