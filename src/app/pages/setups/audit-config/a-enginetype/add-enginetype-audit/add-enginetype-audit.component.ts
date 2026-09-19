import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-enginetype-audit',
  templateUrl: './add-enginetype-audit.component.html',
  styleUrls: ['./add-enginetype-audit.component.scss']
})
export class AddEnginetypeAuditComponent implements OnInit {

  userForm: any;
    showDialog = false;
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddEnginetypeAuditComponent>
    ) { }
  
    ngOnInit() { }
  
    close() {
      this.dialogRef.close();
    }
}
