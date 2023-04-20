import _ from "lodash";
import fetch from "node-fetch";
import { refreshToken as expertConnectRefreshToken } from "../../../_utils/authentication/expressConnectAuth.js";
import { generateRequestHeader } from "../../../_utils/services/expert-connect/_utils/generateRequestHeader.js";

export const updateExpertConnectTicketTags = async (data) => {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const ticketId = clonedData.expertConnectTicket.data.id;
    const isTokenValid = await expertConnectRefreshToken();
    const headers = generateRequestHeader();

    if (!isTokenValid.success)
      throw new Error("Unable to log into Expert Connect to add tag");

    const tagResponse = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tags?Paging.Page=1&Paging.Size=1&Where.Name%5Beq%5D=Vision`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const ecTagObj = await tagResponse.json();

    const ticketResponse = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tickets/${ticketId}/tags`,
      {
        method: "POST",
        body: JSON.stringify({
          tagIds: [ecTagObj.items[0].data.id],
        }),
        headers: headers,
      }
    );

    const ecTicket = await ticketResponse.json();

    clonedData.expertConnectTicket = ecTicket;
    return clonedData;
  } catch (e) {
    console.log(
      "UPDATE EXPERT CONNECT TICKET WITH TAG VIA API ERROR",
      e.message
    );
    console.log("UPDATE EXPERT CONNECT TICKET WITH TAG VIA API ERROR", e.stack);
    return null;
  }
};
