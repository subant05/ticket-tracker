import _ from "lodash";
import { checkCondition } from "./checkCondition.js";

export function checkConditions(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (!clonedData.tickets) clonedData.tickets = {};
  clonedData.tickets.skip = [];

  clonedData.validatedConditions = clonedData.latestDatapoint.filter(
    (datapoint) => {
      return clonedData.rules.rows.find((rule) => {
        const isValid = checkCondition(
          rule,
          datapoint,
          clonedData.tickets.skip
        );
        // console.log(datapoint);
        // console.log(rule);
        // console.log(isValid, rule.ticket_type);

        // if (
        //   !isValid &&
        //   rule.ticket_type &&
        //   rule.condition.split(".").indexOf(datapoint.label > -1) &&
        //   clonedData.tickets.skip.indexOf(
        //     rule.ticket_type.replace(/_/gi, " ").toLowerCase()
        //   ) === -1
        // ) {
        //   clonedData.tickets.skip.push(
        //     rule.ticket_type.replace(/_/gi, " ").toLowerCase()
        //   );
        //   return true;
        // }

        // console.log("#####################");
        // console.log("Is Valid: ", isValid);
        // console.log("Data Label: ", datapoint.label);
        // console.log("Condition: ", rule.condition);
        // console.log("Ticket Type: ", rule.ticket_type);
        // console.log(
        //   "Is Datapoint Label In Condition: ",
        //   rule.condition.split(".").indexOf(datapoint.label) > -1
        // );
        // console.log("#####################");

        return isValid;
      });
    }
  );

  console.log("Skip: ", clonedData.tickets.skip);
  console.log("Validated Condtions: ", clonedData.validatedConditions);
  return clonedData;
}
