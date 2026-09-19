import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-record-pop',
  templateUrl: './add-record-pop.component.html',
  styleUrls: ['./add-record-pop.component.scss']
})
export class AddRecordPopComponent implements OnInit {

constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddRecordPopComponent>
  ) {}

  ngOnInit() {
  }

  close() {
      this.dialogRef.close();
  }

}
