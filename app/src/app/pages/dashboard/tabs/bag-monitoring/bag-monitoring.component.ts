import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs'
import { MatTableDataSource } from '@angular/material/table';
import { GqlQueryService } from '../../../../services/graphql/gql-query.service.service'
import {Form, FormControl,} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { TicketDetailsComponent } from 'src/app/components/ticket-details/ticket-details.component';
import { TicketsService } from 'src/app/services/tickets.service';
import type {IPageInfo} from 'src/app/interface/page-info'
import type { TicketsViewResponse } from 'src/app/interface/tickets';

@Component({
  selector: 'app-bag-monitoring',
  templateUrl: './bag-monitoring.component.html',
  styleUrls: ['./bag-monitoring.component.scss']
})
export class BagMonitoringComponent implements OnInit, OnDestroy{
  // Private
  private trackedVehicles: any = []
    
  // Public
  isLoading:boolean = true
  currentOffset:number = 0
  ticketsList = new MatTableDataSource([]);
  ticketsQuery: Subscription | undefined
  currentPageSize: any = new FormControl("10")
  filter:{
    device_name: FormControl,
    error_message: FormControl,
    error_code: FormControl,
    vpu_position:FormControl
  } = { 
    device_name: new FormControl(""),
    error_message: new FormControl(""),
    error_code: new FormControl(""),
    vpu_position: new FormControl("")
  }
  pageInfo: IPageInfo = { 
    hasNextPage:false,
    hasPreviousPage:false,
  }

  columns: string[] = [
     'rule_id'
    ,'time'
    , 'vehicle_name'
    , 'error_message'
    , 'error_code'
    , 'vpu_position'
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
    this.ticketService.getBagMonitoringTickets ({
      offset:this.currentOffset,
      limit:parseInt(this.currentPageSize.value),
      device_name:this.filter.device_name.value,
      error_message:this.filter.error_message.value,
      error_code:this.filter.error_code.value,
      vpu_position:this.filter.vpu_position.value
    })
    .subscribe((response: any) => {
      console.log(response.tickets.pageInfo)
      this.trackedVehicles = response.tickets.rows
      console.log(response)
      this.ticketsList = new MatTableDataSource(this.trackedVehicles)
      this.pageInfo = response.tickets.pageInfo
      this.isLoading = false
    }, (error)=>{
      this.trackedVehicles = []
      this.ticketsList = new MatTableDataSource(this.trackedVehicles)
      this.pageInfo = { 
        hasNextPage:false,
        hasPreviousPage:false,
      }
      this.isLoading = false
    })

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
    // const dialogRef = this.dialog.open(TicketDetailsComponent, {
    //   width: "80%",
    //   height: "625px",
    //   enterAnimationDuration:"200ms",
    //   exitAnimationDuration:"200ms",
    //   data: row
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
    // this.onClick.emit(row.vehicle_id || row.id)
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
    this.currentOffset = 0
    this.requestTickets()
  }
}
