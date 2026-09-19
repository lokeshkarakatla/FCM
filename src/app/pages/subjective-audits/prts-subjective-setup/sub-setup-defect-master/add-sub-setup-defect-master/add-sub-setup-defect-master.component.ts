import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-defect-master',
  templateUrl: './add-sub-setup-defect-master.component.html',
  styleUrls: ['./add-sub-setup-defect-master.component.scss']
})
export class AddSubSetupDefectMasterComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddSubSetupDefectMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }

}
