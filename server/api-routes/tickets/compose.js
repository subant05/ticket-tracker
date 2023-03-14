import Congruity from "congruity";
import _ from "lodash";
import fetch from "node-fetch";
import { Query } from "../../database/postgres/index.js";
import { checkCondition } from "../_utils/rules/formant/check-condition.js";
import { refreshToken as expertConnectRefreshToken } from "../_utils/authentication/expressConnectAuth.js";
import { generateRequestBody } from "../_utils/services/expert-connect/_utils/generateRequestBody.js";
import { generateRequestHeader } from "../_utils/services/expert-connect/_utils/generateRequestHeader.js";
import { generateJiraPayload } from "../_utils/services/jira/_utils/generateJiraPayload.js";
import { generateTicketDescription } from "../_utils/formating/generateTicketDescription.js";
import { getStreams } from "../_utils/services/formant/getStreams.js";

// GENERATE FORMANT REQUEST SPEFICATIONS
export function parseRequestBody(req) {
  const messageJson = JSON.parse(req.body.payload.message);
  const valueJson = JSON.parse(req.body.payload.value);
  const message = messageJson[0];
  const latestDatapoint = valueJson[valueJson.length - 1];
  return {
    eventType: req.body.eventType,
    ...req.body.payload,
    stream_name: req.body.payload.streamName,
    stream_type: req.body.payload.streamType,
    type: req.body.eventType,
    formantUrl: req.body.payload.sourceUrl,
    time: req.body.payload.time.replace("T", " "),
    message,
    messageJson,
    valueJson,
    latestDatapoint,
    valueJson,
    value: {},
  };
}

export function updateVehicleName(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const rgx = new RegExp("([a-zA-Z]+_)([0-9]+)");
  const deviceName = rgx.test(clonedData.messageJson[1])
    ? rgx.exec(clonedData.messageJson[1])[0]
    : clonedData.messageJson[1];

  clonedData.deviceName = deviceName;
  clonedData.device = { name: deviceName };
  clonedData.name = deviceName;

  return clonedData;
}

export async function getVehicleInformation(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const vehicle = await Query.Vehicles.Select.Formant.sqlSelectVehicleByName(
    clonedData
  );

  if (vehicle.rows.length) clonedData.deviceId = vehicle.rows[0].device_id;

  return clonedData;
}

/**
 *  generateFormantRequestSpecifications
 */
export const generateFormantRequestSpecifications = Congruity.fn.asyncCompose(
  getVehicleInformation,
  updateVehicleName,
  parseRequestBody
);

/**
 *
 * isActiveTicket
 */

export default async function isActiveTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const ticket =
    await Query.Tickets.Select.Formant.sqlSelectActiveTicketByStreamNameAndStreamTypeAndDeviceId(
      data
    );

  clonedData.currentActiveTicket = ticket.rows;

  return clonedData;
}

// CHECK EVENT
export async function getRules(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const rules =
    await Query.Tickets.Select.Formant.sqlSelectRulesByStreanNameAndStreamType(
      data
    );

  clonedData.rules = rules;
  clonedData.rule_id = rules.rows[0].rule_id;

  return clonedData;
}

function filterNumericSetDataByConditions(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (data.stream_type !== "numeric set") return false;

  return clonedData;
}

async function filterJsonDataByConditions(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const jsonUrlRegExp = new RegExp(`^(${process.env.FORMANT_UPLOAD_URL})`);

  if (data.stream_type !== "json") return false;

  clonedData.latestDatapoint = await getJsonData(data.latestDatapoint);

  return clonedData;
}

function checkConditions(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.validatedConditions = clonedData.latestDatapoint.filter(
    (datapoint) => {
      return clonedData.rules.rows.find((rule) =>
        checkCondition(rule, datapoint)
      );
    }
  );

  return clonedData;
}

function verifyStreamsValidity(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.isStreamsValid =
    (clonedData.rules.rows.length === 1 &&
      !clonedData.rules.rows[0].condition) ||
    (clonedData.validatedConditions.length &&
      clonedData.rules.rows.length &&
      clonedData.validatedConditions.length === clonedData.rules.rows.length);

  return clonedData;
}

/**
 *  checkRules
 */
const checkRules = Congruity.fn.asyncCompose(
  verifyStreamsValidity,
  checkConditions,
  Congruity.fn.asyncAlt(
    filterNumericSetDataByConditions,
    filterJsonDataByConditions
  ),
  getRules
);

// CHECK ASSOCIATED STREAMS
export async function geAssociatedStreams(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const associatedStreams =
    await Query.Tickets.Select.Formant.sqlSelectAssociatedStreams(data);

  if (associatedStreams.rows.length) {
    clonedData.associatedStreams = associatedStreams.rows;
  } else clonedData.associatedStreams = [];

  return clonedData;
}

