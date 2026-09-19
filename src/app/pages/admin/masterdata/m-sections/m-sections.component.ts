import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddsecComponent } from 'src/app/addsec/addsec.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-sections',
  templateUrl: './m-sections.component.html',
  styleUrls: ['./m-sections.component.scss']
})
export class MSectionsComponent  {

   canCreate: any;

     filterToggle: any;
     totalSize: any;
     currentPage: any;
     pageSize: any;


     constructor(private router: Router, private dialog: MatDialog) { }


     tableList = [
       { stageName: 'Paper Manufacturing', stageCode: 'EM', status: 'Active', department:'Account', lead:'1' },
       { stageName: 'Electronics Industry', stageCode: 'I-115', status: 'Active',department:'RnD', lead:'1' },
       { stageName: 'Chemical Manufacturing', stageCode: 'PNT', status: 'Active',department:'QA', lead:'1' },

     ];

     // Function to get status text
     getStatusText(status: boolean): string {
       return status ? 'Active' : 'Inactive';
     }


     public addmodule(id: any) {
       console.log('jkhksbdjk');
       let dialogRef = this.dialog.open(AddsecComponent, {
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
}
