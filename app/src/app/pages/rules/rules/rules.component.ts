import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { Subscription } from 'rxjs'
import { GqlQueryService } from 'src/app/services/graphql/gql-query.service.service';
import { MatDialog } from '@angular/material/dialog';
import type {IPageInfo} from 'src/app/interface/page-info'
import { MatTableDataSource } from '@angular/material/table';
import {FormControl,} from '@angular/forms';
import type { IFormantRulesResponse, IFormantRule } from 'src/app/interface/rules';
import { RuleDetailsComponent } from 'src/app/components/rule-details/rule-details.component';
import { CreateRuleModalComponent } from 'src/app/components/create-rule-modal/create-rule-modal.component';
import { TicketsService } from 'src/app/services/tickets.service';
import { EditRulesComponent } from 'src/app/components/edit-rules/edit-rules/edit-rules.component';
import { DeleteRulesComponent } from 'src/app/components/delete-rules/delete-rules/delete-rules.component';
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
  dialogClosed: Subscription | undefined
  currentPageSize: any = new FormControl("10")
  filter:{streamName: FormControl} = { 
    streamName: new FormControl("")
  }

  pageInfo: IPageInfo = { 
    hasNextPage:false,
    hasPreviousPage:false,
  }

  columns: string[]= [
    "stream_name"
    , "stream_type"
    , "delete"
  ]

  // Events
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>()
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  

  constructor(
    private gqlQuery: GqlQueryService,
    public dialog: MatDialog,
    private ticketService: TicketsService

  ) { }


  private requestRules (){
    this.isLoading = true
    this.rulesQuery = this.ticketService
    .getRulesByStreamName({ 
      offset: this.currentOffset, 
      limit: parseInt(this.currentPageSize.value),
      streamName:this.filter.streamName.value
    })
    .subscribe((response: any) => {
      console.log(response)

      this.trackedRules = response.rows
      this.rulesList = new MatTableDataSource(this.trackedRules)
      this.pageInfo = response.pageInfo
      this.isLoading = false
    })
  }

  ngOnInit(): void {
    this.requestRules()
  }

  ngOnDestroy(): void {
    this.rulesQuery?.unsubscribe()
    this.dialogClosed?.unsubscribe()
  }

  viewClick(row:IFormantRule){
    const dialogRef = this.dialog.open(RuleDetailsComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration:"200ms",
      exitAnimationDuration:"200ms",
      data: row
    });
    this.dialogClosed = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules()
    });
    this.onClick.emit(row)
  }

  deleteClick(row:IFormantRule){
    const dialogRef = this.dialog.open(DeleteRulesComponent, {
      width: "50%",
      height: "225px",
      enterAnimationDuration:"200ms",
      exitAnimationDuration:"200ms",
      data: row
    });
    this.dialogClosed = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules()
    });
    this.onClick.emit(row)
  }

  editClick(row:IFormantRule){
    const dialogRef = this.dialog.open(EditRulesComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration:"200ms",
      exitAnimationDuration:"200ms",
      data: row
    });
    this.dialogClosed = dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules()
    });
    this.onClick.emit(row)
  }

  addRuleButtonHandler(evt : Event) {
    const dialogRef = this.dialog.open(CreateRuleModalComponent, {
      width: "80%",
      height: "625px",
      enterAnimationDuration:"200ms",
      exitAnimationDuration:"200ms",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.requestRules()
    });
    this.onClick.emit()
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
