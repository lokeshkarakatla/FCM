import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-active-grid-dialog',
  templateUrl: './active-grid-dialog.component.html',
  styleUrls: ['./active-grid-dialog.component.scss']
})
export class ActiveGridDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ActiveGridDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
