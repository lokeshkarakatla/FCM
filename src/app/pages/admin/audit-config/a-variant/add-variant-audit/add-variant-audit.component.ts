import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-variant-audit',
  templateUrl: './add-variant-audit.component.html',
  styleUrls: ['./add-variant-audit.component.scss']
})
export class AddVariantAuditComponent implements OnInit {

 userForm: any;
   showDialog = false;
 
   constructor(
     @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<AddVariantAuditComponent>
   ) {}
 
   ngOnInit() {}
 
   close() {
     this.dialogRef.close();
   }
 

}
