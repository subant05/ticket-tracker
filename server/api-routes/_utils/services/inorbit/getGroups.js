import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

export const getGroups = async (vehicles = []) => {
  let groups = [];

  try {
    const response = await fetch(
      `https://${process.env.IN_ORBIT_URI}/tags?collectionId=${process.env.IN_ORBIT_COLLECTION_GROUP}`,
      {
        headers: {
          "x-auth-inorbit-app-key": `${process.env.IN_ORBIT_API_KEY}`,
        },
      }
    );

    groups = await response.json();
  } catch (e) {
    console.log("FAILED TO GET GROUPS FROM INORBIT", e.message);
    console.log("FAILED TO GET GROUPS FROM INORBIT", e.stack);
  } finally {
    return groups;
  }
};
