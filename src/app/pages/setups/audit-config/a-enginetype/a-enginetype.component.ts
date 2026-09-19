import { Component } from '@angular/core';
import { AddEnginetypeAuditComponent } from './add-enginetype-audit/add-enginetype-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-enginetype',
  templateUrl: './a-enginetype.component.html',
  styleUrls: ['./a-enginetype.component.scss']
})
export class AEnginetypeComponent {

  canCreate: any;
  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
   Confirmation(item: any) {
       let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
         width: 'auto',
         data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
       });

     }
  constructor(private router: Router, private dialog: MatDialog) { }


  tableList = [
    { name: 'Twin-turbo 4.0L V8', code: 't', status: 'Active' },
    { name: 'Gasoline Engine', code: 'g', status: 'Active' },
    { name: 'K15C Smart Hybrid', code: 'C', status: 'Active' },
    { name: 'Hybrid Engine', code: 'H', status: 'Active' },
    { name: 'Otto Cycle Engine', code: 'O', status: 'Active' },
    { name: 'Front Engine', code: 'N', status: 'Active' },
    { name: 'Diesel Engine', code: 'L', status: 'Active' },
    { name: 'Rotary Engine', code: 'K', status: 'Active' },
    { name: 'Seam Engine', code: 'N', status: 'Active' },
    { name: 'Spark-Ignition Engine', code: 'A', status: 'Active' },
    { name: 'Petrol Engine', code: '1', status: 'Active' },
    { name: 'Rotary Engine', code: 'R', status: 'Active' },
    { name: 'Flat Engine', code: 'F', status: 'Active' },
    { name: 'Inline Engine', code: 'E', status: 'Active' },
  ];

  // Function to get status text
  getStatusText(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }


  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddEnginetypeAuditComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }



}
