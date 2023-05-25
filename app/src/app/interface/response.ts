import type { IExpertConnectTicket } from "./expert-connect"
import type { IFormant } from "./formant"
import type { IJira } from "./jira"
import type { IPageInfo } from "./page-info"

interface ITicketResponseData {
  id:string,
  expertConnect:IExpertConnectTicket,
  formant:IFormant,
  jira:IJira
}

interface ITicketResponse {
  data:ITicketResponseData[],
  pageInfo: IPageInfo,
  tags?:string
}

export type {ITicketResponseData, ITicketResponse}