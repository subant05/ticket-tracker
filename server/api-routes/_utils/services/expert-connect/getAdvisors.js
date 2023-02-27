import fetch from "node-fetch";
import { refreshToken } from "../../authentication/expressConnectAuth.js";
import { generateRequestHeader } from "./_utils/generateRequestHeader.js";

async function* cycleThroughAdvisors() {
  let endOfAdvisors = false;
  let page = 1;

  while (!endOfAdvisors) {
    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/advisors?Paging.Page=${page}&Paging.Size=100`,
      {
        method: "GET",
        headers: generateRequestHeader(),
      }
    );
    const data = await response.json();

    page++;

    if (!data.items.length) endOfAdvisors = true;
    else {
      yield data.items.map((item) => item.data);
    }
  }

  return;
}

export const getAdvisors = async (data) => {
  let advisors = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const contactCycle = cycleThroughAdvisors();

    for await (const newAdvisors of contactCycle) {
      advisors = advisors.concat(newAdvisors);
    }
  } catch (e) {
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT CONTACTS", e.message);
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT CONTACTS", e.stack);
  } finally {
    return advisors;
  }
};
