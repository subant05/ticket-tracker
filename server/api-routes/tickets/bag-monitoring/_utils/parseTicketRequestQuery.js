import _ from "lodash";

export const parseTicketRequestQuery = (req) => {
  const clonedData = _.cloneDeep(req.query);
  clonedData.offset = clonedData.offset ? clonedData.offset : 1;
  clonedData.limit = clonedData.limit ? clonedData.limit : 10;

  return clonedData;
};
