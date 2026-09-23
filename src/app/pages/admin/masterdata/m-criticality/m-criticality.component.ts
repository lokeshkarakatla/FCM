import { Component, OnInit } from '@angular/core';
import { AddCriticalityComponent } from './add-criticality/add-criticality.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-criticality',
  templateUrl: './m-criticality.component.html',
  styleUrls: ['./m-criticality.component.scss']
})
export class MCriticalityComponent {

  canCreate: any;

  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;


  constructor(private router: Router, private dialog: MatDialog) { }


  tableList = [
    { stageName: 'Safety Critical (Airbag, Braking, Steering - Level 1)', stageCode: 'CRT-S1', status: 'Active' },
    { stageName: 'Major Breakdown (Powertrain / Transmission - Level 2)', stageCode: 'CRT-M2', status: 'Active' },
    { stageName: 'Moderate Issue (Infotainment, HVAC, Sensors - Level 3)', stageCode: 'CRT-M3', status: 'Active' },
    { stageName: 'Minor Aesthetic (Panel Fitment, Paint Blemish - Level 4)', stageCode: 'CRT-A4', status: 'Active' }
  ];

  // Function to get status text
  getStatusText(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }


  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddCriticalityComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }

  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
  }

    Confirmation() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Change Status', content: 'Are you sure you want to Change the Status ?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['/app/complaints']);
  }

}
