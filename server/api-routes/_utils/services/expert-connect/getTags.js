import fetch from "node-fetch";
import { refreshToken } from "../../authentication/expressConnectAuth.js";
import { generateRequestHeader } from "./_utils/generateRequestHeader.js";

async function* cycleThroughTags() {
  let endOfTeams = false;
  let page = 1;

  while (!endOfTeams) {
    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tags?Paging.Page=${page}&Paging.Size=100`,
      {
        method: "GET",
        headers: generateRequestHeader(),
      }
    );
    const data = await response.json();

    page++;

    if (!data.items.length) endOfTeams = true;
    else {
      const newTags = [];

      const getSubTasks = function R(arr, subTags) {
        console.log(subTags);
        subTags.forEach((tag) => {
          arr.push({ id: tag.id, name: tag.name });
          if (tag.subTags.length) {
            return R(arr, tag.subTags);
          }
        });
      };

      data.items.forEach((item) => {
        newTags.push({ id: item.data.id, name: item.data.name });
        if (item.data.subTags.length) {
          getSubTasks(newTags, item.data.subTags);
        }
      });

      yield newTags;
    }
  }

  return;
}

export const getTags = async () => {
  let tags = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const tagCycle = cycleThroughTags();

    for await (const newTags of tagCycle) {
      tags = tags.concat(newTags);
    }
  } catch (e) {
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT TEAMS", e.message);
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT TEAMS", e.stack);
  } finally {
    return tags;
  }
};
