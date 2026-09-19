import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-steps',
  templateUrl: './add-steps.component.html',
  styleUrls: ['./add-steps.component.scss']
})
export class AddStepsComponent implements OnInit {

   userForm: any;
             showDialog = false;
           
             constructor(
               @Inject(MAT_DIALOG_DATA) public data: any,
               public dialogRef: MatDialogRef<AddStepsComponent>
             ) { }
           
             ngOnInit() { }
           
             close() {
               this.dialogRef.close();
             }
     

}
