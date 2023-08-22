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

  getRulesByStreamName(params:{offset?: number, limit?:number, streamName:string} = {offset:1, limit:10, streamName:""}){
    const {offset=1, limit=10, streamName=""}=params

    return this.http.get<any>( 
      `${environment.enpoints.get.rules.all}?offset=${offset}&limit=${limit}&stream_name=${streamName}`,
      )
  }

  getBagMonitoringTickets(params:{offset?: number, limit?:number, device_name?:string, error_message?:string, error_code?:string, vpu_position?:string} = {offset:1, limit:10, device_name:"", error_message:"", error_code:"", vpu_position:""}){
    const {
      offset=1, limit=10, device_name="", error_message="", error_code="", vpu_position=""}=params

    return this.http.get<any>( 
      `${environment.enpoints.get.tickets.bagMonitoring}?offset=${offset}&limit=${limit}&device_name=${device_name}&error_message=${error_message}&error_code=${error_code}&vpu_position=${vpu_position}`,
      )
  }
}
