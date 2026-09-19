import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-stage-audit',
  templateUrl: './add-stage-audit.component.html',
  styleUrls: ['./add-stage-audit.component.scss']
})
export class AddStageAuditComponent implements OnInit {

 userForm: any;
    showDialog = false;
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddStageAuditComponent>
    ) { }
  
    ngOnInit() { }
  
    close() {
      this.dialogRef.close();
    }

}
