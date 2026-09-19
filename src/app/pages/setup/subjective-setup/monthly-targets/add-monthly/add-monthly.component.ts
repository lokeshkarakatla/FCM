import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-monthly',
  templateUrl: './add-monthly.component.html',
  styleUrls: ['./add-monthly.component.scss']
})
export class AddMonthlyComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddMonthlyComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }


}
