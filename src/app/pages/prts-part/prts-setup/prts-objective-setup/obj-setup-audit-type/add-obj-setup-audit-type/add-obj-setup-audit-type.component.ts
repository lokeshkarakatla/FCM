import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-obj-setup-audit-type',
  templateUrl: './add-obj-setup-audit-type.component.html',
  styleUrls: ['./add-obj-setup-audit-type.component.scss']
})
export class AddObjSetupAuditTypeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddObjSetupAuditTypeComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
