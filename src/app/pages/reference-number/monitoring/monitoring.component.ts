import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MonitoringDialogComponent } from '../dialogs/monitoring-dialog/monitoring-dialog.component';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent {
  monitoringPeriod: string = '1month';
  startDate: string = '2024-09-15';
  endDate: string = '2024-10-15';
  department: string = 'Quality Assurance';
  monitoredBy: string = 'QA Lead Auditor';
  frequency: string = 'Weekly';

  departments: string[] = [
    'Quality Assurance',
    'Field Quality Engineering',
    'Plant Manufacturing',
    'R&D / Design Engineering',
    'Service & Aftersales'
  ];

  roles: string[] = [
    'QA Lead Auditor',
    'Field Quality Specialist',
    'Lead Reliability Analyst',
    'Plant Quality Manager',
    'Senior Technical Inspector'
  ];

  records = [
    { date: '2024-09-20', summary: 'Production batch 4522 sampling inspection - 0 defects found', documentName: 'Batch_4522_Audit_Report.pdf', department: 'Quality Assurance', monitoredBy: 'QA Auditor', status: 'Pass' },
    { date: '2024-09-27', summary: 'Wiring harness tension & crimp pull test validation', documentName: 'Harness_Pull_Test_Log.xlsx', department: 'Quality Assurance', monitoredBy: 'Lab Technician', status: 'Pass' },
    { date: '2024-10-04', summary: 'Field return rate tracking for month 1 post-fix', documentName: 'Field_Return_Report_W1.pdf', department: 'Field Quality Engineering', monitoredBy: 'Field Quality Eng', status: 'Pass' },
  ];
  remarks: string = '';

  getPassedCount(): number {
    return this.records.filter(r => r.status === 'Pass').length;
  }

  getFailedCount(): number {
    return this.records.filter(r => r.status === 'Fail').length;
  }

  constructor(public dialog: MatDialog) {}

  openRecordDialog(record?: any): void {
    const dialogRef = this.dialog.open(MonitoringDialogComponent, {
      height: 'auto',
      width: '850px',
      maxWidth: '95vw',
      data: record ? { ...record } : null
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        if (record) {
          const index = this.records.findIndex(r => r === record);
          if (index !== -1) {
            this.records[index] = { ...this.records[index], ...res };
          }
        } else {
          this.records.push(res);
        }
      }
    });
  }

  deleteRecord(record: any): void {
    const idx = this.records.findIndex(r => r === record);
    if (idx !== -1) {
      this.records.splice(idx, 1);
    }
  }

  viewDocument(record: any): void {
    const docName = record?.documentName || 'Document.pdf';
    alert('Viewing document: ' + docName);
  }

  save(): void {
    console.log('Monitoring data saved successfully');
  }
}

