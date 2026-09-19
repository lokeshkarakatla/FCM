import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-criticality',
  templateUrl: './add-criticality.component.html',
  styleUrls: ['./add-criticality.component.scss']
})
export class AddCriticalityComponent implements OnInit {

   userForm: any;
            showDialog = false;
          
            constructor(
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<AddCriticalityComponent>
            ) { }
          
            ngOnInit() { }
          
            close() {
              this.dialogRef.close();
            }
    
}
