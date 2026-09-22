import { Component } from '@angular/core';
import { AddStageAuditComponent } from './add-stage-audit/add-stage-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-stages',
  templateUrl: './a-stages.component.html',
  styleUrls: ['./a-stages.component.scss']
})
export class AStagesComponent {

  canCreate: any;

  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;

   Confirmation(item: any) {
       let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
         width: 'auto',
         data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
       });

     }
  constructor(private router: Router, private dialog: MatDialog) { }


  tableList = [
    { stageName: 'Body-in-White & Robotic Welding (BIW)', stageCode: 'STG-BIW', status: 'Active' },
    { stageName: 'Cathodic Electrodeposition & Paint (CED)', stageCode: 'STG-PNT', status: 'Active' },
    { stageName: 'Powertrain Docking & Marriage (Engine/Tranny)', stageCode: 'STG-DOC', status: 'Active' },
    { stageName: 'Trim, Chassis & Final Assembly (TCF)', stageCode: 'STG-TCF', status: 'Active' },
    { stageName: 'Wheel Alignment & ADAS Calibration', stageCode: 'STG-CAL', status: 'Active' },
    { stageName: 'Chassis Dyno & Roller Brake Test (EOL)', stageCode: 'STG-RLR', status: 'Active' },
    { stageName: 'Monsoon Shower & Water Ingress Test', stageCode: 'STG-SHW', status: 'Active' },
    { stageName: 'Pre-Delivery Inspection & Road Track (PDI)', stageCode: 'STG-PDI', status: 'Active' },
    { stageName: 'Customer Handover Quality Audit (PDI-2)', stageCode: 'STG-HND', status: 'Active' }
  ];
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
  // Function to get status text
  // getStatusText(status: boolean): string {
  //   return status ? 'Active' : 'Inactive';
  // }


  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddStageAuditComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }



}
