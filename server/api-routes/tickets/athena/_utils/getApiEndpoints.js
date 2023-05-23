import _ from "lodash";

export function getApiEndpoints(data) {
  if (!data || data === null) return null;
  try {
    const clonedData = _.cloneDeep(data);

    clonedData.apiEndpoints = {
      JIRA_URL: process.env.JIRA_URL,
      JIRA_API: process.env.JIRA_API,
      FORMANT_API_URL: process.env.FORMANT_API_URL,
      FORMANT_UPLOAD_URL: process.env.FORMANT_UPLOAD_URL,
      EXPERT_CONNECT_AUTH_URL: process.env.EXPERT_CONNECT_AUTH_URL,
      EXPERT_CONNECT_REQUEST_URL: process.env.EXPERT_CONNECT_REQUEST_URL,
      EXPERT_CONNECT_APP_URL: process.env.EXPERT_CONNECT_APP_URL,
    };

    return clonedData;
  } catch (e) {
    console.log("ERROR UNABLE TO GET ENDPOINTS: ", e.message);
    console.log("ERROR UNABLE TO GET ENDPOINTS: ", e.stack);
    return null;
  }
}
