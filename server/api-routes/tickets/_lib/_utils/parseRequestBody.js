import _ from "lodash";
import { v4 as uuid } from "uuid";

export function parseRequestBody(req) {
  if (!req || !req.body) return null;

  const clonedData = _.cloneDeep(req.body);
  const value = clonedData;
  const deviceName = `${clonedData.system}_${clonedData.machine_id}`;
  const message =
    process.env.NODE_ENV === "development"
      ? "#### IGNORE THIS DEMOTION ####"
      : "Demotion";
  const messageJson = [message, deviceName, clonedData];
  const valueJson = messageJson;
  const returnedData = {
    ...clonedData,
    eventType: "alert",
    type: "alert",
    formantUrl: null,
    inOrbitUrl: null,
    url: `${process.env.FORMANT_API_URL}`,
    sourceUrl: `${process.env.FORMANT_API_URL}`,
    time: clonedData.timestamp.replace("T", " "),
    id: uuid(),
    severity: "info",
    streamName: "autonomy_state_transition_report",
    streamType: "numeric set",
    stream_name: "autonomy_state_transition_report",
    stream_type: "numeric set",
    deviceName,
    device_name: deviceName,
    name: deviceName,
    value,
    message,
    latestDatapoint: clonedData,
    valueJson,
    messageJson,
    tags: {
      SYSTEM: clonedData.system,
      VPU_POSITION: "1",
    },
  };

  return returnedData;
}
