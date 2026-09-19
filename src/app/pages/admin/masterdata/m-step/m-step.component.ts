import { Component } from '@angular/core';
import { AddStepsComponent } from './add-steps/add-steps.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-step',
  templateUrl: './m-step.component.html',
  styleUrls: ['./m-step.component.scss']
})
export class MStepComponent {

   canCreate: any;

    filterToggle: any;
    totalSize: any;
    currentPage: any;
    pageSize: any;


    constructor(private router: Router, private dialog: MatDialog) { }


    tableList = [
      { stageName: 'Under Analysis', stageCode: 'EM', status: 'Active' },
      { stageName: 'Field info Awaited	', stageCode: 'PNT', status: 'Active' },
      { stageName: 'Failed Part Awaited	', stageCode: 'PNT', status: 'Inactive' },
       { stageName: 'Under Design Review	', stageCode: 'I-115', status: 'Active' },
      { stageName: 'Under Prop Supplier Action	', stageCode: 'PNT', status: 'Inactive' },
        { stageName: 'Under Implementation	', stageCode: 'EM', status: 'Active' },
      { stageName: 'Under Validation	', stageCode: 'I-115', status: 'Active' },
      { stageName: 'Cut off awaited	', stageCode: 'PNT', status: 'Active' },
      { stageName: 'Closure Note printing pending', stageCode: 'PNT', status: 'Inactive' },
      { stageName: 'Closure Note Sign Off Pending with CFT', stageCode: 'PNT', status: 'Inactive' },
      { stageName: 'Shifted to Project	', stageCode: 'PNT', status: 'Inactive' },
         { stageName: 'Closed	', stageCode: 'PNT', status: 'Inactive' },

    ];

    // Function to get status text
    getStatusText(status: boolean): string {
      return status ? 'Active' : 'Inactive';
    }


    public addmodule(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddStepsComponent, {
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
