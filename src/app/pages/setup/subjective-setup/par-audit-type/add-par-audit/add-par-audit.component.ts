import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-par-audit',
  templateUrl: './add-par-audit.component.html',
  styleUrls: ['./add-par-audit.component.scss']
})
export class AddParAuditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddParAuditComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
