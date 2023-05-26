import { gql } from 'apollo-angular';

const rulesByStreamName = gql`
query Rules (
  $streamName: String = "" 
  $offset:Int = 1
  $limit: Int = 1
) {
  formantRules(
    offset:$offset
    first:$limit
    orderBy: STREAM_NAME_ASC
    filter:{streamName:{startsWithInsensitive:$streamName}}
  ) {
    pageInfo{
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      __typename
    }
    nodes {
      streamName
      streamType
      fornantRulesConditionsByRuleId {
        nodes {
          value
          ruleId
          operator
          nodeId
          condition
          id
        }
      }
      formantAssociatedStreamsByRuleId {
        nodes {
          streamName
          ruleId
          nodeId
          id
          formantAssocStreamConditionsByAssocId {
            nodes {
              condition
              assocId
              id
              nodeId
              operator
              value
            }
          }
          formantAssociatedStreamFormattingsByAssociatedStreamId {
            nodes {
              value
              key
              associatedStream {
                id
              }
            }
          }
        }
      }
    }
  }
}`

export {rulesByStreamName as default}
