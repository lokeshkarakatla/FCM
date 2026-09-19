import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-fueltype-audit',
  templateUrl: './add-fueltype-audit.component.html',
  styleUrls: ['./add-fueltype-audit.component.scss']
})
export class AddFueltypeAuditComponent implements OnInit {

  userForm: any;
   showDialog = false;
 
   constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<AddFueltypeAuditComponent>
   ) { }
 
   ngOnInit() { }
 
   close() {
     this.dialogRef.close();
   }
}
