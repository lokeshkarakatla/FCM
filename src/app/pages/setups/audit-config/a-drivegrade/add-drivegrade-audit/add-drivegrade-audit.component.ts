import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-drivegrade-audit',
  templateUrl: './add-drivegrade-audit.component.html',
  styleUrls: ['./add-drivegrade-audit.component.scss']
})
export class AddDrivegradeAuditComponent implements OnInit {

  userForm: any;
      showDialog = false;
    
      constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddDrivegradeAuditComponent>
      ) { }
    
      ngOnInit() { }
    
      close() {
        this.dialogRef.close();
      }
 }
