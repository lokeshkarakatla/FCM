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
      { name: 'Passenger Cars & Executive Sedans', code: 'VTY-CAR', status: 'Active' },
      { name: 'Premium & Compact SUVs (4x4 / AWD)', code: 'VTY-SUV', status: 'Active' },
      { name: 'Battery Electric Vehicles (BEV Car & SUV)', code: 'VTY-BEV', status: 'Active' },
      { name: 'Heavy Commercial Trucks & Lorries (HCV)', code: 'VTY-HCV', status: 'Active' },
      { name: 'Light Commercial Vehicles & Vans (LCV)', code: 'VTY-LCV', status: 'Active' },
      { name: 'Connected Fleet & Multi-Axle Haulers', code: 'VTY-FLT', status: 'Active' }
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

