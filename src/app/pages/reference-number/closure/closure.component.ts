import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent {
  closureDate: string = '2026-09-24';
  closedBy: string = 'Quality Assurance Team';
  closureType: string = 'resolved';
  customerSatisfied: boolean = true;
  closureRemarks: string = 'Root cause resolved, corrective actions verified, zero recurrence reported.';

  closureDocs = [
    { name: 'Final Investigation Report.pdf', uploadedBy: 'Quality Team', date: '2024-10-05', size: '2.4 MB' },
    { name: 'Corrective Action Evidence.zip', uploadedBy: 'Manufacturing', date: '2024-10-06', size: '8.1 MB' },
  ];

  constructor(private snackBar: MatSnackBar) {}

  generate8DReport(): void {
    this.snackBar.open('Comprehensive 8D Report generated successfully!', 'Close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  downloadPdf(): void {
    this.snackBar.open('Downloading 8D Report (PDF)...', 'Close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  closeComplaint(): void {
    this.snackBar.open('Complaint closed successfully!', 'Close', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
