import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-objective-audit',
  templateUrl: './add-objective-audit.component.html',
  styleUrls: ['./add-objective-audit.component.scss']
})
export class AddObjectiveAuditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddObjectiveAuditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }



}
