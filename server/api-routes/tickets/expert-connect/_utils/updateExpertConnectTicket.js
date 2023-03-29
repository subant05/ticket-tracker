import _ from "lodash";
import fetch from "node-fetch";
import { refreshToken as expertConnectRefreshToken } from "../../../_utils/authentication/expressConnectAuth.js";
import { generateRequestHeader } from "../../../_utils/services/expert-connect/_utils/generateRequestHeader.js";

export const updateExpertConnectTicket = async (data) => {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const ticketId = clonedData.expertConnectTicket.data.id;

  try {
    const isTokenValid = await expertConnectRefreshToken();
    const headers = generateRequestHeader();
    const updatedExpertConnectData = clonedData.expertConnectTicket.data;
    const body = JSON.stringify(updatedExpertConnectData);

    if (!body || !isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tickets/${updatedExpertConnectData.id}`,
      {
        method: "PUT",
        body: body,
        headers: headers,
      }
    );

    const ecTicket = await response.json();
    clonedData.expertConnectTicket = ecTicket;

    return clonedData;
  } catch (e) {
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.message);
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.stack);
    return null;
  }
};
