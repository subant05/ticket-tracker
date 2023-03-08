import fetch from "node-fetch";
import { refreshToken } from "../../authentication/expressConnectAuth.js";
import { generateRequestBody } from "./_utils/generateRequestBody.js";
import { generateRequestHeader } from "./_utils/generateRequestHeader.js";
import { Query } from "../../../../database/postgres/index.js";

export const createExpertConnectTicket = async (data) => {
  let ecTicket = null;
  try {
    const team =
      await Query.Personnel.Query.ExpertConnect.sqlQueryExpertConnectTeamByDeviceName(
        data.name || data.device.name
      );
    const isTokenValid = await refreshToken();
    const headers = generateRequestHeader();
    const body = generateRequestBody({ ...data, team });

    if (!body || !isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tickets`,
      {
        method: "POST",
        body: body,
        headers: headers,
      }
    );

    ecTicket = await response.json();
  } catch (e) {
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.message);
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.stack);
  } finally {
    return ecTicket;
  }
};
