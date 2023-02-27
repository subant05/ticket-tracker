export const generateFormantTicketTitle = (data = {}) => {
  switch (data.stream_name) {
    case "vadc_diagnostics":
      data.title = `${data.message} - ERC=${data.ERC}, SUP=${data.SUP}`;
      break;
    default:
      data.title = data.message;
      break;
  }
};
