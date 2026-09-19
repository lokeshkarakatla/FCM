import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-function-master',
  templateUrl: './add-function-master.component.html',
  styleUrls: ['./add-function-master.component.scss']
})
export class AddFunctionMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFunctionMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
