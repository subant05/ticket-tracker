import { getStreams } from "../../services/formant/getStreams.js";
import { Query } from "../../../../database/postgres/index.js";
import { checkCondition } from "./check-condition.js";

export const checkAssociatedStreams = async (data) => {
  let isValid = [];
  let rules = { rows: [] };
  let assocData = {};
  let associatedStreams = { rows: [] };

  try {
    associatedStreams =
      await Query.Tickets.Select.Formant.sqlSelectAssociatedStreams(data);

    assocData = await getStreams(
      data.deviceId,
      data.time,
      associatedStreams.rows.map((assoc) => assoc.stream_name)
    );
    rules =
      await Query.Tickets.Select.Formant.sqlSelectAssociatedStreamsConditions(
        data
      );

    Object.keys(assocData).forEach((key) => {
      if (key !== "update_status") {
        const rulesMet = assocData[key].filter((datapoint) => {
          return rules.rows.find((rule) => checkCondition(rule, datapoint));
        });

        isValid = isValid.concat(rulesMet);
      }
    });

    const assocDataFormatting =
      await Query.Tickets.Select.Formant.sqlSelectRuleTicketAssocStreamFormatting(
        data
      );
    console.log("assocDataFormatting: ", assocDataFormatting.rows);

    Object.keys(assocData).forEach((key) => {
      if (key === "update_status") {
        data["bundle"] = assocData[key];
      } else {
        assocDataFormatting.rows.forEach((format) => {
          assocData[key].forEach((datapoint) => {
            if (datapoint.label === format.key)
              data[format.value] = datapoint.value;
            data.value[datapoint.label] = datapoint.value;
          });
        });
      }
    });
  } catch (e) {
    console.log("ASSOCIATED STREAM RULES NOT MET", e.message);
    console.log("ASSOCIATED STREAM RULES NOT MET", e.stack);
  } finally {
    console.log(
      "ASSC. RULE MET:  ",
      !associatedStreams.rows.length ||
        !rules.rows.length ||
        (isValid.length &&
          rules.rows.length &&
          isValid.length === rules.rows.length)
    );

    return (
      !associatedStreams.rows.length ||
      !rules.rows.length ||
      (isValid.length &&
        rules.rows.length &&
        isValid.length === rules.rows.length)
    );
  }
};
