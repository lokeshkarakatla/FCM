import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddeditdeparmentComponent } from './addeditdeparment/addeditdeparment.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { UserPermissionService } from 'src/app/pages/helpers/user-permission.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-deparments',
  templateUrl: './deparments.component.html',
  styleUrls: ['./deparments.component.scss']
})
export class DeparmentsComponent implements OnInit {
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
  this.getDepartment();

}

getDepartment() {


  this.tableList = [
    {
        "DepartmentId": 9,
        "DepartmentName": "NPD ME",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DepartmentId": 7,
        "DepartmentName": "R&D",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DepartmentId": 6,
        "DepartmentName": "Quality",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DepartmentId": 5,
        "DepartmentName": "Design",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DepartmentId": 4,
        "DepartmentName": "Protoshop",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DepartmentId": 2,
        "DepartmentName": "Testing",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    }
]
  // this._MasterDataService.GetDepartment(this.filterForm.value).subscribe((data: any) => {
  //   if (data['Success']) {
  //     this.valuesD = data['Data']['Data'];
  //     this.totalSize = data['Data']['ToatalRecords'];// Assigning total Count
  //     this.tableList = this.valuesD.slice(this.fromIndex, this.pageSize);
  //     // Slicing data for paginating table
  //   }
  // })
}

// Active/InActive Status API
Confirmation(item: any) {
  let dialogRef = this.dialog.open(DialogComponent, {
    width: 'auto',
    data: { DepartmentId: item.DepartmentId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
  });
  dialogRef.afterClosed().subscribe(
    (data: any) => {
      if (data) {
        // this._MasterDataService.StatusDepartment({ DepartmentId: data.DepartmentId }).subscribe((data: any) => {
        //   if (data['Success']) {
        //     this.getDepartment();
        //   }
        // })
      }
    }
  );
}

clearFilter() {
  this.filterForm.reset();
  this.getDepartment();
}

// delete Api
deleteConfirmation(item: any) {
  let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    width: 'auto',
    data: { DepartmentId: item.DepartmentId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
  });
  dialogRef.afterClosed().subscribe(
    (data: any) => {
      if (data) {
        // this._MasterDataService.DeleteDepartment({ DepartmentId: data.DepartmentId }).subscribe((data: any) => {
        //   if (data['Success']) {
        //     this.getDepartment();
        //   }
        // });
      }
    }
  );
}


openEditDialog(value: any) {
  let dialogRef = this.dialog.open(AddeditdeparmentComponent, {
    data: value,
    height: 'auto',
    width: '500px',
  });
  dialogRef.afterClosed().subscribe(data => {
    if (data) {
      this.getDepartment();
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
  this.getDepartment();
}

}


