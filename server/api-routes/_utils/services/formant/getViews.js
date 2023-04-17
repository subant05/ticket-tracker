import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";
import { refreshToken } from "../../authentication/formantAuth.js";

dotenv.config();

export async function getViews() {
  let views = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const response = await fetch(
      `${process.env.FORMANT_API_URL}/v1/admin/views`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
        },
      }
    );

    const payload = await response.json();
    views = payload.items;
  } catch (e) {
    console.log("FAILED TO GET FORMANT VIEWS", e.message);
    console.log("FAILED TO GET FORMANT VIEWS", e.stack);
  } finally {
    return views;
  }
}
