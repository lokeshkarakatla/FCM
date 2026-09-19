import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-agency-audit',
  templateUrl: './add-agency-audit.component.html',
  styleUrls: ['./add-agency-audit.component.scss']
})
export class AddAgencyAuditComponent implements OnInit {

 userForm: any;
    showDialog = false;
  
    constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddAgencyAuditComponent>
    ) {}
  
    ngOnInit() {}
  
    close() {
      this.dialogRef.close();
    }
  
 
}