export async function getAssociatedStreamData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  const associatedStreamData = await getStreams(
    clonedData.deviceId,
    clonedData.time,
    clonedData.associatedStreams.map((assoc) => assoc.stream_name)
  );

  if (Object.keys(associatedStreamData).length) {
    clonedData.associatedStreamData = associatedStreamData;
  } else clonedData.associatedStreamData = {};

  return clonedData;
}

export async function geAssociatedStreamRules(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const rules =
    await Query.Tickets.Select.Formant.sqlSelectAssociatedStreamsConditions(
      data
    );

  if (rules.rows.length) {
    clonedData.associatedStreamRules = rules.rows;
  } else clonedData.associatedStreamRules = [];

  return clonedData;
}

export async function geAssociatedStreamFormatting(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const associatedDataFormatting =
    await Query.Tickets.Select.Formant.sqlSelectRuleTicketAssocStreamFormatting(
      data
    );

  if (associatedDataFormatting.rows.length) {
    clonedData.associatedDataFormatting = associatedDataFormatting.rows;
  } else clonedData.associatedDataFormatting = [];

  return clonedData;
}

export function checkAssociatedRules(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  let isValid = [];

  Object.keys(clonedData.associatedStreamData).forEach((key) => {
    if (key !== "update_status") {
      const rulesMet = clonedData.associatedStreamData[key].filter(
        (datapoint) => {
          return clonedData.associatedStreamRules.find((rule) =>
            checkCondition(rule, datapoint)
          );
        }
      );

      isValid = isValid.concat(rulesMet);
    }
  });

  clonedData.associatedStreamsRuleMatch = isValid;
  return clonedData;
}

export function formatAssociatedData(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  Object.keys(clonedData.associatedStreamData).forEach((key) => {
    if (key === "update_status") {
      clonedData["bundle"] = clonedData.associatedStreamData[key];
    } else {
      clonedData.associatedDataFormatting.forEach((format) => {
        clonedData.associatedStreamData[key].forEach((datapoint) => {
          if (datapoint.label === format.key)
            clonedData[format.value] = datapoint.value;
          clonedData.value[datapoint.label] = datapoint.value;
        });
      });
    }
  });

  return clonedData;
}

export function verifyAssociatedStreamsValidity(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.isAssociatedStreamsValid =
    !clonedData.associatedStreams.length ||
    !clonedData.associatedStreamRules.length ||
    (clonedData.associatedStreamsRuleMatch.length &&
      clonedData.associatedStreamRules.length &&
      clonedData.associatedStreamsRuleMatch.length ===
        clonedData.associatedStreamRules.length);

  return clonedData;
}

/**
 *  checAssociatedkRules
 */
export const checAssociatedkRules = Congruity.fn.asyncCompose(
  verifyAssociatedStreamsValidity,
  formatAssociatedData,
  checkAssociatedRules,
  geAssociatedStreamFormatting,
  geAssociatedStreamRules,
  getAssociatedStreamData,
  geAssociatedStreams
);

// DETERMINE TICKET CREATION
export function shouldCreateTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (
    (!clonedData.currentActiveTicket.length || clonedData.overrideDuplicates) &&
    clonedData.isStreamsValid &&
    clonedData.isAssociatedStreamsValid
  )
    return clonedData;
  else return null;
}

export async function shouldDeactivateTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  if (clonedData.currentActiveTicket.length && !clonedData.isStreamsValid) {
    await Query.Tickets.Update.Formant.sqlDeactivateTickets(
      clonedData.currentActiveTicket
    );
    return null;
  }
}

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

export function generateVadcDiagnostic(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  clonedData.vadcDiagnostics = JSON.stringify({
    ERC: clonedData.ERC,
    SUP: clonedData.SUP,
    TRIGGER: clonedData.TRIGGER,
  });

  return clonedData;
}

