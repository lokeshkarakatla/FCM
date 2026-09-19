import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserPermissionService } from 'src/app/pages/helpers/user-permission.service';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
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
  this.getCategory();
}

getCategory() {

  this.tableList= [
            {
                "CategoryId": 9,
                "CategoryName": "Open",
                "IsActive": true,
                "createdBy": null,
                "modifiedBy": null,
                "Status": null,
                "UserId": null,
                "Keyword": null,
                "StartIndex": 0,
                "GridSize": 10
            },
            {
                "CategoryId": 8,
                "CategoryName": "Accepted As it is",
                "IsActive": true,
                "createdBy": null,
                "modifiedBy": null,
                "Status": null,
                "UserId": null,
                "Keyword": null,
                "StartIndex": 0,
                "GridSize": 10
            },
            {
                "CategoryId": 6,
                "CategoryName": "CIS marking",
                "IsActive": true,
                "createdBy": null,
                "modifiedBy": null,
                "Status": null,
                "UserId": null,
                "Keyword": null,
                "StartIndex": 0,
                "GridSize": 10
            },
            {
                "CategoryId": 5,
                "CategoryName": "Part Quality",
                "IsActive": true,
                "createdBy": null,
                "modifiedBy": null,
                "Status": null,
                "UserId": null,
                "Keyword": null,
                "StartIndex": 0,
                "GridSize": 10
            },
            {
                "CategoryId": 4,
                "CategoryName": "SOP/ Process",
                "IsActive": true,
                "createdBy": null,
                "modifiedBy": null,
                "Status": null,
                "UserId": null,
                "Keyword": null,
                "StartIndex": 0,
                "GridSize": 10
            },
            {
                "CategoryId": 3,
                "CategoryName": "BOM/ Add-Del",
                "IsActive": true,
                "createdBy": null,
                "modifiedBy": null,
                "Status": null,
                "UserId": null,
                "Keyword": null,
                "StartIndex": 0,
                "GridSize": 10
            },
            {
                "CategoryId": 1,
                "CategoryName": "Design Modification",
                "IsActive": true,
                "createdBy": null,
                "modifiedBy": null,
                "Status": null,
                "UserId": null,
                "Keyword": null,
                "StartIndex": 0,
                "GridSize": 10
            }
        ]

  // this._MasterDataService.GetCategory(this.filterForm.value).subscribe((data: any) => {
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
    data: { CategoryId: item.CategoryId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
  });
  dialogRef.afterClosed().subscribe(
    (data: any) => {
      if (data) {
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
    data: { CategoryId: item.CategoryId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
  });
  dialogRef.afterClosed().subscribe(
    (data: any) => {
      if (data) {
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
  let dialogRef = this.dialog.open(AddcategoryComponent, {
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