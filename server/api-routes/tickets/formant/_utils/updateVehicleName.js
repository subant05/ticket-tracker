import _ from "lodash";

export function updateVehicleName(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const rgx = new RegExp("([a-zA-Z]+_)([0-9]+)");
  const deviceName = rgx.test(clonedData.messageJson[1])
    ? rgx.exec(clonedData.messageJson[1])[0]
    : clonedData.messageJson[1];

  clonedData.deviceName = deviceName;
  clonedData.device = { name: deviceName };
  clonedData.name = deviceName;

  return clonedData;
}
