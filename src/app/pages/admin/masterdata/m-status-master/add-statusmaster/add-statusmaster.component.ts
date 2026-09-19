import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-statusmaster',
  templateUrl: './add-statusmaster.component.html',
  styleUrls: ['./add-statusmaster.component.scss']
})
export class AddStatusmasterComponent implements OnInit {

  userForm: any;
       showDialog = false;
     
       constructor(
         @Inject(MAT_DIALOG_DATA) public data: any,
         public dialogRef: MatDialogRef<AddStatusmasterComponent>
       ) { }
     
       ngOnInit() { }
     
       close() {
         this.dialogRef.close();
       }
   
}
