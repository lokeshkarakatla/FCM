import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-subjective-audit',
  templateUrl: './add-subjective-audit.component.html',
  styleUrls: ['./add-subjective-audit.component.scss']
})
export class AddSubjectiveAuditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<AddSubjectiveAuditComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
