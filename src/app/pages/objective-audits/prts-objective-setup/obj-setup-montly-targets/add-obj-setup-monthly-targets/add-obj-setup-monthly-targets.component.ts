import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-obj-setup-monthly-targets',
  templateUrl: './add-obj-setup-monthly-targets.component.html',
  styleUrls: ['./add-obj-setup-monthly-targets.component.scss']
})
export class AddObjSetupMonthlyTargetsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddObjSetupMonthlyTargetsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
