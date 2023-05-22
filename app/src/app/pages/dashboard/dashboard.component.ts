import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GqlQueryService } from '../../services/graphql/gql-query.service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private trackedVehicles: any = []
  
  ticketsList = new MatTableDataSource([]);
  ticketsQuery: Subscription | undefined

  constructor(
    private gqlQuery: GqlQueryService
  ) { }

  ngOnInit(): void {
      // Query Vehicles Currently Online
    this.ticketsQuery = this.gqlQuery
      .getJoinedTickets()
      .subscribe((response: any) => {
        this.trackedVehicles = response
        this.ticketsList = new MatTableDataSource(this.trackedVehicles)
      })
  }

  ngOnDestroy(): void {
    this.ticketsQuery?.unsubscribe()
  }

}
