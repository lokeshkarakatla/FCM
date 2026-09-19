import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-monthly-targets',
  templateUrl: './add-monthly-targets.component.html',
  styleUrls: ['./add-monthly-targets.component.scss']
})
export class AddMonthlyTargetsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddMonthlyTargetsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
