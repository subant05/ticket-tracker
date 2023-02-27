import fetch from "node-fetch";
import moment from "moment";
import ExpertConnectCredentials from "../credentials/expertConnect.js";

const clientCredentials = {
  client_id: ExpertConnectCredentials.client_id,
  client_secret: ExpertConnectCredentials.client_secret,
};

function formatObjectToForm(params) {
  const paramsList = [];
  for (var key in params) {
    paramsList.push(key + "=" + encodeURI(params[key]));
  }

  return paramsList.join("&");
}

export const requestTokens = async () => {
  try {
    const params = {
      ...clientCredentials,
      grant_type: "client_credentials",
      scope: `${process.env.EXPERT_CONNECT_SCOPE_READ} ${process.env.EXPERT_CONNECT_SCOPE_WRITE}`,
    };

    const response = await fetch(process.env.EXPERT_CONNECT_AUTH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formatObjectToForm(params),
    });

    const credentials = await response.json();

    process.env["EXPERT_CONNECT_ACCESS_TOKEN"] = credentials.access_token;
    process.env["EXPERT_CONNECT_REFRESH_TOKEN"] = credentials.refresh_token;
    process.env["EXPERT_CONNECT_TOKEN_TYPE"] = credentials.token_type;
    process.env["EXPERT_CONNECT_TOKEN_SCOPE"] = credentials.scope;
    process.env["EXPERT_CONNECT_TOKEN_EXPIRATION"] = moment()
      .add(credentials.expires_in, "s")
      .utc()
      .valueOf();
    process.env["EXPERT_CONNECT_CREDENTIALS"] = JSON.stringify(credentials);

    return true;
  } catch (e) {
    console.log("EXPERT CONNECT GET ACCESS TOKENS WITH AUTH CODE: ERROR :", e);
    return false;
  }
};

export const refreshToken = async () => {
  try {
    if (
      moment().utc().valueOf() < process.env["EXPERT_CONNECT_TOKEN_EXPIRATION"]
    )
      return { success: true };

    const success = await requestTokens();

    return { success, error: null };
  } catch (e) {
    return { success: false, error: e };
  }
};
