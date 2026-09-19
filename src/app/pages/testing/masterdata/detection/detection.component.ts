import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdddetectionComponent } from './adddetection/adddetection.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionService } from 'src/app/pages/helpers/user-permission.service';

@Component({
  selector: 'app-detection',
  templateUrl: './detection.component.html',
  styleUrls: ['./detection.component.scss']
})
export class DetectionComponent implements OnInit {
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
   this.getDetection();
 }

 getDetection() {
  this.tableList =  [
    {
        "DetectionId": 6,
        "DetectionName": "10",
        "Remarks": "Cannot be detected/ Customer feedback",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DetectionId": 5,
        "DetectionName": "8",
        "Remarks": "During Target market testing",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DetectionId": 4,
        "DetectionName": "6",
        "Remarks": "During Line Build/Plant testing/IB testing",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DetectionId": 2,
        "DetectionName": "4",
        "Remarks": "During R&D Testing",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    },
    {
        "DetectionId": 1,
        "DetectionName": "1",
        "Remarks": "During Design/ Proto Assembly",
        "IsActive": true,
        "createdBy": null,
        "modifiedBy": null,
        "UserId": null
    }
]
  //  this._MasterDataService.GetDetection(this.filterForm.value).subscribe((data: any) => {
  //    if (data['Success']) {
  //      this.valuesD = data['Data']['Data'];
  //      this.totalSize = data['Data']['ToatalRecords'];// Assigning total Count
  //      this.tableList = this.valuesD.slice(this.fromIndex, this.pageSize);
  //      // Slicing data for paginating table
  //    }
  //  })
 }

 // Active/InActive Status API
 Confirmation(item: any) {
   let dialogRef = this.dialog.open(DialogComponent, {
     width: 'auto',
     data: { DetectionId: item.DetectionId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
   });
   dialogRef.afterClosed().subscribe(
     (data: any) => {
       if (data) {
        //  this._MasterDataService.StatusDetection({ DetectionId: data.DetectionId }).subscribe((data: any) => {
        //    if (data['Success']) {
        //      this.getDetection();
        //    }
        //  })
       }
     }
   );
 }


 clearFilter() {
   this.filterForm.reset();
   this.getDetection();
 }

 // delete Api
 deleteConfirmation(item: any) {
   let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
     width: 'auto',
     data: { DetectionId: item.DetectionId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
   });
   dialogRef.afterClosed().subscribe(
     (data: any) => {
       if (data) {
        //  this._MasterDataService.DeleteDetection({ DetectionId: data.DetectionId }).subscribe((data: any) => {
        //    if (data['Success']) {
        //      this.getDetection();
        //    }
        //  });
       }
     }
   );
 }


 openEditDialog(value: any) {
   let dialogRef = this.dialog.open(AdddetectionComponent, {
     data: value,
     height: 'auto',
     width: '450px',
   });
   dialogRef.afterClosed().subscribe(data => {
     if (data) {
       this.getDetection();
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
   this.getDetection();
 }

}
