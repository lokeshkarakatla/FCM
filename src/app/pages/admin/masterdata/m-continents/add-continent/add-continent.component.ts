import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-continent',
  templateUrl: './add-continent.component.html',
  styleUrls: ['./add-continent.component.scss']
})
export class AddContinentComponent implements OnInit {

  userForm: any;
         showDialog = false;
       
         constructor(
           @Inject(MAT_DIALOG_DATA) public data: any,
           public dialogRef: MatDialogRef<AddContinentComponent>
         ) { }
       
         ngOnInit() { }
       
         close() {
           this.dialogRef.close();
         }
 

}
