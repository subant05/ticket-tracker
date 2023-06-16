import { Component, Inject, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Subscription } from 'rxjs';
import { RulesService } from 'src/app/services/rules.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

interface ICreateRule {
  streamName: FormControl,
  streamType: FormControl,
  conditions:[{
    condition: FormControl,
      operator: FormControl,
      value: FormControl 
  }]
}

@Component({
  selector: 'app-edit-rules',
  templateUrl: './edit-rules.component.html',
  styleUrls: ['./edit-rules.component.scss']
})
export class EditRulesComponent implements OnDestroy {

  private editRuleSubscription: Subscription | undefined;
  public formError = false
  public rule:ICreateRule = { 
    streamName: new FormControl(""),
    streamType: new FormControl("numeric set"),
    conditions: [
      {
        condition:new FormControl(""),
        operator:new FormControl(""),
        value: new FormControl("")
      }
    ]
  }

  constructor( 
    private ruleService: RulesService
    , private _snackBar: MatSnackBar
    , public dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) public data: any
  ){
    console.log(data)
    this.rule.streamName.setValue(data.stream_name)
    this.rule.streamType.setValue(data.stream_type)
    this.rule.streamType.setValue(data.stream_type)
    this.rule.conditions = data.conditions.map((cond:any)=>{
      return {
        condition:new FormControl(cond.condition),
        operator:new FormControl(cond.operator),
        value: new FormControl(cond.value)
      }
    })

  }
  
  private isFormValid (){
    this.formError = false
    const isValid = [
      this.rule.streamName.invalid,
      this.rule.streamType.invalid
    ]

    this.rule.conditions.map((item:any)=>{
      isValid.push( item.condition.invalid)
      isValid.push( item.operator.invalid)
      isValid.push( item.value.invalid)
    })

    const result =  isValid.indexOf(true) === -1
    if(!result || !this.rule.conditions.length)
      this.formError = true

    return result && this.rule.conditions.length
  }

  addNewCondition(){
    this.rule.conditions.push({
      condition:new FormControl(""),
      operator:new FormControl(""),
      value: new FormControl("")
    })
  }
  
  resetFields(){
    this.rule = { 
      streamName: new FormControl(""),
      streamType: new FormControl("numeric set"),
      conditions: [
        {
          condition:new FormControl(""),
          operator:new FormControl(""),
          value: new FormControl("")
        }
      ]
    }
    this.dialogRef.close()
  }

  update(){
    if(!this.isFormValid())
      return;

    const rule = {
      id: this.data.id,
      streamName: this.rule.streamName.value,
      streamType: this.rule.streamType.value,
      rule_conditions: this.rule.conditions.map((item:any)=>{
        return {
          condition: item.condition.value,
          operator: item.operator.value,
          value: item.value.value,
        }
      }),
      rule_formatting:[],
      associated_streams:[]
    }
    this.editRuleSubscription = this.ruleService.updateRule(rule)
    .subscribe((data:any)=>{
      this.resetFields()
      this._snackBar.open("Rule updated!", "Dismiss");

    })
    
  }

  deleteCondition(index:number){
    this.rule.conditions.splice(index,1)
  }

  ngOnDestroy(): void {
    this.editRuleSubscription?.unsubscribe()
  }
}
