import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-color-audit',
  templateUrl: './add-color-audit.component.html',
  styleUrls: ['./add-color-audit.component.scss']
})
export class AddColorAuditComponent implements OnInit {

   userForm: any;
       showDialog = false;
     
       constructor(
         @Inject(MAT_DIALOG_DATA) public data: any,
         public dialogRef: MatDialogRef<AddColorAuditComponent>
       ) {}
     
       ngOnInit() {}
     
       close() {
         this.dialogRef.close();
       }
     
}
