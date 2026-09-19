import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AddresparasComponent } from './addresparas/addresparas.component';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionService } from 'src/app/pages/helpers/user-permission.service';
 
@Component({
  selector: 'app-respareas',
  templateUrl: './respareas.component.html',
  styleUrls: ['./respareas.component.scss']
})
export class RespareasComponent implements OnInit {
  currentPage: number = 0;
  pageSize: number = 10;
  totalSize: number;
  fromIndex: number = 0;
  filterToggle: boolean = false;
  filterForm: FormGroup;
  respSection: any;
 
  canCreate: boolean = UserPermissionService.fnGetCreatePermissions(12);
  canDelete: boolean = UserPermissionService.fnGetDeletePermissions(12);
  canUpdate: boolean = UserPermissionService.fnGetUpdatePermissions(12);
 
  constructor(public dialog: MatDialog,
    // private _MasterDataService: MasterDataService,
      private _fb: FormBuilder) { }
 
  filteredUsers = [];
  allRoles: any;
  tableList: any[] = [];
 
  ngOnInit(): void {
    this.formInit();
    this.fnGetRespSections();
  }
 
 
  addRespSection(value: any) {
    this.dialog.open(AddresparasComponent, {
      data: value,
      width: "680px",
      height: "auto"
    }).afterClosed().subscribe(data => {
      if (data) {
        this.fnGetRespSections();
      }
    })
  }
 
 
  fnGetRespSections() {
 
    this.tableList =  [
      {
          "respSectionId": 12,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 1,
          "UsersId": "5",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Test 1",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 11,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 6,
          "UsersId": "9,15,16,38,40,41",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Testing",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 9,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 1,
          "UsersId": "26",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Engine Design",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 8,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 3,
          "UsersId": "23,24,36",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "NPD ME",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 7,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 1,
          "UsersId": "18",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Cabin Design",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 6,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 1,
          "UsersId": "17",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Loader Design",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 5,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 2,
          "UsersId": "11,35",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Hydraulic Design",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 4,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 5,
          "UsersId": "9,15,28,36,37",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Electrical Design",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 2,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 1,
          "UsersId": "20",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Transmission Design",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      },
      {
          "respSectionId": 1,
          "ResponsibleSectionLeadId": null,
          "ResponsibleSectionLead": null,
          "EntryCount": 7,
          "UsersId": "14,19,27,31,32,40,42",
          "UserId": null,
          "UserName": null,
          "respLeads": null,
          "respSectionName": "Vehicle Design",
          "isActive": true,
          "isDeleted": false,
          "createdBy": null,
          "modifiedBy": null,
          "ResponsibleSections": null
      }
  ]
    // this._MasterDataService.GetRespSection(this.filterForm.value).subscribe((data: any) => {
    //   if (data['Success']) {
    //     this.respSection = data['Data']['Data'];
    //     this.totalSize = data['Data']['ToatalRecords'];// Assigning total Count
    //     this.tableList = this.respSection.slice(this.fromIndex, this.pageSize);
    //   }
    // })
  }
 
  formInit() {
    this.filterForm = this._fb.group({
      Keyword: new FormControl(null),
      Status : new FormControl(null),
      StartIndex: new FormControl(0),
      GridSize: new FormControl(10),
    });
  }
 
  Confirmation(item: any) {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { respSectionId: item.respSectionId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          // this._MasterDataService.StatusRespSection({ respSectionId: data.respSectionId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.fnGetRespSections();
          //   }
          // })
        }
      }
    );
  }
 
  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { respSectionId: item.respSectionId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          // this._MasterDataService.DeleteRespSection({ respSectionId: data.respSectionId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.fnGetRespSections();
          //   }
          // });
        }
      }
    );
  }
 
  clearFilter() {
    this.filterForm.reset();
    this.fnGetRespSections();
  }
 
  fnHandlePage(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    // Assigning the form data
    this.filterForm?.get('StartIndex')?.setValue(this.currentPage);
    this.filterForm?.get('GridSize')?.setValue(this.pageSize);
    // Calling APi after page events
    this.fnGetRespSections();
  }
 
}
 