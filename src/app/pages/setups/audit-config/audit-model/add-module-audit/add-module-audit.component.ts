import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-module-audit',
  templateUrl: './add-module-audit.component.html',
  styleUrls: ['./add-module-audit.component.scss']
})
export class AddModuleAuditComponent  {

  userForm: any;
   showDialog = false;
 
   constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<AddModuleAuditComponent>
   ) {}
 
   ngOnInit() {}
 
   close() {
     this.dialogRef.close();
   }
 

}
