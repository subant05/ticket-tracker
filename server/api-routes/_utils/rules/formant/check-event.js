import { checkRules } from "./check-rules.js";
import { Query } from "../../../../database/postgres";
import { checkAssociatedStreams } from "./check-associated-streams.js";
import { generateFormantTicketTitle } from "../../formating/generateFormantTicketTitle.js";
import { generateVadcDiagnostic } from "../../formating/generateVadcDiagnostic.js";

export const checkEvent = async (data, overrideDuplicates = false) => {
  let shouldCreateTicket = false;

  try {
    const rulesMet = await checkRules(data);
    const isAssocStreamsValid = await checkAssociatedStreams(data);
    const ticket =
      await Query.Tickets.Select.Formant.sqlSelectActiveTicketByStreamNameAndStreamTypeAndDeviceId(
        data
      );

    console.log("RULES MET: ", rulesMet);

    if (
      (!ticket.rows.length || overrideDuplicates) &&
      rulesMet &&
      isAssocStreamsValid
    ) {
      const formatting =
        await Query.Tickets.Select.Formant.sqlSelectRuleTicketFormatting(data);

      formatting.rows.forEach((formant) => {
        data.latestDatapoint.forEach((datapoint) => {
          if (
            datapoint.label === formant.key &&
            typeof data[formant.value] === "undefined"
          )
            data[formant.value] = datapoint.value;
          data.value[datapoint.label] = datapoint.value;
        });
      });

      generateFormantTicketTitle(data);
      generateVadcDiagnostic(data);

      shouldCreateTicket = true;
    } else if (ticket.rows.length && !rulesMet) {
      await Query.Tickets.Update.Formant.sqlDeactivateTickets(ticket.rows);
    } else {
      console.log(
        `No tickets & rules met for stream ${data.stream_name} of type ${data.stream_type}`
      );
    }
  } catch (e) {
    console.log("FORMANT SELECT EXISTING TICKET ERROR", e.message);
    console.log("FORMANT SELECT EXISTING TICKET STACK", e.stack);
  } finally {
    console.log("SHOULD UPDATE: ", shouldCreateTicket);
    return shouldCreateTicket;
  }
};
