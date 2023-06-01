import { Component, OnDestroy } from '@angular/core';
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
  selector: 'app-create-rule-modal',
  templateUrl: './create-rule-modal.component.html',
  styleUrls: ['./create-rule-modal.component.scss']
})
export class CreateRuleModalComponent implements OnDestroy {

  private creatRuleSubscription: Subscription | undefined;


  rule:ICreateRule = { 
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

  formError = false

  constructor(
    private ruleService: RulesService
    , private _snackBar: MatSnackBar
    , public dialogRef: MatDialogRef<any>,
    ){}

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
    if(!result)
      this.formError = true

    return result
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

  saveRule(){
    if(!this.isFormValid())
      return;

    debugger;
    const rule = {
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
    this.creatRuleSubscription = this.ruleService.createRule(rule)
    .subscribe((data:any)=>{
      this.resetFields()
      this._snackBar.open("Rule saved!", "Dismiss");

    })
    
  }

  ngOnDestroy(): void {
    this.creatRuleSubscription?.unsubscribe()
  }
}
