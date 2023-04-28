import _ from "lodash";
import { v4 as uuid } from "uuid";

export function parseRequestBody(req) {
  if (!req || !req.body) return null;

  const clonedData = _.cloneDeep(req.body);
  const value = clonedData;
  const deviceName = `${clonedData.system}_${clonedData.machine_id}`;
  const messageJson = ["Demotion", deviceName, clonedData];
  const valueJson = messageJson;
  const returnedData = {
    eventType: "alert",
    type: "alert",
    formantUrl: `${process.env.FORMANT_API_URL}`,
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
    message: "##### TEST ATHENA - IGNORE ##### Demotion",
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
