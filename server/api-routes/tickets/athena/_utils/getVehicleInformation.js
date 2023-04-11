import _ from "lodash";
import { Query } from "../../../../database/postgres/index.js";

export async function getVehicleInformation(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const vehicle =
    await Query.Vehicles.Select.Formant.sqlSelectVehicleAndGroupByVehicleName(
      clonedData
    );

  if (vehicle.rows.length) {
    clonedData.device = {
      id: vehicle.rows[0].device_id,
      name: vehicle.rows[0].name,
      tags: { ...clonedData.tags, GROUP: vehicle.rows[0].group_name },
    };
    clonedData.deviceId = clonedData.device.id;
    clonedData.device_id = clonedData.device;
    clonedData.tags = clonedData.device.tags;
  }

  return clonedData;
}
