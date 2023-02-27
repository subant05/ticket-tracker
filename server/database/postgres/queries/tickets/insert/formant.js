const { client, pool } = require("../../../connection.js");
import { getVehicleFormantData } from "../../../../../api-routes/_utils/services/formant/getVehicleFormantData.js";
import moment from "moment";

export const sqlInsertFormantTicket = async (data) => {
  let ticket = { rows: [] };

  try {
    const {
      eventType,
      id,
      message,
      severity,
      streamName,
      streamType,
      tags,
      value,
      time,
      sourceUrl,
      deviceId,
      bundle,
      vadcDiagnostics,
      device,
    } = data;

    ticket = await client.query(
      `
          INSERT INTO tickets.formant
          (
            type,
            formant_id,
            message,
            severity,
            stream_name,
            stream_type,
            tags,
            value,
            time,
            url,
            device_id,
            bundle,
            vadc_diagnostics,
            device_name,
            vehicle_id
          )
          VALUES (
              $1,
             $2,
             $3,
             $4,
             $5,
             $6,
             $7,
             $8,
             $9,
             $10,
             $11,
             $12,
             $13,
             $14,
             (select id from vehicles.vehicle where device_id = $15)
            )
          
          RETURNING *
      `,
      [
        eventType,
        id,
        message,
        severity,
        streamName,
        streamType,
        JSON.stringify(tags),
        value,
        time,
        sourceUrl,
        deviceId,
        bundle,
        JSON.stringify(vadcDiagnostics),
        device.name,
        deviceId,
      ]
    );
  } catch (e) {
    console.log("FORMANT TICKET INSERT ERROR", e.message);
    console.log("FORMANT TICKET INSERT STACK", e.stack);
  } finally {
    return ticket;
  }
};
