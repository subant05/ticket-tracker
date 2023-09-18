import _ from "lodash";
import { getShareLink } from "../../../_utils/services/formant/getShareLink.js";
import moment from "moment";

export async function createFormantShareLink(data) {
  if (!data || data === null || !data.deviceId || !data.value.timestamp)
    return null;

  const clonedData = _.cloneDeep(data);
  const timestamp = clonedData.value.timestamp;

  try {
    const formantShareLink = await getShareLink(
      {
        delegateTeleop: false,
        message: `Demotion: ${clonedData.deviceName}`,
        scope: {
          deviceIds: [clonedData.deviceId],
          start: moment(timestamp).subtract(5, "m").toISOString(),
          end: timestamp,
        },
        time: timestamp,
      },
      "L1"
    );

    clonedData.url = formantShareLink;
    clonedData.sourceUrl = formantShareLink;
    clonedData.formantUrl = formantShareLink;

    return clonedData;
  } catch (e) {
    return null;
  }
}
