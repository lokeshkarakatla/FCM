import { Component, OnInit } from '@angular/core';
import { AddVehicletypeAuditComponent } from './add-vehicletype-audit/add-vehicletype-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-vehicletype',
  templateUrl: './a-vehicletype.component.html',
  styleUrls: ['./a-vehicletype.component.scss']
})
export class AVehicletypeComponent {

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
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}

    tableList = [
      { name: 'Micro SUV', code: 'M', status: 'Active' },
      { name: 'Elevate', code: 'A', status: 'Active' },
      { name: 'EV', code: 'V', status: 'Active' },
      { name: 'Versa', code: 'E', status: 'Active' },
      { name: 'Crossover', code: 'O', status: 'Active' },
      { name: 'Sumo', code: 'D', status: 'Active' },
      { name: 'SUV', code: 'U', status: 'Active' },
      { name: 'Hatchback', code: 'H', status: 'Active' },
      { name: 'Pickup Truck', code: 'T', status: 'Active' },
      { name: 'Hybrid SUV', code: 'B', status: 'Active' },
      { name: 'AWD', code: 'W', status: 'Active' },
      { name: 'Coupe', code: 'X', status: 'Active' },
      { name: 'Convertible', code: 'S', status: 'Active' },
      { name: 'Hybrid', code: 'I', status: 'Active' },
      { name: 'Station Wagon', code: 'F', status: 'Active' }
    ];

    // Function to get status text
    getStatusText(status: boolean): string {
      return status ? 'Active' : 'Inactive';
    }


    public addmodule(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddVehicletypeAuditComponent, {
        data: id,
        height: 'auto',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((data: any) => { });
    }



  }

