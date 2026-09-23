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
  monitoredBy: string = 'Quality Assurance Dept';
  frequency: string = 'Weekly';

  records = [
    { date: '2024-09-20', summary: 'Production batch 4522 sampling inspection - 0 defects found', documentName: 'Batch_4522_Audit_Report.pdf', monitoredBy: 'QA Auditor', status: 'Pass' },
    { date: '2024-09-27', summary: 'Wiring harness tension & crimp pull test validation', documentName: 'Harness_Pull_Test_Log.xlsx', monitoredBy: 'Lab Technician', status: 'Pass' },
    { date: '2024-10-04', summary: 'Field return rate tracking for month 1 post-fix', documentName: 'Field_Return_Report_W1.pdf', monitoredBy: 'Field Quality Eng', status: 'Pass' },
  ];
  remarks: string = '';

  constructor(public dialog: MatDialog) {}

  openRecordDialog(record?: any): void {
    const dialogRef = this.dialog.open(MonitoringDialogComponent, {
      width: '600px',
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

  save(): void {
    console.log('Monitoring data saved successfully');
  }
}

