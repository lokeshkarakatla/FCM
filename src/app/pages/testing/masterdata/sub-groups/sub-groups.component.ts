import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserPermissionService } from 'src/app/pages/helpers/user-permission.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddeditsubgroupComponent } from './addeditsubgroup/addeditsubgroup.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-sub-groups',
  templateUrl: './sub-groups.component.html',
  styleUrls: ['./sub-groups.component.scss']
})
export class SubGroupsComponent implements OnInit {

  // Pagination Values
  currentPage: number = 0;
  pageSize: number = 10;
  totalSize: number;
  fromIndex: number = 0;

  allUsers: any[];
  tableList: any[] = [];
  filterToggle: boolean;
  filterForm: FormGroup;
  Status = [];
  filteredUsers = [];
  allRoles: any;
  valuesD: any;

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
    this.getSubGroups();
  }

  getSubGroups() {

    this.tableList =  [
      {
          "SubGroupId": 163,
          "SubGroupName": "Field Testing",
          "respSectionId": 11,
          "respSectionName": "Testing",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 162,
          "SubGroupName": "Lab Testing",
          "respSectionId": 11,
          "respSectionName": "Testing",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 161,
          "SubGroupName": "Homologation",
          "respSectionId": 11,
          "respSectionName": "Testing",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 160,
          "SubGroupName": "Engine Performance",
          "respSectionId": 9,
          "respSectionName": "Engine Design",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 159,
          "SubGroupName": "Loader Controls",
          "respSectionId": 10,
          "respSectionName": "Quality",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 158,
          "SubGroupName": "Loader valve",
          "respSectionId": 10,
          "respSectionName": "Quality",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 157,
          "SubGroupName": "Cylinder and Tubings",
          "respSectionId": 10,
          "respSectionName": "Quality",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 156,
          "SubGroupName": "Bucket and frame",
          "respSectionId": 10,
          "respSectionName": "Quality",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 155,
          "SubGroupName": "Tappet and front cover",
          "respSectionId": 10,
          "respSectionName": "Quality",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      },
      {
          "SubGroupId": 154,
          "SubGroupName": "Engine block",
          "respSectionId": 10,
          "respSectionName": "Quality",
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "UserId": null
      }
  ]
    // this._MasterDataService.GetSubGroups(this.filterForm.value).subscribe((data: any) => {
    //   if (data['Success']) {
    //     this.valuesD = data['Data']['Data'];
    //     this.totalSize = data['Data']['ToatalRecords'];// Assigning total Count
    //     this.tableList = this.valuesD.slice(this.fromIndex, this.pageSize);
    //   }
    // })
  }

  // Active/InActive Status API
  Confirmation(item: any) {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { SubGroupId: item.SubGroupId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          // this._MasterDataService.StatusSubGroups({ SubGroupId: data.SubGroupId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.getSubGroups();
          //   }
          // })
        }
      }
    );
  }


  clearFilter() {
    this.filterForm.reset();
    this.getSubGroups();
  }

  // delete Api
  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { SubGroupId: item.SubGroupId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          // this._MasterDataService.DeleteSubGroups({ SubGroupId: data.SubGroupId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.getSubGroups();
          //   }
          // });
        }
      }
    );
  }


  openEditDialog(value: any) {
    let dialogRef = this.dialog.open(AddeditsubgroupComponent, {
      data: value,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.getSubGroups();
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
    this.getSubGroups();
  }

}


