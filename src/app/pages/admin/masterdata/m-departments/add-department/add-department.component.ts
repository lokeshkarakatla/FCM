import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  userForm: any;
  showDialog = false;
  departmentHeads: string[] = ['Tejaswi', 'Hrithik', 'Roshan'];

  constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddDepartmentComponent>
      ) { }
    
      ngOnInit() { }
    
      close() {
        this.dialogRef.close();
      }
  

}
