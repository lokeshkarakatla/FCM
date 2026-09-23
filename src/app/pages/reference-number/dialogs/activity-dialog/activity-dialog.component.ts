import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-dialog',
  templateUrl: './activity-dialog.component.html',
  styleUrls: ['./activity-dialog.component.scss']
})
export class ActivityDialogComponent implements OnInit {

  activity: string = '';
  department: string = 'Manufacturing';
  responsible: string = '';
  targetDate: string = '';
  completionDate: string = '';
  status: string = 'In Progress';
  done: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.activity = this.data.activity || this.data.milestone || '';
      this.department = this.data.department || 'Manufacturing';
      this.responsible = this.data.responsible || '';
      this.targetDate = this.data.targetDate || '';
      this.completionDate = this.data.completionDate || '';
      this.status = this.data.status || 'In Progress';
      this.done = this.data.done || false;
    }
  }

  save(): void {
    if (!this.activity) return;
    this.dialogRef.close({
      activity: this.activity,
      department: this.department,
      responsible: this.responsible,
      targetDate: this.targetDate,
      completionDate: this.completionDate,
      status: this.status,
      done: this.done
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
