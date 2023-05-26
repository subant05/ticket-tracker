import type {IPageInfo} from 'src/app/interface/page-info'

interface IFormantRulesConditions {
  value:string,
  ruleId:string,
  operator:string,
  nodeId:string,
  condition:string,
  id:string
}

interface IFormantRulesConditionsByRuleId {
  nodes:IFormantRulesConditions
}

interface IFormantAssocStreamCondition {
  condition:string,
  assocId:string,
  id:string,
  nodeId:string,
  operator:string,
  value:string
}

interface IFormantAssocStreamConditionsByAssocId {
  nodes:IFormantAssocStreamCondition[]
}

interface IFormantAssociatedStreamFormatting{
  value:string,
  key:string,
  associatedStream: {
    id:string,
  }
}

interface IFormantAssociatedStreamFormattingsByAssociatedStreamId{
  nodes:IFormantAssociatedStreamFormatting[]
}

interface IFormantAssociatedStream {
  streamName:string,
  ruleId:string,
  nodeId:string,
  id:string,
  formantAssocStreamConditionsByAssocId:IFormantAssocStreamConditionsByAssocId
  formantAssociatedStreamFormattingsByAssociatedStreamId:IFormantAssociatedStreamFormattingsByAssociatedStreamId
}

interface IFormantAssociatedStreamsByRuleId{
  nodes:IFormantAssociatedStream[]
}

interface IFormantRule {
  streamName:string,
  streamType:string,
  fornantRulesConditionsByRuleId:IFormantRulesConditionsByRuleId,
  formantAssociatedStreamsByRuleId:IFormantAssociatedStreamsByRuleId
}

interface IFormantRules {
  nodes:IFormantRule[]
  pageInfo:IPageInfo

}

interface IFormantRulesResponse {
  data:{
    formantRules:IFormantRules
  }
} 

export type {
  IFormantRulesConditions,
  IFormantRulesConditionsByRuleId,
  IFormantAssocStreamCondition,
  IFormantAssocStreamConditionsByAssocId,
  IFormantAssociatedStreamFormatting,
  IFormantAssociatedStreamFormattingsByAssociatedStreamId,
  IFormantAssociatedStream,
  IFormantAssociatedStreamsByRuleId,
  IFormantRule,
  IFormantRules,
  IFormantRulesResponse
}