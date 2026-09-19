import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-status-confirmation-dialog',
  templateUrl: './status-confirmation-dialog.component.html',
  styleUrls: ['./status-confirmation-dialog.component.scss']
})
export class StatusConfirmationDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<StatusConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {

  }

  close() {
    this.dialogRef.close();
  }

  saveInfo() {
    this.dialogRef.close(this.data);
  }
}
