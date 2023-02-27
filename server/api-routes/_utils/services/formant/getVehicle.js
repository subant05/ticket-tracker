import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";
import { refreshToken } from "../../../_utils/authentication/formantAuth";

dotenv.config();

export const getVehicle = async (vehicles = []) => {
  let devicesRetrieved = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const query = await Promise.all(
      vehicles.items.map(
        async (item) =>
          await fetch(`https://api.formant.io/v1/admin/devices/${item.id}`, {
            headers: {
              Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
            },
          })
      )
    );

    devicesRetrieved = await Promise.all(
      query.map(async (vehicle) => await vehicle.json())
    );
  } catch (e) {
    console.log("FAILED TO GET VEHICLE FROM FORMANT", e.message);
    console.log("FAILED TO GET VEHICLE FROM FORMANT", e.stack);
  } finally {
    return devicesRetrieved;
  }
};
