import { Component, OnInit } from '@angular/core';
import { AddDrivetypeAuditComponent } from './add-drivetype-audit/add-drivetype-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-drivetype',
  templateUrl: './a-drivetype.component.html',
  styleUrls: ['./a-drivetype.component.scss']
})
export class ADrivetypeComponent {

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
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
    constructor(private router: Router, private dialog: MatDialog) { }


    tableList = [
      { name: 'Automation Driver', status: 'Active' },
    { name: 'Four Wheel Drive.', status: 'Active' },
    { name: 'All Wheel Drive', status: 'Active' },
    { name: 'Front Wheel Drive', status: 'Active' },
    { name: 'Rear Wheel Drive', status: 'Active' }
    ];

    // Function to get status text
    getStatusText(status: boolean): string {
      return status ? 'Active' : 'Inactive';
    }


    public addmodule(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddDrivetypeAuditComponent, {
        data: id,
        height: 'auto',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((data: any) => { });
    }



  }
