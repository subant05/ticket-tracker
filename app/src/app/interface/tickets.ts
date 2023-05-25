import type {IPageInfo} from 'src/app/interface/page-info'

interface ITicketsViewData {
  formantId?: string | null,
  expertConnectId?: string | null,
  jiraId?: string | null,
  deviceName?: string | null,
  formantVehicleId: string,
  deviceId?: string | null,
  message?: string | null,
  severity?: string | null,
  streamName?: string | null,
  streamType?: string | null,
  formantTags?: string | null,
  value?: string | null,
  formantTime?: string | null,
  formantUrl?: string | null,
  type?: string | null,
  formantBundle?: number | null,
  expertConnectVehicleId: string,
  expertConnectTagName?: string | null,
  expertConnectTitle?: string | null,
  expertConnectDescription?: string | null,
  expertConnectProduct?: string | null,
  expertConnectHours?: string | null,
  expertConnectSerialnumber: string,
  expertConnectMisc?: string | null,
  expertConnectResolution?: string | null,
  expertConnectAdvisorId?: string | null,
  expertConnectTeamId?: string | null,
  expertConnectContactId?: string | null,
  expertConnectBundle?: number | null,
  expertConnectEcId?: string | null,
  expertConnectTeamName?: string | null,
  expertConnectAdvisorFirstName?: string | null,
  expertConnectAdvisorLastName?: string | null,
  expertConnectAdvisorEmail?: string | null,
  expertConnectAdvisorPhone?: string | null,
  expertConnectContactFirstName?: string | null,
  expertConnectContactLastName?: string | null,
  expertConnectContactEmail?: string | null,
  expertConnectContactPhone?: string | null,
  jiraTicket?: string | null,
  jiraProject?: string | null,
  jiraDescription?: string | null,
  jiraSummary?: string | null,
  jiraCategory?: string | null,
  jiraRequirement?: string | null,
  jiraBundle?: number | null,
  jiraMachineType?: string | null,
  jiraRoadmapItem?: string | null,
  jiraFormantLink?: string | null,
  jiraExpertConnectLink?: string | null,
  jiraIssueType?: string | null,
  jiraCreatedAt?: string | null,
  jiraUpdatedAt?: string | null,
  jiraPriority?: string | null,
  jiraTeamId?: string | null,
  jiraBugSource?: string | null,
}

interface ITicketViewNodes {
  nodes:ITicketsViewData[],
  pageInfo:IPageInfo
}

interface ITicketView{
  ticketsViews:ITicketViewNodes
}

interface TicketsViewResponse {
  data:ITicketView
}

export type {
  ITicketsViewData,
  ITicketViewNodes,
  ITicketView,
  TicketsViewResponse
}