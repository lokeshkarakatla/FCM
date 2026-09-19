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
    { stageName: 'Electric motor for a power boost.', stageCode: 'EM', status: 'Active' },
    { stageName: 'Iron', stageCode: 'I-115', status: 'Active' },
    { stageName: 'Assembly Line Paint Shop', stageCode: 'PNT', status: 'Active' },
    { stageName: 'Raw Materials', stageCode: 'RM', status: 'Active' },
    { stageName: 'Launching Stage', stageCode: 'LS', status: 'Active' },
    { stageName: 'Quality Check', stageCode: 'QC', status: 'Active' },
    { stageName: 'Testing Stage', stageCode: 'TS', status: 'Active' },
    { stageName: 'Manufacturing Stage', stageCode: 'MS', status: 'Active' },
    { stageName: 'Design Stage', stageCode: 'DS', status: 'Active' },
    { stageName: 'Start of Production', stageCode: 'SOP', status: 'Active' },
    { stageName: 'Production', stageCode: 'P', status: 'Active' },
    { stageName: 'Pre Production', stageCode: 'PP', status: 'Active' },
    { stageName: 'Pre Product validation', stageCode: 'PPV', status: 'Active' },
    { stageName: 'Off Tool Sample', stageCode: 'OTS', status: 'Active' },
    { stageName: 'Pre PPV', stageCode: 'Pre PPV', status: 'Active' }
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
