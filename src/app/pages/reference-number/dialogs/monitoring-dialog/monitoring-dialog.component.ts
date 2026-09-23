import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-monitoring-dialog',
  templateUrl: './monitoring-dialog.component.html',
  styleUrls: ['./monitoring-dialog.component.scss']
})
export class MonitoringDialogComponent implements OnInit {

  date: string = '';
  summary: string = '';
  documentName: string = '';
  monitoredBy: string = 'Quality Department (Lead Auditor)';
  status: string = 'Pass';

  constructor(
    public dialogRef: MatDialogRef<MonitoringDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.date = this.data.date || '';
      this.summary = this.data.summary || this.data.metric || '';
      this.documentName = this.data.documentName || 'Validation_Run_Report.pdf';
      this.monitoredBy = this.data.monitoredBy || 'Quality Department (Lead Auditor)';
      this.status = this.data.status || 'Pass';
    }
  }

  save(): void {
    if (!this.summary) return;
    this.dialogRef.close({
      date: this.date,
      summary: this.summary,
      documentName: this.documentName,
      monitoredBy: this.monitoredBy,
      status: this.status
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
