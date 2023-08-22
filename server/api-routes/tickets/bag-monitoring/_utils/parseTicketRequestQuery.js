import _ from "lodash";

export const parseTicketRequestQuery = (req) => {
  const clonedData = _.cloneDeep(req.query);
  clonedData.offset = clonedData.offset || 0;
  clonedData.limit = clonedData.limit ? clonedData.limit : 10;

  return clonedData;
};
