import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";
import { refreshToken } from "../../authentication/formantAuth.js";
import moment from "moment";

dotenv.config();
const dataParser = {
  update_status: (bundlePoints) => {
    const rxp = new RegExp(/(Running:\s)([0-9]+)(,)/gi);
    const latestBundleDatapoint = bundlePoints.pop();
    const bundleValue = latestBundleDatapoint[1];
    const regexParsed = rxp.exec(bundleValue)[2];

    return parseInt(regexParsed);
  },
};

export const getStreams = async (
  device_id,
  time = new Date(),
  streams = []
) => {
  if (!device_id) throw new Error("Device Id is needed to query streams");

  const startDateTime = moment(time).subtract(1, "hour").utc().format();
  const endDateTime = moment(time).add(1, "s").utc().format();
  const formantData = {};

  // console.log("ASSOC. STREAMS: ", streams);
  // console.log("ASSOC. STREAMS START DATETIME: ", startDateTime);
  // console.log("ASSOC. STREAMS END DATETIME: ", endDateTime);

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const response = await fetch(
      `${process.env.FORMANT_API_URL}/v1/queries/queries`,
      {
        method: "POST",
        body: JSON.stringify({
          deviceIds: [device_id],
          names: [...streams],
          start: startDateTime,
          end: endDateTime,
        }),
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
        },
      }
    );

    const payload = await response.json();

    // console.log("STREAMS RETURNED: ", payload);

    payload.items.forEach((item) => {
      if (dataParser[item.name]) {
        formantData[item.name] = dataParser[item.name](item.points);
      } else {
        const lastDataPoint = item.points.pop();
        formantData[item.name] = lastDataPoint[1];
      }
    });
  } catch (e) {
    console.log("FAILED TO GET VEHICLE BUNDLE FROM FORMANT", e.message);
    console.log("FAILED TO GET VEHICLE BUNDLE FROM FORMANT", e.stack);
  } finally {
    // console.log("ASSOC. DATA RETURNED: ", formantData);
    return formantData;
  }
};
