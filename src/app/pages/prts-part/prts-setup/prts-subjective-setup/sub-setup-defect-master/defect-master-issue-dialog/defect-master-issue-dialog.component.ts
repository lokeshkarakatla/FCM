import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-defect-master-issue-dialog',
  templateUrl: './defect-master-issue-dialog.component.html',
  styleUrls: ['./defect-master-issue-dialog.component.scss']
})
export class DefectMasterIssueDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DefectMasterIssueDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  values1 = [
    { issue: "Fuel filler hinge area - Thin Paint & Paint Run down", status: true },
    { issue: "LHR Door outer scratch", status: true },
    { issue: "Roof rail - Sink marks / Waviness", status: true },
    //{ location: "Banglore", status: true },


  ]
  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  close() {
    this.dialogRef.close();
  }

}
