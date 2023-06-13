import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }

  getJoinedTickets(params:{offset?: number, limit?:number, deviceName:string} = {offset:1, limit:10, deviceName:""}){
    const {offset, limit, deviceName}=params
    return this.http.get<any>( 
      `${environment.enpoints.get.tickets.all}?offset=${offset}&limit=${limit}&device_name=${deviceName}`,
      )
  }

  getTicketsView(variables:{offset?: number, limit?:number, deviceName:string} = {offset:1, limit:10, deviceName:""}){

  }

  getRulesByStreamName(variables:{offset?: number, limit?:number, streamName:string} = {offset:1, limit:10, streamName:""}){

  }
}
