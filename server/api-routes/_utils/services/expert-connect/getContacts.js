import fetch from "node-fetch";
import { refreshToken } from "../../authentication/expressConnectAuth.js";
import { generateRequestHeader } from "./_utils/generateRequestHeader.js";

async function* cycleThroughContact() {
  let endOfContacts = false;
  let page = 1;

  while (!endOfContacts) {
    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/contacts?Paging.Page=${page}&Paging.Size=100`,
      {
        method: "GET",
        headers: generateRequestHeader(),
      }
    );
    const data = await response.json();

    page++;

    if (!data.items.length) endOfContacts = true;
    else {
      yield data.items.map((item) => item.data);
    }
  }

  return;
}

export const getContacts = async (data) => {
  let contacts = [];

  try {
    const isTokenValid = await refreshToken();

    if (!isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const contactCycle = cycleThroughContact();

    for await (const newContacts of contactCycle) {
      contacts = contacts.concat(newContacts);
    }
  } catch (e) {
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT CONTACTS", e.message);
    console.log("UNABLE TO RETRIEVE EXPERT CONNECT CONTACTS", e.stack);
  } finally {
    return contacts;
  }
};
