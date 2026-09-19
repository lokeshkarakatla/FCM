import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-audit-done-popup',
  templateUrl: './audit-done-popup.component.html',
  styleUrls: ['./audit-done-popup.component.scss']
})
export class AuditDonePopupComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AuditDonePopupComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}





