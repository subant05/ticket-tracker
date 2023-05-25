import type { IVehicle } from "./vehicle"

interface IExpertConnectTag {
  tag: {
    name: string
  }
}

interface IExpertConnectTicketTagsByTicketId {
  nodes: IExpertConnectTag[]
}

interface IExpertConnectTeam {
  name:string,
  ecId:string
  id:string
}

interface IExpertConnectAdvisor {
  email:string,
  firstName:string,
  lastName:string,
  phone:string
}

interface IExpertConnectTicket {
  expertConnectTicketTagsByTicketId:IExpertConnectTicketTagsByTicketId,
  bundle:number,
  contactId:string,
  createdAt:string,
  description:string,
  ecId:string,
  id:string,
  machineHours:any,
  misc:any,
  product:string,
  resolution:any,
  serialNumber:string,
  team:IExpertConnectTeam,
  title:string,
  vehicle:IVehicle,
  advisor:IExpertConnectAdvisor
}

export type {
  IExpertConnectTag
  , IExpertConnectTicketTagsByTicketId
  , IExpertConnectTeam
  , IExpertConnectAdvisor
  , IExpertConnectTicket
}