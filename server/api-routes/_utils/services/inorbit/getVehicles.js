import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

export const getVehicles = async () => {
  let vehicles = [];

  try {
    const response = await fetch(`https://${process.env.IN_ORBIT_URI}/robots`, {
      headers: {
        "x-auth-inorbit-app-key": `${process.env.IN_ORBIT_API_KEY}`,
      },
    });

    vehicles = await response.json();
  } catch (e) {
    console.log("FAILED TO GET VEHICLES FROM INORBIT", e.message);
    console.log("FAILED TO GET VEHICLES FROM INORBIT", e.stack);
  } finally {
    return vehicles;
  }
};
