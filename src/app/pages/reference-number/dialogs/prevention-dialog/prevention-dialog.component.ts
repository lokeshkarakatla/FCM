import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prevention-dialog',
  templateUrl: './prevention-dialog.component.html',
  styleUrls: ['./prevention-dialog.component.scss']
})
export class PreventionDialogComponent implements OnInit {

  measure: string = '';
  type: string = 'Process';
  owner: string = 'Manufacturing / Quality Team';
  targetDate: string = '';
  completionDate: string = '';
  status: string = 'In Progress';
  done: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<PreventionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.measure = this.data.measure || '';
      this.type = this.data.type || 'Process';
      this.owner = this.data.owner || 'Manufacturing / Quality Team';
      this.targetDate = this.data.targetDate || '';
      this.completionDate = this.data.completionDate || '';
      this.status = this.data.status || 'In Progress';
      this.done = this.data.done || false;
    }
  }

  save(): void {
    if (!this.measure) return;
    this.dialogRef.close({
      measure: this.measure,
      type: this.type,
      owner: this.owner,
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
