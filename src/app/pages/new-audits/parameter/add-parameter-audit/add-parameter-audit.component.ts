import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-parameter-audit',
  templateUrl: './add-parameter-audit.component.html',
  styleUrls: ['./add-parameter-audit.component.scss']
})
export class AddParameterAuditComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<AddParameterAuditComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }


}
