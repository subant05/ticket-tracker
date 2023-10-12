import _ from "lodash";
import moment from "moment";

export function createInOrbitShareLink(data) {
  if (
    !data ||
    data === null ||
    !data.deviceId ||
    !data.value.timestamp ||
    data.dashboard !== "inorbit"
  )
    return null;

  console.log(data.dashboard);

  const clonedData = _.cloneDeep(data);
  const timestamp = clonedData.value.timestamp;

  try {
    const inOrbitShareUrl = `https://${
      process.env.IN_ORBIT_CONTROL_URI
    }/dashboards/${process.env.IN_ORBIT_ACCOUNT_ID}/${
      process.env.IN_ORBIT_TIME_CAPSULE_DASHBOARD
    }?ctx=(robot:(RosDiagnosticsLevel:ALL,robotId:${
      data.deviceId
    }),time:(startTime:${moment(timestamp)
      .subtract(1, "m")
      .valueOf()},timeRangeMs:3600000,focusTime:${moment(
      timestamp
    ).valueOf()}),playback:(mapVisualizationType:position,savedPathType:none,map:(mapLabel:utm-10,dataHash:navsat-utm-10)))`;
    clonedData.url = inOrbitShareUrl;
    clonedData.sourceUrl = inOrbitShareUrl;
    clonedData.inOrbitUrl = inOrbitShareUrl;

    return clonedData;
  } catch (e) {
    console.log("UNABLE TO CREATE INORBIT SHARE LINK: ", e.message);
    console.log("UNABLE TO CREATE INORBIT SHARE LINK: ", e.stack);

    return null;
  }
}
