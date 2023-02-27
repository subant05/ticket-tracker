import fetch from "node-fetch";
import { refreshToken } from "../../authentication/expressConnectAuth.js";
import { generateRequestHeader } from "./_utils/generateRequestHeader.js";

async function* cycleThroughTeams() {
  let endOfTeams = false;
  let page = 1;

  while (!endOfTeams) {
    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/teams?Paging.Page=${page}&Paging.Size=100`,
      {
        method: "GET",
        headers: generateRequestHeader(),
      }
    );
    const data = await response.json();

    page++;

    if (!data.items.length) endOfTeams = true;
    else {
      yield data.items.map((item) => item.data);
    }
  }

  return;
}

export const getTeams = async () => {
  let teams = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const teamCycle = cycleThroughTeams();

    for await (const newTeams of teamCycle) {
      teams = teams.concat(newTeams);
    }
  } catch (e) {
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT TEAMS", e.message);
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT TEAMS", e.stack);
  } finally {
    return teams;
  }
};
