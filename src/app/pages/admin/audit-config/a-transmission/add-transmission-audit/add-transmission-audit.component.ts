import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-transmission-audit',
  templateUrl: './add-transmission-audit.component.html',
  styleUrls: ['./add-transmission-audit.component.scss']
})
export class AddTransmissionAuditComponent implements OnInit {

  userForm: any;
  showDialog = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddTransmissionAuditComponent>
  ) { }

  ngOnInit() { }

  close() {
    this.dialogRef.close();
  }
}
