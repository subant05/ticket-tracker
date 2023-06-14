import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import type { IFormantRule } from 'src/app/interface/rules';

@Component({
  selector: 'app-rule-details',
  templateUrl: './rule-details.component.html',
  styleUrls: ['./rule-details.component.scss']
})
export class RuleDetailsComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any){
    console.log(data)
  }
}
