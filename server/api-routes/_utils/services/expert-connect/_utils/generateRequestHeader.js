import ExpertConnectCredentials from "../../../credentials/expertConnect.js";

export const generateRequestHeader = () => {
  return {
    "Content-Type": "application/json",
    "X-Subscription-Key": ExpertConnectCredentials["X-Subscription-Key"],
    Authorization: `${process.env["EXPRESS_CONNECT_TOKEN_TYPE"]} ${process.env["EXPERT_CONNECT_ACCESS_TOKEN"]}`,
  };
};
