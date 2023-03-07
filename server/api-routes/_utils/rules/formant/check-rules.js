import { Query } from "../../../../database/postgres";
import { checkCondition } from "./check-condition.js";
import { getJsonData } from "../../services/formant/getJsonData";

const filterDataByConditions = (latestDatapoint = [], rules = { rows: [] }) => {
  return latestDatapoint.filter((datapoint) => {
    return rules.rows.find((rule) => checkCondition(rule, datapoint));
  });
};

const verifyDataPointWithRules = async (data = "", rules = { rows: [] }) => {
  let validatedConditions = [];
  try {
    const jsonUrlRegExp = new RegExp(`^(${process.env.FORMANT_UPLOAD_URL})`);

    switch (data.stream_type) {
      case "numeric set":
        validatedConditions = filterDataByConditions(
          data.latestDatapoint,
          rules
        );
        break;
      case "json":
        if (jsonUrlRegExp.test(data.latestDatapoint)) {
          const datapoint = await getJsonData(data.latestDatapoint);
          data.latestDatapoint = datapoint;
          validatedConditions = filterDataByConditions(datapoint, rules);
        }
        break;
      default:
        break;
    }
  } catch (e) {
    console.log("FORMANT RULES ERROR", e.message);
    console.log("FORMANT RULES ERROR", e.stack);
  } finally {
    return validatedConditions;
  }
};

export const checkRules = async (data) => {
  const { latestDatapoint = [] } = data;
  let isValid = [];
  let rules = { rows: [] };

  try {
    rules =
      await Query.Tickets.Select.Formant.sqlSelectRulesByStreanNameAndStreamType(
        data
      );

    if (rules.rows.length) {
      isValid = await verifyDataPointWithRules(data, rules);
      data.rule_id = rules.rows[0].rule_id;
      console.log("isValid: ", isValid);
    }
  } catch (e) {
    console.log("FORMANT RULES ERROR", e.message);
    console.log("FORMANT RULES ERROR", e.stack);
  } finally {
    console.log(rules.rows);
    return (
      (rules.rows.length === 1 && !rules.rows[0].condition) ||
      (isValid.length &&
        rules.rows.length &&
        isValid.length === rules.rows.length)
    );
  }
};
