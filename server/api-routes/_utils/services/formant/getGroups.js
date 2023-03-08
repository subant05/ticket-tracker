import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";
import { refreshToken } from "../../../_utils/authentication/formantAuth.js";

dotenv.config();

export const getGroups = async () => {
  let group = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const response = await fetch(
      `${process.env.FORMANT_API_URL}/v1/admin/groups`,
      {
        method: "Get",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
        },
      }
    );

    group = await response.json();
  } catch (e) {
    console.log("FAILED TO GET GROUPS FROM FORMANT", e.message);
    console.log("FAILED TO GET GROUPS FROM FORMANT", e.stack);
  } finally {
    return group;
  }
};
