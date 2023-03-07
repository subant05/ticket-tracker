import fetch from "node-fetch";
import dotenv from "dotenv";
import { refreshToken } from "../../../_utils/authentication/formantAuth";

dotenv.config();

export const getJsonData = async (url) => {
  let data = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");
    const response = await fetch(url);
    const obj = await response.json();

    data = Object.keys(obj).map((key) => {
      return { label: key, value: obj[key] };
    });
  } catch (e) {
    console.log("FAILED TO GET JSON DATA FROM FORMANT", e.message);
    console.log("FAILED TO GET JSON DATA FROM FORMANT", e.stack);
  } finally {
    return data;
  }
};
