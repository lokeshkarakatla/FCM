import { Component } from '@angular/core';
import { AddEnginetypeAuditComponent } from './add-enginetype-audit/add-enginetype-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-enginetype',
  templateUrl: './a-enginetype.component.html',
  styleUrls: ['./a-enginetype.component.scss']
})
export class AEnginetypeComponent {

  canCreate: any;
  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
   Confirmation(item: any) {
       let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
         width: 'auto',
         data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
       });

     }
  constructor(private router: Router, private dialog: MatDialog) { }


  tableList = [
    { name: '2.8L Turbo Diesel D-4D (204 PS / 500 Nm)', code: 'ENG-28D', status: 'Active' },
    { name: '2.0L mStallion Turbo GDi Petrol (200 PS)', code: 'ENG-20TGDI', status: 'Active' },
    { name: '1.5L Smartstream Turbo GDi Petrol (160 PS)', code: 'ENG-15TGDI', status: 'Active' },
    { name: '2.5L 4-Cylinder Dynamic Force Hybrid (218 PS)', code: 'ENG-25HYB', status: 'Active' },
    { name: 'Permanent Magnet Synchronous Motor (145 PS EV)', code: 'ENG-EVM', status: 'Active' },
    { name: '2.0L Kryotec Turbocharged Diesel (170 PS)', code: 'ENG-20D', status: 'Active' },
    { name: '1.5L i-VTEC DOHC with VTC (121 PS)', code: 'ENG-15NA', status: 'Active' }
  ];

  // Function to get status text
  getStatusText(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }


  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddEnginetypeAuditComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }



}
