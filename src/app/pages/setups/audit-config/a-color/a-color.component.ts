import { Component, OnInit } from '@angular/core';
import { AddColorAuditComponent } from './add-color-audit/add-color-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-color',
  templateUrl: './a-color.component.html',
  styleUrls: ['./a-color.component.scss']
})
export class AColorComponent  {

      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
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


   tableList =[
    { color: 'Maroon', model: 'Corvette', status: true },
    { color: 'Black', model: 'Nitro', status: true },
    { color: 'Maroon', model: 'Nitro', status: true },
    { color: 'Steel Grey', model: 'Fortuner', status: true },
    { color: 'Often blue', model: 'Corvette', status: true },
    { color: 'Woody Black', model: 'Toyota Camry', status: true },
    { color: 'Nouvelle Blue Pearly', model: 'Hyundai', status: true },
    { color: 'Acura Valencia Red Pearl', model: 'Ferrari', status: true },
    { color: 'Ceramic Gray', model: 'Lamborghini', status: true },
    { color: 'Lite Gray', model: 'Lexus', status: true },
    { color: 'Red Blue', model: 'Mahindra XUV700', status: true },
    { color: 'Royal Red', model: 'Mahindra XUV700', status: true },
    { color: 'Yellow', model: 'Toyota Fortuner', status: true },
    { color: 'Old Orange', model: 'Toyota Fortuner', status: true }
  ];

  // Function to get status text
  getStatusText(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }


   public addmodule(id: any) {
     console.log('jkhksbdjk');
     let dialogRef = this.dialog.open(AddColorAuditComponent, {
       data: id,
       height: 'auto',
       width: '600px',
     });
     dialogRef.afterClosed().subscribe((data: any) => {});
   }


}
