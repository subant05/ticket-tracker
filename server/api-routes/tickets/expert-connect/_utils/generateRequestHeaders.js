import _ from "lodash";
import ExpertConnectCredentials from "../../../_utils/credentials/expertConnect.js";

export function generateRequestHeaders(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  if (!clonedData.request) clonedData.request = {};

  clonedData.request.headers = {
    "Content-Type": "application/json",
    "X-Subscription-Key": ExpertConnectCredentials["X-Subscription-Key"],
    Authorization: `${process.env["EXPRESS_CONNECT_TOKEN_TYPE"]} ${process.env["EXPERT_CONNECT_ACCESS_TOKEN"]}`,
  };
  return clonedData;
}
