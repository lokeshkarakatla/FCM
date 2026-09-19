import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-function-master',
  templateUrl: './add-sub-setup-function-master.component.html',
  styleUrls: ['./add-sub-setup-function-master.component.scss']
})
export class AddSubSetupFunctionMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSubSetupFunctionMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
