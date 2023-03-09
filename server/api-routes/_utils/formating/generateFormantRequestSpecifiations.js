import { Query } from "../../../database/postgres/index.js";

export const generateFormantRequestSpecifications = async (req) => {
  let specifications;

  try {
    const rgx = new RegExp("([a-zA-Z]+_)([0-9]+)");
    const messageJson = JSON.parse(req.body.payload.message);
    const valueJson = JSON.parse(req.body.payload.value);
    const message = messageJson[0];
    const deviceName = rgx.test(messageJson[1])
      ? rgx.exec(messageJson[1])[0]
      : messageJson[1];
    const latestDatapoint = valueJson[valueJson.length - 1];
    specifications = {
      eventType: req.body.eventType,
      ...req.body.payload,
      stream_name: req.body.payload.streamName,
      stream_type: req.body.payload.streamType,
      type: req.body.eventType,
      formantUrl: req.body.payload.sourceUrl,
      time: req.body.payload.time.replace("T", " "),
      deviceName,
      message,
      latestDatapoint,
      valueJson,
      device: { name: deviceName },
      name: deviceName,
      value: {},
    };

    const vehicle = await Query.Vehicles.Select.Formant.sqlSelectVehicleByName({
      deviceName,
    });

    if (vehicle.rows.length)
      specifications.deviceId = vehicle.rows[0].device_id;
  } catch (e) {
    console.log("GENERATE FORMANT REQUEST SPECS ERROR", e.message);
    console.log("GENERATE FORMANT REQUEST SPECS ERROR", e.stack);
  } finally {
    return specifications;
  }
};
