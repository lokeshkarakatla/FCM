import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivityDialogComponent } from '../dialogs/activity-dialog/activity-dialog.component';

@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.scss']
})
export class ImplementationComponent {
  activities = [
    { id: 1, activity: 'Updated design specification document', department: 'Engineering / Design', responsible: 'Design Lead', targetDate: '2024-09-20', completionDate: '2024-09-19', status: 'Completed', done: true },
    { id: 2, activity: 'Tooling modification for revised component', department: 'Manufacturing', responsible: 'Tooling Manager', targetDate: '2024-09-25', completionDate: '', status: 'In Progress', done: false },
    { id: 3, activity: 'First sample production run', department: 'Production', responsible: 'Production Supervisor', targetDate: '2024-10-01', completionDate: '', status: 'Pending', done: false },
  ];
  remarks: string = '';

  constructor(public dialog: MatDialog) {}

  openActivityDialog(activity?: any): void {
    const dialogRef = this.dialog.open(ActivityDialogComponent, {
      width: '600px',
      data: activity ? { ...activity } : null
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        if (activity) {
          const index = this.activities.findIndex(a => a === activity || a.id === activity.id);
          if (index !== -1) {
            this.activities[index] = { ...this.activities[index], ...res };
          }
        } else {
          const newId = this.activities.length > 0 ? Math.max(...this.activities.map(a => a.id || 0)) + 1 : 1;
          this.activities.push({ id: newId, ...res });
        }
      }
    });
  }

  deleteActivity(activity: any): void {
    const idx = this.activities.findIndex(a => a === activity || a.id === activity.id);
    if (idx !== -1) {
      this.activities.splice(idx, 1);
    }
  }

  toggleDone(activity: any): void {
    activity.done = !activity.done;
    if (activity.done) {
      activity.status = 'Completed';
      if (!activity.completionDate) {
        activity.completionDate = new Date().toISOString().substring(0, 10);
      }
    } else {
      activity.status = 'In Progress';
    }
  }

  save(): void {
    console.log('Implementation data saved successfully');
  }
}

