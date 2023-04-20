import { client, pool } from "../../../../connection.js";

export const sqlSelectVehicleByName = async (data) => {
  let vehicle = { rows: [] };
  try {
    vehicle = await client.query(
      `
      SELECT * FROM vehicles.vehicle WHERE decommissioned = false AND name = $1
    `,
      [data.deviceName]
    );
  } catch (e) {
    console.log("FORMANT SELECT VEHICLE BY NAME ERROR", e.message);
    console.log("FORMANT SELECT VEHICLE BY NAME ERROR", e.stack);
  } finally {
    return vehicle;
  }
};

export const sqlSelectVehicleAndGroupByVehicleName = async (data) => {
  let vehicle = { rows: [] };
  try {
    vehicle = await client.query(
      `
      SELECT 
      vehicles.vehicle.id,
      vehicles.vehicle.device_id,
      vehicles.vehicle.name,
      vehicles.vehicle.ip,
      vehicles.vehicle.decommissioned,
      vehicles.vehicle.created_at,
  vehicles.group.id as group_id,
      vehicles.group.name as group_name
    FROM vehicles.vehicle
    LEFT OUTER JOIN vehicles.vehicle_group ON vehicles.vehicle_group.vehicle_id = vehicles.vehicle.id
    LEFT OUTER JOIN vehicles.group ON vehicles.group.id = vehicles.vehicle_group.id
    WHERE vehicles.vehicle.decommissioned = false AND vehicles.vehicle.name = $1
    `,
      [data.deviceName]
    );
  } catch (e) {
    console.log("FORMANT SELECT VEHICLE BY NAME ERROR", e.message);
    console.log("FORMANT SELECT VEHICLE BY NAME ERROR", e.stack);
  } finally {
    return vehicle;
  }
};
