import { Component, OnInit } from '@angular/core';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AddupdsComponent } from 'src/app/addupds/addupds.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent  {
  constructor(public dialog: MatDialog,) { }
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  filterToggle: boolean = false;
  maskInactive: boolean = false;


 stepData = [
    { step: 'Intake', status: true, startDate: '2025-06-01', finishDate: '2025-06-05', days: 4, responsibility: 'Karthik Varanasi',done:false, dueDate: '2025-06-02',eta: '2025-06-04' },
    { step: 'Field Info Awaited', status: 'Inactive', startDate: '2025-05-20', finishDate: '2025-05-25', days: 5, responsibility: 'Karthik Varanasi',done:false, dueDate: '2025-05-05',eta: '2025-05-24' },
    { step: 'Failed Part Awaited', status: false, startDate: '2025-06-10', finishDate: '2025-06-15', days: 5, responsibility: 'Karthik Varanasi',done:true, dueDate: '2025-06-10', eta: '2025-06-09' },
    { step: 'Containment', status: 'Inactive', startDate: '2025-06-03', finishDate: '2025-06-08', days: 5, responsibility: 'Karthik Varanasi',done:false, dueDate: '2026-06-03',eta: '2025-06-07' },
    { step: 'Investigation', status: false, startDate: '2025-06-12', finishDate: '2025-06-18', days: 6, responsibility: 'Karthik Varanasi',done:false, dueDate: '2027-06-12',eta: '2025-06-17' },
    { step: 'Design Review', status: false, startDate: '2025-06-01', finishDate: '2025-06-06', days: 5, responsibility: 'Karthik Varanasi',done:false, dueDate: '2029-08-01',eta: '2025-08-01' },
    { step: 'Supplier Action', status: false, startDate: '2025-05-28', finishDate: '2025-06-02', days: 5, responsibility: 'Karthik Varanasi',done:true, dueDate: '2025-02-28',eta: '2025-02-27' },
    { step: 'CAPA', status: 'Inactive', startDate: '2025-06-04', finishDate: '2025-06-09', days: 5, responsibility: 'Karthik Varanasi',done:true, dueDate: '2025-06-09',eta: '2025-06-08' },
    { step: 'Implemantation', status: 'Active', startDate: '2025-05-30', finishDate: '2025-06-04', days: 5, responsibility: 'Karthik Varanasi',done:false, dueDate: '2025-06-04' ,eta: '2025-06-03'},
    { step: 'Verification', status: 'Inactive', startDate: '2025-06-06', finishDate: '2025-06-10', days: 4, responsibility: 'Karthik Varanasi',done:true, dueDate: '2025-06-10',eta: '2025-06-09' },
    { step: 'Monitoring', status: 'Active', startDate: '2025-06-11', finishDate: '2025-06-14', days: 3, responsibility: 'Karthik Varanasi',done:true, dueDate: '2025-06-14',eta: '2025-06-13' },
    { step: 'Prevention', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:true, dueDate: '2025-06-01',eta: '2025-06-01' },
    { step: 'Recognition', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:false, dueDate: '2025-06-01',eta: '2025-06-01' },
    { step: 'Closure', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:false, dueDate: '2025-06-01',eta: '2025-06-01' },
    { step: 'Completed', status: false, startDate: '2025-06-01', finishDate: '2025-06-01', days: 0, responsibility: 'Karthik Varanasi',done:false, dueDate: '2025-06-01',eta: '2025-06-01' },
  ];
        Confirmation(item: any) {
      let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
        width: 'auto',
        data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
      });
    }
      public addupdate(item: any) {
    this.dialog.open(AddupdsComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  deleteConfirmation() {
        let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          width: 'auto',
          data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
        });
        dialogRef.afterClosed().subscribe(
          (data: any) => {
            if (data) {
            }
          }
        );
      }
}
