import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AddeditscorematrixComponent } from './addeditscorematrix/addeditscorematrix.component';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionService } from 'src/app/pages/helpers/user-permission.service';

@Component({
  selector: 'app-score-matrix',
  templateUrl: './score-matrix.component.html',
  styleUrls: ['./score-matrix.component.scss']
})
export class ScoreMatrixComponent implements OnInit {
  currentPage: number = 0;
  pageSize: number = 10;
  totalSize: number;
  fromIndex: number = 0;
  filterToggle: boolean = false;
  filterForm: FormGroup;
  scoreMatrix: any[];
  tableList: any[] = [];
  filteredScoreMatrix = [];

  canCreate: boolean = UserPermissionService.fnGetCreatePermissions(12);
  canDelete: boolean = UserPermissionService.fnGetDeletePermissions(12);
  canUpdate: boolean = UserPermissionService.fnGetUpdatePermissions(12);
  
  constructor(private _fb: FormBuilder, public dialog: MatDialog, 
   // private _MasterDataService: MasterDataService
  ) { }


  ngOnInit(): void {
    this.formInit();
    this.getScoreMatrix();
  }

  addScoreMatrix(value: any) {
    let dialogRef = this.dialog.open(AddeditscorematrixComponent, {
      data: value,
      height: 'auto',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.getScoreMatrix();
      }
    })
  }

  Confirmation(item: any) {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { ScoreMatrixId: item.ScoreMatrixId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
          // this._MasterDataService.StatusScoreMatrix({ ScoreMatrixId: data.ScoreMatrixId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.getScoreMatrix();
          //   }
          // })
        }
      }
    );
  }

  getScoreMatrix() {

    this.tableList =[
      {
          "ScoreMatrixId": 8,
          "ScoreMatrixName": "Assembly",
          "Severity": 4,
          "IsDeleted": null,
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "Status": null
      },
      {
          "ScoreMatrixId": 7,
          "ScoreMatrixName": "Service",
          "Severity": 5,
          "IsDeleted": null,
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "Status": null
      },
      {
          "ScoreMatrixId": 6,
          "ScoreMatrixName": "Performance",
          "Severity": 7,
          "IsDeleted": null,
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "Status": null
      },
      {
          "ScoreMatrixId": 5,
          "ScoreMatrixName": "Functional",
          "Severity": 8,
          "IsDeleted": null,
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "Status": null
      },
      {
          "ScoreMatrixId": 4,
          "ScoreMatrixName": "Safety",
          "Severity": 10,
          "IsDeleted": null,
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "Status": null
      },
      {
          "ScoreMatrixId": 2,
          "ScoreMatrixName": "Perceived quality",
          "Severity": 6,
          "IsDeleted": null,
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "Status": null
      },
      {
          "ScoreMatrixId": 1,
          "ScoreMatrixName": "Regulation/Homologation",
          "Severity": 9,
          "IsDeleted": null,
          "IsActive": true,
          "createdBy": null,
          "modifiedBy": null,
          "Status": null
      }
  ]
    // this._MasterDataService.GetScoreMatrix(this.filterForm.value).subscribe((data: any) => {
    //   if (data['Success']) {
    //     this.scoreMatrix = data['Data']['Data'];
    //     this.totalSize = data['Data']['ToatalRecords'];// Assigning total Count
    //     this.tableList = this.scoreMatrix.slice(this.fromIndex, this.pageSize);// Slicing data for paginating table
    //   }
    // })
  }

  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ScoreMatrixId: item.ScoreMatrixId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {

        if (data) {
          // this._MasterDataService.DeleteScoreMatrix({ ScoreMatrixId: data.ScoreMatrixId }).subscribe((data: any) => {
          //   if (data['Success']) {
          //     this.getScoreMatrix();
          //   }
          // });
        }
      }
    );
  }

  clearFilter() {
    this.filterForm.reset();
    this.getScoreMatrix();
  }

  formInit() {
    this.filterForm = this._fb.group({
      Keyword: new FormControl(null),
      Status: new FormControl(null),
      StartIndex: new FormControl(0),
      GridSize: new FormControl(10),

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
    this.getScoreMatrix();
  }

}

