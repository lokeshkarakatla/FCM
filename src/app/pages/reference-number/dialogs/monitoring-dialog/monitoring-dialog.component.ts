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
  monitoredBy: string = 'QA Auditor';
  department: string = 'Quality Assurance';
  departments: string[] = [
    'Quality Assurance',
    'Field Quality Engineering',
    'Plant Manufacturing',
    'R&D / Design Engineering',
    'Service & Aftersales'
  ];
  status: string = 'Pass';

  constructor(
    public dialogRef: MatDialogRef<MonitoringDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.date = this.data.date || '';
      this.summary = this.data.summary || this.data.metric || '';
      this.documentName = this.data.documentName || '';
      this.department = this.data.department || 'Quality Assurance';
      this.monitoredBy = this.data.monitoredBy || 'QA Auditor';
      this.status = this.data.status || 'Pass';
    }
  }

  isDragging: boolean = false;

  onFileDropped(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      this.documentName = file.name;
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.documentName = file.name;
    }
  }

  removeDocument(): void {
    this.documentName = '';
  }

  save(): void {
    if (!this.summary) return;
    this.dialogRef.close({
      date: this.date,
      summary: this.summary,
      documentName: this.documentName,
      department: this.department,
      monitoredBy: this.monitoredBy,
      status: this.status
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