// CREATE EXPERT CONNECT TICKET
export async function createExpertConnectTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const team =
      await Query.Personnel.Query.ExpertConnect.sqlQueryExpertConnectTeamByDeviceName(
        clonedData.name || clonedData.device.name
      );
    const isTokenValid = await expertConnectRefreshToken();
    const headers = generateRequestHeader();
    const body = generateRequestBody({ ...clonedData, team });

    if (!body || !isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tickets`,
      {
        method: "POST",
        body: body,
        headers: headers,
      }
    );

    clonedData.expertConnectTicket = await response.json();
    clonedData.expertConnectUrl = clonedData.expertConnectTicket.data.url;

    return clonedData;
  } catch (e) {
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.message);
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.stack);

    return null;
  }
}

// CREATE JIRA TICKET
export async function createJiraTicket(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const specifications = generateTicketDescription(clonedData);
    const payload = generateJiraPayload({
      ...clonedData,
      description: specifications,
    });

    const response = await fetch(`${process.env.JIRA_URL}/rest/api/2/issue`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
      },
    });

    const issue = await response.json();

    clonedData.jiraUrl = `${process.env.JIRA_URL}/browse/${issue.key}`;
    clonedData.jiraTicket = {
      ...issue,
      ...payload,
      specifications,
      project: "SQUASH",
      category: "Defect",
      requirement: "INTERVENTIONS",
      machine_type: "Loamy (Autonomous Tractor)",
      priority: "Medium",
      roadmap_item: "Spring 2023-Delivery",
      team: "Robotics",
      issue_type: "Bug/Story",
      bug_source: "Field Support / ExpertConnect",
    };

    return clonedData;
  } catch (e) {
    console.log("JIRA TICKET CREATION ERROR: ", e.message);
    console.log("JIRA TICKET CREATION ERROR: ", e.stack);
    return null;
  }
}

// INSERT TICKETS INTO DATABASE
export async function insertTicketsIntoDatabase(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const tickets = await Query.Tickets.Insert.All.sqlInsertTickets([
      clonedData,
    ]);

    if (!tickets.rows.length) throw new Error("Unable to insert all tickets");

    return clonedData;
  } catch (e) {
    console.log("FORMANT TICKET CREATION ERROR: ", e.message);
    console.log("FORMANT TICKET CREATION ERROR: ", e.stack);
    return null;
  }
}

// UPDATE JIRA AND EXPERT CONNECT TICKETS
export const updateExpertConnectTicket = async (data) => {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const ticketId = clonedData.expertConnectTicket.data.id;

  try {
    const isTokenValid = await expertConnectRefreshToken();
    const headers = generateRequestHeader();
    const body = generateRequestBody(clonedData);

    if (!body || !isTokenValid.success)
      throw new Error("Unable to log into Expert Connect");

    const response = await fetch(
      `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}/tickets/${ticketId}`,
      {
        method: "PUT",
        body: body,
        headers: headers,
      }
    );

    const ecTicket = await response.json();

    clonedData.expertConnectTicket = ecTicket;
    return clonedData;
  } catch (e) {
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.message);
    console.log("CREATE EXPERT CONNECT TICKET VIA API ERROR", e.stack);
    return null;
  }
};

export async function updateJiraTicket(data = null) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);
  const ticketId = clonedData.jiraTicket.key;

  try {
    const specifications = generateTicketDescription(clonedData);
    const payload = generateJiraPayload({
      ...clonedData,
      description: specifications,
    });

    const response = await fetch(
      `${process.env.JIRA_URL}/rest/api/2/issue/${ticketId}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.JIRA_TOKEN_TYPE} ${process.env.JIRA_TOKEN}`,
        },
      }
    );

    if (response.status !== 200)
      throw new Error("Unable to update jira ticket: " + ticketId);

    clonedData.jiraTicketUpdated = { ...payload, specifications };

    return clonedData;
  } catch (e) {
    console.log("JIRA TICKET UPDATE ERROR: ", e.message);
    console.log("JIRA TICKET UPDATE ERROR: ", e.stack);
    return null;
  }
}

// UPDATE TICKETS

export async function updateExpertConnectAndJiraTickets(data) {
  if (!data || data === null) return null;

  const clonedData = _.cloneDeep(data);

  try {
    const updatedEC = await updateExpertConnectTicket(
      clonedData.expertConnectTicket.data.id,
      clonedData
    );
    const updatedJira = await updateJiraTicket(
      clonedData.jiraTicket.key,
      clonedData
    );

    return clonedData;
  } catch (e) {
    console.log("JIRA & EXPERT CONNECT TICKET UPDATE ERROR: ", e.message);
    console.log("JIRA & EXPERT CONNECT TICKET UPDATE ERROR: ", e.stack);
    return null;
  }
}

/**
 *
 *
 *
 */

export const createTicketFromFormantEvent = Congruity.fn.asyncCompose(
  async (result) => result.asyncMap(updateJiraTicket),
  async (result) => result.asyncMap(updateExpertConnectTicket),
  async (result) => result.asyncMap(insertTicketsIntoDatabase),
  async (result) => result.asyncMap(createJiraTicket),
  async (result) => result.asyncMap(createExpertConnectTicket),
  async (result) => result.map(generateVadcDiagnostic),
  async (result) => result.map(generateFormantTicketTitle),
  Congruity.fn.tap((data) =>
    console.log(
      "Whats the value after shouldCreateTicket & shouldDeactivateTicket: ",
      data
    )
  ),
  async (result) =>
    result.asyncMap(
      Congruity.fn.asyncAlt(shouldCreateTicket, shouldDeactivateTicket)
    ),
  async (result) => result.asyncMap(checAssociatedkRules),
  async (result) => result.asyncMap(checkRules),
  async (result) => result.asyncMap(isActiveTicket),
  async (result) => result.asyncMap(generateFormantRequestSpecifications),
  Congruity.monad.Either.fromNullable
);
