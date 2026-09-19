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


     tableList =[
      { fuelType: 'Petrol', modelName: 'Verna EV 1.50', status: 'Active' },
      { fuelType: 'Diesel', modelName: 'Lamborghini', status: 'Active' },
      { fuelType: 'CNG', modelName: 'Ferrari', status: 'Active' },
      { fuelType: 'Petrol', modelName: 'Hyundai', status: 'Active' },
      { fuelType: 'Diesel', modelName: 'Toyota Camry', status: 'Active' },
      { fuelType: 'Petrol', modelName: 'Corvette', status: 'Active' },
      { fuelType: 'Solar', modelName: 'Corvette', status: 'Active' },
      { fuelType: 'CNG', modelName: 'Toyota Camry', status: 'Active' },
      { fuelType: 'CNG', modelName: 'Hyundai', status: 'Active' },
      { fuelType: 'Solar', modelName: 'Ferrari', status: 'Active' },
      { fuelType: 'Petrol', modelName: 'Lamborghini', status: 'Active' },
      { fuelType: 'Solar', modelName: 'Lexus', status: 'Active' },
      { fuelType: 'Electric', modelName: 'Mahindra XUV700', status: 'Active' },
      { fuelType: 'Diesel', modelName: 'Toyota Fortuner', status: 'Active' },
      { fuelType: 'Petrol', modelName: 'Hyundai Creta', status: 'Active' }

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
