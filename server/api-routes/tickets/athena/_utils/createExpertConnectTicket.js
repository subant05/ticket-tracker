import _ from "lodash";
import fetch from "node-fetch";
import { Query } from "../../../../database/postgres/index.js";
import { refreshToken as expertConnectRefreshToken } from "../../../_utils/authentication/expressConnectAuth.js";
import { generateRequestHeader } from "../../../_utils/services/expert-connect/_utils/generateRequestHeader.js";
import { generateRequestBody } from "../../../_utils/services/expert-connect/_utils/generateRequestBody.js";

export async function createExpertConnectTicket(data) {
  if (!data || data === null) return null;

  try {
    const clonedData = _.cloneDeep(data);
    const expertConnectEndPoint =
      clonedData.apiEndpoints &&
      clonedData.apiEndpoints.EXPERT_CONNECT_REQUEST_URL
        ? clonedData.apiEndpoints.EXPERT_CONNECT_REQUEST_URL
        : process.env.EXPERT_CONNECT_REQUEST_URL;
    const team =
      await Query.Personnel.Query.ExpertConnect.sqlQueryExpertConnectTeamByDeviceName(
        clonedData.name || clonedData.device.name
      );
    const isTokenValid = await expertConnectRefreshToken();
    const headers = generateRequestHeader();
    const body = generateRequestBody({ ...clonedData, team });

    if (!body || !isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const response = await fetch(
      `${expertConnectEndPoint}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tickets`,
      {
        method: "POST",
        body: body,
        headers: headers,
      }
    );

    clonedData.expertConnectTicket = await response.json();
    clonedData.expertConnectUrl = clonedData.expertConnectTicket.data.url;

    return clonedData;
  } catch (e) {
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.message);
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.stack);
    console.log("RESPONSE: ", clonedData.expertConnectTicket);

    return null;
  }
}
