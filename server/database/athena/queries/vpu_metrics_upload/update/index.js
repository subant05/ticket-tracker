import { database, sts } from "../../../connection.js";

export const addFormantLinkToVpuUpload = async (data) => {
  let results = null;

  console.log(`UPDATE vpu_metrics_upload
  SET formant_link = '${data.formantUrl}'
  WHERE timestamp = '${data.timestamp}'
  AND from_state= ${data.from_state}
  AND to_state=${data.to_state}
  AND error_code=${data.error_code}
  AND supplemental_error_code=${data.supplemental_error_code}
  AND halt_error_code=${data.halt_error_code}
  AND halt_supplemental_error_code=${data.halt_supplemental_error_code}
  AND program='${data.program}'
  AND system='${data.system}'
  AND machine_id='${data.machine_id}'
  AND vpu_software_version='${data.vpu_software_version}'
  AND latitude=${data.latitude}
  AND longitude=${data.longitude}
  AND bearing=${data.bearing}
  AND digital_field_id=${data.digital_field_id}
  `);

  try {
    results = await database.query({
      sql: `UPDATE vpu_metrics_upload
            SET formant_link = '${data.formantUrl}'
            WHERE timestamp = ${data.timestamp}
            AND from_state= ${data.from_state}
            AND to_state=${data.to_state}
            AND error_code=${data.error_code}
            AND supplemental_error_code=${data.supplemental_error_code}
            AND halt_error_code=${data.halt_error_code}
            AND halt_supplemental_error_code=${data.halt_supplemental_error_code}
            AND program='${data.program}'
            AND system='${data.system}'
            AND machine_id='${data.machine_id}'
            AND vpu_software_version='${data.vpu_software_version}'
            AND latitude=${data.latitude}
            AND longitude=${data.longitude}
            AND bearing=${data.bearing}
            AND digital_field_id=${data.digital_field_id}
            `,
    });
  } catch (e) {
    console.log("UPDATE ATHENA QUERY FAILED: ", e.message);
    console.log("UPDATE ATHENA QUERY FAILED: ", e.stacj);
  } finally {
    return results;
  }
};
