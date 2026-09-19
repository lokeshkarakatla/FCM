import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-monthly-targets',
  templateUrl: './add-sub-setup-monthly-targets.component.html',
  styleUrls: ['./add-sub-setup-monthly-targets.component.scss']
})
export class AddSubSetupMonthlyTargetsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddSubSetupMonthlyTargetsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
