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
    { agency: 'HD', code: '=', head: 'Tejaswi', IsActive: true },
    { agency: 'Test', code: 'test', head: 'Roshan', IsActive: true },
    { agency: 'Manufacture', code: 'mfg', head: 'Raj', IsActive: true },
    { agency: 'HR Department', code: 'HR100', head: 'Sai', IsActive: true },
    { agency: 'IT Department', code: 'IT-DEPT', head: 'Karthik', IsActive: true },
    { agency: 'Painting Department', code: 'PD', head: 'Ravi', IsActive: false },
    { agency: 'Component-Shop', code: 'C-Shop', head: 'Nikhil', IsActive: true },
    { agency: 'Assembly line', code: 'A-Line', head: 'Hritik', IsActive: false },
    { agency: 'Paint Shop', code: 'P-Shop', head: 'Shiv', IsActive: true },
    { agency: 'Body Shop', code: 'BS', head: 'Chandana', IsActive: false }
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
