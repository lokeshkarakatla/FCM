import { Component, OnInit } from '@angular/core';
import { AddFueltypeAuditComponent } from './add-fueltype-audit/add-fueltype-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-fueltype',
  templateUrl: './a-fueltype.component.html',
  styleUrls: ['./a-fueltype.component.scss']
})
export class AFueltypeComponent  {

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
      { fuelType: 'Diesel (BS-VI CRDi with SCR)', modelName: 'Toyota Fortuner 4x4', status: 'Active' },
      { fuelType: 'Strong Hybrid Electric (SHEV)', modelName: 'Toyota Camry Hybrid', status: 'Active' },
      { fuelType: 'Petrol (Turbo GDi)', modelName: 'Hyundai Creta SX', status: 'Active' },
      { fuelType: 'Petrol (1.5L Turbocharged)', modelName: 'Hyundai Verna Turbo', status: 'Active' },
      { fuelType: 'Diesel (2.2L mHawk CRDi)', modelName: 'Mahindra XUV700 AX7', status: 'Active' },
      { fuelType: 'Diesel (2.0L Kryotec Turbo)', modelName: 'Tata Safari Dark Edition', status: 'Active' },
      { fuelType: 'Battery Electric (40.5 kWh BEV)', modelName: 'Tata Nexon EV Max', status: 'Active' },
      { fuelType: 'Petrol (1.5L i-VTEC Flex-Ready)', modelName: 'Honda Elevate ZX', status: 'Active' }
    ];

    // Function to get status text
    getStatusText(status: boolean): string {
      return status ? 'Active' : 'Inactive';
    }


     public addmodule(id: any) {
       console.log('jkhksbdjk');
       let dialogRef = this.dialog.open(AddFueltypeAuditComponent, {
         data: id,
         height: 'auto',
         width: '600px',
       });
       dialogRef.afterClosed().subscribe((data: any) => {});
     }



}
