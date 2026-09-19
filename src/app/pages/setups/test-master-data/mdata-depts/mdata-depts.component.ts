import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddDepartmentComponent } from 'src/app/pages/admin/masterdata/m-departments/add-department/add-department.component';
import { AddresparasComponent } from 'src/app/pages/testing/masterdata/respareas/addresparas/addresparas.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AddAgencyAuditComponent } from '../../audit-config/a-agencies/add-agency-audit/add-agency-audit.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-mdata-depts',
  templateUrl: './mdata-depts.component.html',
  styleUrls: ['./mdata-depts.component.scss']
})
export class MdataDeptsComponent {

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
    { agency: 'HD', code: '=', head:"Tejaswi", status: true },
    { agency: 'Test', code: 'test',head:"Roshan", status: true },
    { agency: 'Manufacture', code: 'mfg', head:"Raj", status: true },
    { agency: 'HR Department', code: 'HR100', head:"Sai",status: true },
    { agency: 'IT Department', code: 'IT-DEPT',head:"Karthik", status: true },
    { agency: 'Painting Department', code: 'PD',head:"Ravi", status: false },
    { agency: 'Component-Shop', code: 'C-Shop',head:"Nikhil", status: true },
    { agency: 'Assembly line', code: 'A-Line',head:"Hritik", status: false },
    { agency: 'Paint Shop', code: 'P-Shop',head:"Shiv", status: true },
    { agency: 'Body Shop', code: 'BS',head:"Chandana", status: false }
  ]

  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddAgencyAuditComponent, {
      data: id,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((data: any) => { });
  }

  addcheckpoint(item) {
    this.router.navigate(['/app/setup/subjective/overview']);

  }



}
