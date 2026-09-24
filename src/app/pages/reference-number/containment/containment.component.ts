import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContainmentActionDialogComponent } from '../dialogs/containment-action-dialog/containment-action-dialog.component';

@Component({
  selector: 'app-containment',
  templateUrl: './containment.component.html',
  styleUrls: ['./containment.component.scss']
})
export class ContainmentComponent {
  actions = [
    { id: 1, action: 'Halt production line B for inspection', department: 'Production', responsible: 'Production Manager', targetDate: '2024-09-15', completionDate: '2024-09-15', status: 'Completed', done: true },
    { id: 2, action: 'Quarantine affected batch #4521', department: 'Quality Assurance', responsible: 'Quality Lead', targetDate: '2024-09-16', completionDate: '', status: 'In Progress', done: false },
    { id: 3, action: 'Issue hold notice on warehouse inventory (Lots #9021-#9040)', department: 'Warehouse / Logistics', responsible: 'Logistics Head', targetDate: '2024-09-17', completionDate: '2024-09-17', status: 'Completed', done: true },
    { id: 4, action: 'Implement 100% visual and pin-continuity check at line exit', department: 'Quality Assurance', responsible: 'QC Supervisor', targetDate: '2024-09-18', completionDate: '2024-09-18', status: 'Completed', done: true },
    { id: 5, action: 'Issue Service Advisory notice to tier-1 dealer workshops', department: 'Customer Service', responsible: 'Field Service Lead', targetDate: '2024-09-22', completionDate: '', status: 'In Progress', done: false }
  ];
  remarks: string = '';

  constructor(public dialog: MatDialog) {}

  openActionDialog(action?: any): void {
    const dialogRef = this.dialog.open(ContainmentActionDialogComponent, {
      width: '600px',
      data: action ? { ...action } : null
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        if (action) {
          // update existing
          const index = this.actions.findIndex(a => a === action || a.id === action.id);
          if (index !== -1) {
            this.actions[index] = { ...this.actions[index], ...res };
          }
        } else {
          // add new
          const newId = this.actions.length > 0 ? Math.max(...this.actions.map(a => a.id || 0)) + 1 : 1;
          this.actions.push({ id: newId, ...res });
        }
      }
    });
  }

  deleteAction(action: any): void {
    const idx = this.actions.findIndex(a => a === action || a.id === action.id);
    if (idx !== -1) {
      this.actions.splice(idx, 1);
    }
  }

  toggleDone(action: any): void {
    action.done = !action.done;
    if (action.done) {
      action.status = 'Completed';
    } else {
      action.status = 'In Progress';
    }
  }

  save(): void {
    console.log('Containment data saved successfully');
  }
}

