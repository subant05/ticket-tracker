import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

export const getVehicleGroups = async (vehicle) => {
  let groups = [];

  try {
    if (!vehicle) throw new Error("Vehicles not selected");
    const response = await fetch(
      `https://${process.env.IN_ORBIT_URI}/robots/${vehicle}/tags`,
      {
        headers: {
          "x-auth-inorbit-app-key": `${process.env.IN_ORBIT_API_KEY}`,
        },
      }
    );

    const tags = await response.json();
    groups = groups.concat(
      tags.filter((tag) => {
        return (
          tag.collectionName.toLowerCase() === "group" ||
          tag.collectionId === process.env.IN_ORBIT_COLLECTION_GROUP
        );
      })
    );
  } catch (e) {
    console.log("FAILED TO GET GROUPS FROM INORBIT", e.message);
    console.log("FAILED TO GET GROUPS FROM INORBIT", e.stack);
  } finally {
    return groups;
  }
};
