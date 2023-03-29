import _ from "lodash";

export function getExpertConnectBaseApiUrl(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (!clonedData.request) clonedData.request = {};

  clonedData.request.baseUrl = `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}`;

  return clonedData;
}
