const { client, pool } = require("../../../../connection.js");

export const sqlSelectVehicleByName = async (data) => {
  let vehicle = { rows: [] };
  try {
    vehicle = await client.query(
      `
      SELECT * FROM vehicles.vehicle WHERE name = $1
    `,
      [data.deviceName]
    );
  } catch (e) {
    console.log("FORMANT SELECT VEHICLE BY NAME ERROR", e.message);
    console.log("FORMANT SELECT VEHICLE BY NAME ERROR", e.stack);
  } finally {
    return vehicle;
  }
};
