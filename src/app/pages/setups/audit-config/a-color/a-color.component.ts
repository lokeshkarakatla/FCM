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


    tableList = [
      { color: 'Attitude Black Mica', model: 'Toyota Fortuner 4x4', status: true },
      { color: 'Platinum White Pearl', model: 'Toyota Camry Hybrid', status: true },
      { color: 'Ranger Khaki Dual Tone', model: 'Hyundai Creta SX', status: true },
      { color: 'Abyss Black Pearl', model: 'Hyundai Verna Turbo', status: true },
      { color: 'Midnight Black Metallic', model: 'Mahindra XUV700 AX7', status: true },
      { color: 'Oberon Black (Dark Edition)', model: 'Tata Safari Dark Edition', status: true },
      { color: 'Daytona Grey (EV Trim)', model: 'Tata Nexon EV Max', status: true },
      { color: 'Phoenix Orange Metallic', model: 'Honda Elevate ZX', status: true }
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
