import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'; // ✅ Import MatDialog
import { AddtractorsComponent } from 'src/app/addtractors/addtractors.component';
import { StatusConfirmationDialogComponent } from '../testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
 
@Component({
  selector: 'app-tractorstatus',
  templateUrl: './tractorstatus.component.html',
  styleUrls: ['./tractorstatus.component.scss']
})
export class TractorstatusComponent implements OnInit {
 
  filterToggle = false;
  filterForm!: FormGroup;
  tableList: any[] = [];
  totalSize = 0;
  currentPage = 0;
  pageSize = 10;
 
  canCreate = true;
  canUpdate = true;
  canDelete = true;
  departmentName = 'Testing';
  roleName = 'Admin';
 
  constructor(private fb: FormBuilder, private dialog: MatDialog) {} // ✅ Inject MatDialog
 
  ngOnInit(): void {
    this.initForm();
    this.loadMockData();
  }
 
  initForm(): void {
    this.filterForm = this.fb.group({
      Keyword: [''],
      Status: [null],
      ProjectId: [null]
    });
  }
 
  loadMockData(): void {
    this.tableList = [
      {
        TractorNumber: 'TR-001',
        ProjectCode: 'PC-100',
        Config: 'Config-A',
        ChassisNo: 'CH-789',
        EngineNo: 'EN-456',
        TestActivityPlan: 'Durability',
        TestingHours: 100,
        ActualTestingHours: 95,
        Remarks: 'All good',
        IsActive: true,
        TotalUsed: false
      },
      {
        TractorNumber: 'TR-002',
        ProjectCode: 'PC-200',
        Config: 'Config-B',
        ChassisNo: 'CH-123',
        EngineNo: 'EN-789',
        TestActivityPlan: 'Performance',
        TestingHours: 120,
        ActualTestingHours: 110,
        Remarks: 'Minor delay',
        IsActive: false,
        TotalUsed: true
      },
{
  TractorNumber: 'TR-003',
  ProjectCode: 'PC-300',
  Config: 'Config-C',
  ChassisNo: 'CH-456',
  EngineNo: 'EN-321',
  TestActivityPlan: 'Endurance',
  TestingHours: 150,
  ActualTestingHours: 140,
  Remarks: 'Testing on track',
  IsActive: true,
  TotalUsed: false
},
{
  TractorNumber: 'TR-004',
  ProjectCode: 'PC-400',
  Config: 'Config-D',
  ChassisNo: 'CH-654',
  EngineNo: 'EN-654',
  TestActivityPlan: 'Field',
  TestingHours: 90,
  ActualTestingHours: 85,
  Remarks: 'Field test completed',
  IsActive: false,
  TotalUsed: true
},
{
  TractorNumber: 'TR-005',
  ProjectCode: 'PC-500',
  Config: 'Config-E',
  ChassisNo: 'CH-987',
  EngineNo: 'EN-987',
  TestActivityPlan: 'Validation',
  TestingHours: 130,
  ActualTestingHours: 125,
  Remarks: 'Slight vibration observed',
  IsActive: true,
  TotalUsed: true
},
{
  TractorNumber: 'TR-006',
  ProjectCode: 'PC-600',
  Config: 'Config-F',
  ChassisNo: 'CH-741',
  EngineNo: 'EN-852',
  TestActivityPlan: 'Stress',
  TestingHours: 200,
  ActualTestingHours: 190,
  Remarks: 'Overheating under load',
  IsActive: false,
  TotalUsed: false
},
{
  TractorNumber: 'TR-007',
  ProjectCode: 'PC-700',
  Config: 'Config-G',
  ChassisNo: 'CH-159',
  EngineNo: 'EN-753',
  TestActivityPlan: 'Noise & Vibration',
  TestingHours: 110,
  ActualTestingHours: 105,
  Remarks: 'Noise levels acceptable',
  IsActive: true,
  TotalUsed: false
}
 
 
 
 
    ];
    this.totalSize = this.tableList.length;
  }
 
  getTractors(): void {
    console.log('Filter Applied:', this.filterForm.value);
  }
 
  clearFilter(): void {
    this.filterForm.reset();
    this.getTractors();
  }
 
  addtractors(value: any) {
    const dialogRef = this.dialog.open(AddtractorsComponent, {
      data: value,
      height: 'auto',
      width: '1150px',
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'Update') {
        this.loadMockData(); // Or refresh your list
      }
    });
  }
 
  // deleteConfirmation(item: any): void {
  //   console.log('Delete Tractor:', item);
  // }
 
  // Confirmation(item: any): void {
  //   console.log('Toggle status for:', item);
  //   item.IsActive = !item.IsActive;
  // }
 
  fnHandlePage(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log('Page changed:', this.currentPage, this.pageSize);
  }
  Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
    // dialogRef.afterClosed().subscribe(
    //   (data: any) => {
    //     if (data) {
    //       this._SetupService.tractorStatus({ TractorStatusId: data.TractorStatusId }).subscribe((data: any) => {
    //         if (data['Success']) {
    //           this.getTractors();
    //         }
    //       })
    //     }
    //   }
    // );
  }
    deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
 
}
}