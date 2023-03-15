import _ from "lodash";

export function generateFormantTicketTitle(data = {}) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  switch (clonedData.stream_name) {
    case "vadc_diagnostics":
      clonedData.title = `${clonedData.message} - ERC=${clonedData.ERC}, SUP=${clonedData.SUP}`;
      break;
    default:
      clonedData.title = clonedData.message;
      break;
  }

  return clonedData;
}
