import _ from "lodash";
import { Query } from "../../../../database/postgres/index.js";

export async function getVehicleInformation(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const vehicle = await Query.Vehicles.Select.Formant.sqlSelectVehicleByName(
    clonedData
  );

  if (vehicle.rows.length) clonedData.deviceId = vehicle.rows[0].device_id;

  return clonedData;
}
