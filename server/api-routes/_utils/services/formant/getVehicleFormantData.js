import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";
import { refreshToken } from "../../authentication/formantAuth";
import moment from "moment";

dotenv.config();

const parseBundleData = (bundlePoints) => {
  const rxp = new RegExp(/(Running:\s)([0-9]+)(,)/gi);
  const latestBundleDatapoint = bundlePoints.pop();
  const bundleValue = latestBundleDatapoint[1];
  const regexParsed = rxp.exec(bundleValue)[2];

  return parseInt(regexParsed);
};

export const parseValues = (
  values,
  filters = ["supplemental_error_code", "halt_code", "autonomy_state"]
) => {
  const convertedValues = values
    .filter((f) => {
      return filters.indexOf(f.label) > -1;
    })
    .map((r) => {
      switch (r.label) {
        case "supplemental_error_code":
          r.label = "SUP";
          break;
        case "halt_code":
          r.label = "ERC";
          break;
        case "autonomy_state":
          r.label = "TRIGGER";
          break;
      }
      return { [r.label]: r.value };
    })
    .reduce((acc, i) => {
      return { ...acc, ...i };
    });

  return convertedValues;
};

export const parseVadcDiagnostics = (vadcDiagnosticsPoints) => {
  const latestVadcDatapoint = vadcDiagnosticsPoints.pop();
  const vadcValues = latestVadcDatapoint[1];
  const convertedValues = vadcValues
    .filter((f) => {
      return (
        ["supplemental_error_code", "halt_code", "autonomy_state"].indexOf(
          f.label
        ) > -1
      );
    })
    .map((r) => {
      switch (r.label) {
        case "supplemental_error_code":
          r.label = "SUP";
          break;
        case "halt_code":
          r.label = "ERC";
          break;
        case "autonomy_state":
          r.label = "TRIGGER";
          break;
      }
      return { [r.label]: r.value };
    })
    .reduce((acc, i) => {
      return { ...acc, ...i };
    });

  return convertedValues;
};

export const getFormantDeviceData = async (device_id) => {
  let device = {};

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const response = await fetch(
      `${process.env.FORMANT_API_URL}/v1/admin/devices/${device_id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
        },
      }
    );

    device = await response.json();
  } catch (e) {
    console.log("FAILED TO GET VEHICLE INFO FROM FORMANT", e.message);
    console.log("FAILED TO GET VEHICLE INFO FROM FORMANT", e.stack);
  } finally {
    return device;
  }
};

export const getVehicleFormantData = async (
  device_id,
  start = moment().subtract(1, "day").utc().format(),
  end = moment().utc().format()
) => {
  let formantData = {
    device: { name: "" },
    bundle: 0,
    vadcDiagnostics: {},
  };

  try {
    const isTokenValid = await refreshToken();
    var rxp = new RegExp(/(Running:\s)([0-9]+)(,)/gi);

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const response = await fetch(
      `${process.env.FORMANT_API_URL}/v1/queries/queries`,
      {
        method: "POST",
        body: JSON.stringify({
          deviceIds: [device_id],
          names: ["update_status"],
          start: start,
          end: end,
        }),
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
        },
      }
    );

    const payload = await response.json();

    if (payload.items[0])
      formantData.bundle = parseBundleData(payload.items[0].points);

    if (payload.items[1])
      formantData.vadcDiagnostics = parseVadcDiagnostics(
        payload.items[1].points
      );

    formantData.device = await getFormantDeviceData(device_id);
  } catch (e) {
    console.log("FAILED TO GET VEHICLE BUNDLE FROM FORMANT", e.message);
    console.log("FAILED TO GET VEHICLE BUNDLE FROM FORMANT", e.stack);
  } finally {
    return formantData;
  }
};
