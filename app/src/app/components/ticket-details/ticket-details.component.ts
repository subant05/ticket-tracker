import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import type { ITicketsViewData } from 'src/app/interface/tickets';
import type { IExpertConnectTag } from 'src/app/interface/expert-connect';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {

  expertConnectTags: any = ""
  expertConnectLink: string | undefined = ""
  formantData: any = {};

  constructor( @Inject(MAT_DIALOG_DATA) public data: any){
    this.expertConnectTags = this.data.expert_connect_tag_name
    this.expertConnectLink = this.data.jira_expert_connect_link?.replace(/([\\"]+)/gi,"")
    JSON.parse(this.data.value ? this.data?.value  : "{}").filter((point:any)=>{
      return ["halt_error_code", "halt_supplemental_error_code", "from_state", "to_state"].indexOf(point.label) > -1
    }).forEach((pointA:any)=>{
      this.formantData[pointA.label] = pointA.value
    })

    console.log(this.data)
  }

}
