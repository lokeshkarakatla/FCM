import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-plant-audit',
  templateUrl: './add-plant-audit.component.html',
  styleUrls: ['./add-plant-audit.component.scss']
})
export class AddPlantAuditComponent implements OnInit {

userForm: any;
   showDialog = false;
 
   constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<AddPlantAuditComponent>
   ) {}
 
   ngOnInit() {}
 
   close() {
     this.dialogRef.close();
   }
 

}
