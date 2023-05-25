interface IJiraTeam {
  name: string
}

interface IJira {
  jiraId:string,
  jiraTicket:string,
  machineType:string,
  priority:string,
  project:string,
  requirement:string,
  description:string
  expertConnectLink:string,
  formantLink:string,
  issueType:string,
  roadmapItem:string,
  summary:string,
  team:IJiraTeam
}

export type {IJiraTeam, IJira}