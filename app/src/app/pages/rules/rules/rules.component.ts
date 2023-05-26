import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service.service';
import { MatDialog } from '@angular/material/dialog';
import type {IPageInfo} from 'src/app/interface/page-info'
import { MatTableDataSource } from '@angular/material/table';
import {FormControl,} from '@angular/forms';
import type { IFormantRulesResponse, IFormantRule } from 'src/app/interface/rules';
import { RuleDetailsComponent } from 'src/app/components/rule-details/rule-details.component';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent  implements OnInit, OnDestroy{
  // Private
  private trackedRules: any = []

  // Public
  isLoading:boolean = true
  currentOffset:number = 1
  rulesList = new MatTableDataSource([]);
  rulesQuery: Subscription | undefined
  currentPageSize: any = new FormControl("10")
  filter:{streamName: FormControl} = { 
    streamName: new FormControl("")
  }

  pageInfo: IPageInfo = { 
    hasNextPage:false,
    hasPreviousPage:false,
  }

  columns: string[]= [
    "streamName"
    , "streamType"
  ]

  // Events
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>()
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  

  constructor(
    private gqlQuery: GqlQueryService,
    public dialog: MatDialog
  ) { }


  private requestRules (){
    this.isLoading = true
    this.rulesQuery = this.gqlQuery
    .getRulesByStreamName({ 
      offset: this.currentOffset, 
      limit: parseInt(this.currentPageSize.value),
      streamName:this.filter.streamName.value
    })
    .subscribe((response: IFormantRulesResponse) => {
      console.log(response)

      this.trackedRules = response.data.formantRules.nodes
      this.rulesList = new MatTableDataSource(this.trackedRules)
      this.pageInfo = response.data.formantRules.pageInfo
      this.isLoading = false
    })
  }

  ngOnInit(): void {
    this.requestRules()
  }

  ngOnDestroy(): void {
    this.rulesQuery?.unsubscribe()
  }

  rowClick(row:IFormantRule){
    const dialogRef = this.dialog.open(RuleDetailsComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration:"200ms",
      exitAnimationDuration:"200ms",
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.onClick.emit(row)
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

    this.requestRules()
  }

  resetResubmit(e: Event){
    console.log(e)
    this.currentOffset = 1
    this.requestRules()
  }

}
