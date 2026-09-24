import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupplierActionDialogComponent } from '../dialogs/supplier-action-dialog/supplier-action-dialog.component';

@Component({
  selector: 'app-supplier-action',
  templateUrl: './supplier-action.component.html',
  styleUrls: ['./supplier-action.component.scss']
})
export class SupplierActionComponent {
  supplierName: string = 'Bosch Automotive';
  supplierContact: string = 'John Doe (+91-9876543210)';
  componentName: string = 'ECU Wiring Harness';
  componentPartNo: string = 'WH-4029-X';
  notificationDate: string = '2024-09-12';
  responseDeadline: string = '2024-09-20';

  actions = [
    { id: 1, action: 'Replace faulty batch of brake sensors', supplier: 'Bosch Automotive', component: 'ECU Wiring Harness', deadline: '2024-09-25', dateCompleted: '', status: 'Open', done: false },
    { id: 2, action: 'Provide material test certificates', supplier: 'Denso India', component: 'Brake Sensor Assembly', deadline: '2024-09-20', dateCompleted: '2024-09-19', status: 'Completed', done: true },
    { id: 3, action: 'Submit 8D root cause analysis and 5-Why Ishikawa report', supplier: 'Bosch Automotive', component: 'ECU Wiring Harness', deadline: '2024-09-28', dateCompleted: '', status: 'In Progress', done: false },
    { id: 4, action: 'Recalibrate automated terminal crimping station #3', supplier: 'Yazaki Harness Systems', component: 'Wiring Harness Section A', deadline: '2024-09-22', dateCompleted: '2024-09-21', status: 'Completed', done: true },
    { id: 5, action: 'Ship 150 pre-screened replacement units for dealer buffer stock', supplier: 'Continental AG', component: 'High Pressure Sensor', deadline: '2024-10-02', dateCompleted: '', status: 'Open', done: false }
  ];
  remarks: string = '';

  constructor(public dialog: MatDialog) {}

  openActionDialog(action?: any): void {
    const dialogRef = this.dialog.open(SupplierActionDialogComponent, {
      width: '600px',
      data: action ? { ...action } : null
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        if (action) {
          const index = this.actions.findIndex(a => a === action || a.id === action.id);
          if (index !== -1) {
            this.actions[index] = { ...this.actions[index], ...res };
          }
        } else {
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
      if (!action.dateCompleted) {
        action.dateCompleted = new Date().toISOString().substring(0, 10);
      }
    } else {
      action.status = 'In Progress';
    }
  }

  save(): void {
    console.log('Supplier action data saved successfully');
  }
}

