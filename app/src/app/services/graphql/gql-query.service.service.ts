import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { rawListeners } from 'process';
import { map } from 'rxjs/operators'
import * as QueryQL from "../../graphql"

@Injectable({
  providedIn: 'root'
})
export class GqlQueryService {

  constructor( 
    private graphService: Apollo
  ) { }

  private basicFilteredQuery (Query:any, variables:any={}) {
    return this.graphService
    .watchQuery<any>({ 
      query: Query, 
      variables
    })
    .valueChanges
  }

  getJoinedTickets(variables:{offset?: number, limit?:number} = {offset:1, limit:10}){
    return this.basicFilteredQuery(QueryQL.Query.Tickets.JoinedTickets, variables)
      .pipe(map(response=>{
        return {
                data:response.data.connections.nodes
                , pageInfo: response.data.connections.pageInfo
            }
      }))
  }

  getTicketsView(variables:{offset?: number, limit?:number, deviceName:string} = {offset:1, limit:10, deviceName:""}){
    return this.basicFilteredQuery(QueryQL.Query.Tickets.TicketsView, variables)
  }

  getRulesByStreamName(variables:{offset?: number, limit?:number, streamName:string} = {offset:1, limit:10, streamName:""}){
    return this.basicFilteredQuery(QueryQL.Query.Rules.RulesByStreamName, variables)
  }

}
