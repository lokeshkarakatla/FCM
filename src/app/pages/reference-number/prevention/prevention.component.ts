import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreventionDialogComponent } from '../dialogs/prevention-dialog/prevention-dialog.component';

@Component({
  selector: 'app-prevention',
  templateUrl: './prevention.component.html',
  styleUrls: ['./prevention.component.scss']
})
export class PreventionComponent {
  measures = [
    { id: 1, measure: 'Update incoming inspection checklist for brake sensors', type: 'Process Change', owner: 'Quality Assurance Dept', targetDate: '2024-10-01', completionDate: '2024-09-30', status: 'Completed', done: true },
    { id: 2, measure: 'Add torque verification step in assembly SOP', type: 'SOP Update', owner: 'Manufacturing Team', targetDate: '2024-10-05', completionDate: '', status: 'In Progress', done: false },
    { id: 3, measure: 'Supplier audit schedule revised to quarterly', type: 'System Improvement', owner: 'Procurement / SCM', targetDate: '2024-10-10', completionDate: '', status: 'Planned', done: false },
  ];
  remarks: string = '';

  constructor(public dialog: MatDialog) {}

  openMeasureDialog(measure?: any): void {
    const dialogRef = this.dialog.open(PreventionDialogComponent, {
      width: '600px',
      data: measure ? { ...measure } : null
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        if (measure) {
          const index = this.measures.findIndex(m => m === measure || m.id === measure.id);
          if (index !== -1) {
            this.measures[index] = { ...this.measures[index], ...res };
          }
        } else {
          const newId = this.measures.length > 0 ? Math.max(...this.measures.map(m => m.id || 0)) + 1 : 1;
          this.measures.push({ id: newId, ...res });
        }
      }
    });
  }

  deleteMeasure(measure: any): void {
    const idx = this.measures.findIndex(m => m === measure || m.id === measure.id);
    if (idx !== -1) {
      this.measures.splice(idx, 1);
    }
  }

  toggleDone(measure: any): void {
    measure.done = !measure.done;
    if (measure.done) {
      measure.status = 'Completed';
      if (!measure.completionDate) {
        measure.completionDate = new Date().toISOString().substring(0, 10);
      }
    } else {
      measure.status = 'In Progress';
    }
  }

  save(): void {
    console.log('Prevention data saved successfully');
  }
}

