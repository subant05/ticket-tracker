import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs'
import { MatTableDataSource } from '@angular/material/table';
import { GqlQueryService } from '../../services/graphql/gql-query.service.service'
import {FormControl,} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { TicketDetailsComponent } from 'src/app/components/ticket-details/ticket-details.component';
import { TicketsService } from 'src/app/services/tickets.service';
import type {IPageInfo} from 'src/app/interface/page-info'
import type { TicketsViewResponse } from 'src/app/interface/tickets';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  // Private
  private trackedVehicles: any = []
  
  // Public
  isLoading:boolean = true
  currentOffset:number = 1
  ticketsList = new MatTableDataSource([]);
  ticketsQuery: Subscription | undefined
  currentPageSize: any = new FormControl("10")
  filter:{deviceName: FormControl} = { 
    deviceName: new FormControl("")
  }
  pageInfo: IPageInfo = { 
    hasNextPage:false,
    hasPreviousPage:false,
  }

  columns: string[] = [
    'formant_time'
    , 'device_name'
    , 'expert_connect_title'
    , 'expert_connect_bundle'
    , 'expert_connect_tag_name'
  ];

  // Events
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>()
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private gqlQuery: GqlQueryService,
    public dialog: MatDialog,
    private ticketService: TicketsService
  ) { }

  private requestTickets (){
    this.isLoading = true
    this.ticketService.getJoinedTickets({
      offset:this.currentOffset,
      limit:parseInt(this.currentPageSize.value),
      deviceName:this.filter.deviceName.value
    })
    .subscribe((response: any) => {
      this.trackedVehicles = response.tickets.rows
      console.log(response)
      this.ticketsList = new MatTableDataSource(this.trackedVehicles)
      this.pageInfo = response.tickets.pageInfo
      this.isLoading = false
    })

    // this.ticketsQuery = this.gqlQuery
    // .getTicketsView({ 
    //   offset: this.currentOffset, 
    //   limit: parseInt(this.currentPageSize.value),
    //   deviceName:this.filter.deviceName.value
    // })
    // .subscribe((response: TicketsViewResponse) => {
    //   this.trackedVehicles = response.data.ticketsViews.nodes
    //   console.log(response)
    //   this.ticketsList = new MatTableDataSource(this.trackedVehicles)
    //   this.pageInfo = response.data.ticketsViews.pageInfo
    //   this.isLoading = false
    // })
  }

  ngOnInit(): void {
      // Query Ticket
      this.requestTickets()
  }

  ngOnDestroy(): void {
    this.ticketsQuery?.unsubscribe()
  }

  applyFilter(e: Event){
    
  }

  rowClick(row:any){
    const dialogRef = this.dialog.open(TicketDetailsComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration:"200ms",
      exitAnimationDuration:"200ms",
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.onClick.emit(row.vehicle_id || row.id)
  }

  paginationHandler(arg:string){
    switch(arg){
      case "next":
        this.currentOffset  = this.currentOffset + parseInt(this.currentPageSize.value)
        break;
      case "previous":
        this.currentOffset  = this.currentOffset > 1  ? this.currentOffset - parseInt(this.currentPageSize.value) : 1
        break;
    }

    this.requestTickets()
  }

  resetResubmit(e: Event){
    console.log(e)
    this.currentOffset = 1
    this.requestTickets()
  }

}
