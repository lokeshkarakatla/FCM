import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-countrys',
  templateUrl: './add-countrys.component.html',
  styleUrls: ['./add-countrys.component.scss']
})
export class AddCountrysComponent implements OnInit {

   userForm: any;
          showDialog = false;
        
          constructor(
            @Inject(MAT_DIALOG_DATA) public data: any,
            public dialogRef: MatDialogRef<AddCountrysComponent>
          ) { }
        
          ngOnInit() { }
        
          close() {
            this.dialogRef.close();
          }
  

}
