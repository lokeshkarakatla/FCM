import { Component, OnInit } from '@angular/core';
import { AddStatusmasterComponent } from './add-statusmaster/add-statusmaster.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-status-master',
  templateUrl: './m-status-master.component.html',
  styleUrls: ['./m-status-master.component.scss']
})
export class MStatusMasterComponent  {

   canCreate: any;

     filterToggle: any;
     totalSize: any;
     currentPage: any;
     pageSize: any;


     constructor(private router: Router, private dialog: MatDialog) { }


     tableList = [
       { stageName: 'Done', stageCode: 'EM', status: 'Active' },
       { stageName: 'Pending', stageCode: 'I-115', status: 'Active' },
       { stageName: 'WIP', stageCode: 'PNT', status: 'Active' },
       { stageName: 'Closed', stageCode: 'RM', status: 'Active' },
       { stageName: 'Open', stageCode: 'LS', status: 'Active' },

     ];

     // Function to get status text
     getStatusText(status: boolean): string {
       return status ? 'Active' : 'Inactive';
     }


     public addmodule(id: any) {
       console.log('jkhksbdjk');
       let dialogRef = this.dialog.open(AddStatusmasterComponent, {
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
