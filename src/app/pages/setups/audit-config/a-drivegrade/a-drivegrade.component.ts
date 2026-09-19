import { Component, OnInit } from '@angular/core';
import { AddDrivegradeAuditComponent } from './add-drivegrade-audit/add-drivegrade-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-drivegrade',
  templateUrl: './a-drivegrade.component.html',
  styleUrls: ['./a-drivegrade.component.scss']
})
export class ADrivegradeComponent {

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
    { name: 'All Wheel Drive', grade: 'Excellent Quality', gradeCode: '5', status: 'Active' },
    { name: 'All Wheel Drive', grade: 'IATF 16949', gradeCode: 'I', status: 'Active' },
    { name: 'Rear Wheel Drive', grade: 'Nice Look', gradeCode: 'M', status: 'Active' },
    { name: 'All Wheel Drive', grade: 'Extra Super', gradeCode: 'R', status: 'Active' },
    { name: 'Front Wheel Drive', grade: 'Extra', gradeCode: '8', status: 'Active' },
    { name: 'Front Wheel Drive', grade: 'Superb', gradeCode: '7', status: 'Active' },
    { name: 'Front Wheel Drive', grade: 'Bright', gradeCode: '6', status: 'Active' },
    { name: 'Rear Wheel Drive', grade: 'Modish', gradeCode: 'D', status: 'Active' },
    { name: 'All Wheel Drive', grade: 'Shiny', gradeCode: '7', status: 'Active' },
    { name: 'Four Wheel Drive.', grade: 'Elegant', gradeCode: 'G', status: 'Active' },
    { name: 'All Wheel Drive', grade: 'Nice', gradeCode: '8', status: 'Active' },
    { name: 'All Wheel Drive', grade: 'Sharp', gradeCode: 'H', status: 'Active' },
    { name: 'All Wheel Drive', grade: 'Savvy LV4', gradeCode: 'M', status: 'Active' },
    { name: 'All Wheel Drive', grade: 'Style', gradeCode: 'A', status: 'Active' }
  ];

  // Function to get status text
  getStatusText(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }


  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddDrivegradeAuditComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }



}
