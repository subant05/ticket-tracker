import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";
import { refreshToken } from "../../../_utils/authentication/formantAuth";

dotenv.config();

export const getVehicles = async () => {
  let vehicles = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const response = await fetch(
      "https://api.formant.io/v1/admin/device-details/query",
      {
        method: "Post",
        headers: {
          Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
        },
      }
    );

    vehicles = await response.json();
  } catch (e) {
    console.log("FAILED TO GET VEHICLES FROM FORMANT", e.message);
    console.log("FAILED TO GET VEHICLES FROM FORMANT", e.stack);
  } finally {
    return vehicles;
  }
};
