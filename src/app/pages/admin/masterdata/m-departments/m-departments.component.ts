import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-m-departments',
  templateUrl: './m-departments.component.html',
  styleUrls: ['./m-departments.component.scss']
})
export class MDepartmentsComponent {

  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
  }

  canCreate: any;
  canUpdate: any;
  canDelete: any;

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
    { agency: 'Automotive Quality Assurance & IATF 16949', code: 'QA-16949', head: 'Rajesh Sharma', IsActive: true },
    { agency: 'Field Engineering & Dealer Technical Service', code: 'FES-DLR', head: 'Vikram Singh', IsActive: true },
    { agency: 'Powertrain R&D & Calibration', code: 'RND-PWR', head: 'Dr. K. Patel', IsActive: true },
    { agency: 'Electrical, Electronics & ADAS Software', code: 'RND-EES', head: 'Amitabh Sen', IsActive: true },
    { agency: 'Trim, Chassis & Final Assembly (TCF)', code: 'MFG-TCF', head: 'Gurpreet Singh', IsActive: true },
    { agency: 'Supplier Quality Management (SQM)', code: 'SQA-VND', head: 'Sunil Verma', IsActive: true },
    { agency: 'Paint Shop & Cathodic Electrodeposition (CED)', code: 'PNT-CED', head: 'Ravi Teja', IsActive: true },
    { agency: 'Vehicle Homologation & Safety Compliance', code: 'SAF-HOM', head: 'Manoj Kumar', IsActive: true }
  ];

  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddDepartmentComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }

  clearFilter() { }

  getTests() { }

  addcheckpoint(item: any) {
    this.router.navigate(['/app/setup/subjective/overview']);
  }

}
