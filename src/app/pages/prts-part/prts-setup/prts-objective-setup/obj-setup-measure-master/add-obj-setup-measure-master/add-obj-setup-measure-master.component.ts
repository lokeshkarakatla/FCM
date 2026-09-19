import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-obj-setup-measure-master',
  templateUrl: './add-obj-setup-measure-master.component.html',
  styleUrls: ['./add-obj-setup-measure-master.component.scss']
})
export class AddObjSetupMeasureMasterComponent implements OnInit {

 
  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddObjSetupMeasureMasterComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }


}
