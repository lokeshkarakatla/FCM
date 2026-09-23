import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-containment-action-dialog',
  templateUrl: './containment-action-dialog.component.html',
  styleUrls: ['./containment-action-dialog.component.scss']
})
export class ContainmentActionDialogComponent implements OnInit {

  action: string = '';
  department: string = 'Production';
  responsible: string = '';
  targetDate: string = '';
  status: string = 'In Progress';
  done: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ContainmentActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.action = this.data.action || '';
      this.department = this.data.department || 'Production';
      this.responsible = this.data.responsible || '';
      this.targetDate = this.data.targetDate || '';
      this.status = this.data.status || 'In Progress';
      this.done = this.data.done || false;
    }
  }

  save(): void {
    if (!this.action) return;
    this.dialogRef.close({
      action: this.action,
      department: this.department,
      responsible: this.responsible,
      targetDate: this.targetDate,
      status: this.status,
      done: this.done
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
