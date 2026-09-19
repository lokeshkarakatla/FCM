import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddcategoryComponent } from '../category/addcategory/addcategory.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { UserPermissionService } from 'src/app/pages/helpers/user-permission.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddJobcodePopComponent } from './add-jobcode-pop/add-jobcode-pop.component';

@Component({
  selector: 'app-job-code',
  templateUrl: './job-code.component.html',
  styleUrls: ['./job-code.component.scss']
})
export class JobCodeComponent implements OnInit {

  // Pagination Values
  currentPage: number = 0;
  pageSize: number = 10;
  totalSize: number = 9;
  fromIndex: number = 0;

  tableList: any[] = [];
  filterToggle: boolean;
  filterForm: FormGroup;
  Status = [];
  
  canCreate: boolean = UserPermissionService.fnGetCreatePermissions(12);
  canDelete: boolean = UserPermissionService.fnGetDeletePermissions(12);
  canUpdate: boolean = UserPermissionService.fnGetUpdatePermissions(12);
  
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private _fb: FormBuilder,
    //private _MasterDataService: MasterDataService
  ) {
  }

  ngOnInit() {
    this.formInit();
    this.getCategory();
  }

  getCategory() {
    // Replaced the dummy data with the exact rows from the screenshot
    this.tableList = [
      { jobCode: '1DC', jobCodeTitle: '1st Draft Corrections', jobCodeCategory: 'Legal Team', chargeoutRate: 80, isActive: true },
      { jobCode: '1DR', jobCodeTitle: '1st Draft Reviewer', jobCodeCategory: 'Production Team', chargeoutRate: 60, isActive: true },
      { jobCode: 'AA', jobCodeTitle: 'Admin Assistant', jobCodeCategory: 'Business Services Team', chargeoutRate: 60, isActive: true },
      { jobCode: 'ACCCHK', jobCodeTitle: 'Accounts checking', jobCodeCategory: 'Production Team', chargeoutRate: 50, isActive: true },
      { jobCode: 'BSM', jobCodeTitle: 'Business Services Manager', jobCodeCategory: 'Business Services Team', chargeoutRate: 100, isActive: true },
      { jobCode: 'CC', jobCodeTitle: 'Construction Coordinator', jobCodeCategory: 'Construction Team', chargeoutRate: 150, isActive: true },
      { jobCode: 'CCAD1', jobCodeTitle: 'Construction CAD 1', jobCodeCategory: 'Business Services Team', chargeoutRate: 75, isActive: true },
      { jobCode: 'CCAD2', jobCodeTitle: 'Construction CAD 2', jobCodeCategory: 'Construction Team', chargeoutRate: 85, isActive: true },
      { jobCode: 'CCAD3', jobCodeTitle: 'Construction CAD 3', jobCodeCategory: 'Construction Team', chargeoutRate: 95, isActive: true },
      { jobCode: 'CFA', jobCodeTitle: 'Construction Field Assistant', jobCodeCategory: 'Construction Team', chargeoutRate: 55, isActive: true },
      { jobCode: 'CLCNT', jobCodeTitle: 'Client Contact', jobCodeCategory: 'Business Services Team', chargeoutRate: 30, isActive: true },
      { jobCode: 'CLCT', jobCodeTitle: 'Calculations', jobCodeCategory: 'Production Team', chargeoutRate: 50, isActive: true },
      { jobCode: 'CLINT', jobCodeTitle: 'Client Interaction', jobCodeCategory: 'Business Services Team', chargeoutRate: 30, isActive: true },
      { jobCode: 'CPC1', jobCodeTitle: 'Construction Party Chief 1', jobCodeCategory: 'Construction Team', chargeoutRate: 100, isActive: true },
      { jobCode: 'CPC2', jobCodeTitle: 'Construction Party Chief 2', jobCodeCategory: 'Construction Team', chargeoutRate: 110, isActive: true },
      { jobCode: 'CPC3', jobCodeTitle: 'Construction Party Chief 3', jobCodeCategory: 'Construction Team', chargeoutRate: 120, isActive: true },
      { jobCode: 'CRCTN', jobCodeTitle: 'Corrections', jobCodeCategory: 'Legal Team', chargeoutRate: 48, isActive: true },
      { jobCode: 'CTL', jobCodeTitle: 'Construction Team Lead', jobCodeCategory: 'Construction Team', chargeoutRate: 150, isActive: true }
    ];
  }

  // Active/InActive Status API
  Confirmation(item: any) {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { CategoryId: item.jobCode, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          // Toggle status manually for frontend demo purpose
          item.isActive = !item.isActive; 
          
          // this._MasterDataService.StatusCategory({ CategoryId: data.CategoryId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.getCategory();
          //   }
          // })
        }
      }
    );
  }

  clearFilter() {
    this.filterForm.reset();
    this.getCategory();
  }

  // delete Api
  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { CategoryId: item.jobCode, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          // Remove manually for frontend demo
          this.tableList = this.tableList.filter(x => x.jobCode !== item.jobCode);

          // this._MasterDataService.DeleteCategory({ CategoryId: data.CategoryId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.getCategory();
          //   }
          // });
        }
      }
    );
  }

  openEditDialog(value: any) {
    let dialogRef = this.dialog.open(AddJobcodePopComponent, {
      data: value,
      height: 'auto',
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.getCategory();
      }
    })
  }

  formInit() {
    this.filterForm = this._fb.group({
      Keyword: new FormControl(null),
      Status: new FormControl(null),
      StartIndex: new FormControl(0),
      GridSize: new FormControl(10),
      IsArchived: new FormControl(null)
    });
  }

  // convienience getter for form
  get f() { return this.filterForm.controls }

  fnHandlePage(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    // Assigning the form data
    this.filterForm?.get('StartIndex')?.setValue(this.currentPage);
    this.filterForm?.get('GridSize')?.setValue(this.pageSize);
    // Calling APi after page events
    this.getCategory();
  }
}