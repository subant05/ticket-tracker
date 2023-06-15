import { Component, Inject, OnDestroy } from '@angular/core';
import { RulesService } from 'src/app/services/rules.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-rules',
  templateUrl: './delete-rules.component.html',
  styleUrls: ['./delete-rules.component.scss']
})
export class DeleteRulesComponent  implements OnDestroy {

  private deleteRuleSubscription: Subscription | undefined;

  constructor( 
    private ruleService: RulesService
    , private _snackBar: MatSnackBar
    , public dialogRef: MatDialogRef<any>
    , @Inject(MAT_DIALOG_DATA) public data: any
  ){

  }

  delete(){
    this.deleteRuleSubscription = this.ruleService.deleteRule(this.data.id as number).subscribe((data:any)=>{
      this._snackBar.open("Rule deleted!", "Dismiss");
      this.dialogRef.close()
    })
  }

  ngOnDestroy(): void {
    this.deleteRuleSubscription?.unsubscribe()
  }
}
