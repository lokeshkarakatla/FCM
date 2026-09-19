import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddtestsComponent } from 'src/app/addtests/addtests.component';
import { StatusConfirmationDialogComponent } from '../testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
 
@Component({
  selector: 'app-teststatus',
  templateUrl: './teststatus.component.html',
  styleUrls: ['./teststatus.component.scss']
})
export class TeststatusComponent implements OnInit {
  filterForm!: FormGroup;
  filterToggle = false;
 
  canCreate = true;
  canUpdate = true;
  canDelete = true;
 
  departmentName = 'Testing';
  roleName = 'Admin';
 
  currentPage = 0;
  pageSize = 10;
  totalSize = 0;
 
  responsibleSections = [
    { respSectionId: 1, respSectionName: 'Engine' },
    { respSectionId: 2, respSectionName: 'Transmission' }
  ];
 
  responsibleSectionLeads = [
    { UserId: 101, UserName: 'John Doe' },
    { UserId: 102, UserName: 'Jane Smith' }
  ];
 
  tableList: any[] = [];
 
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}
 
  ngOnInit(): void {
    this.initFilterForm();
    this.loadMockData();
  }
 
  initFilterForm(): void {
    this.filterForm = this.fb.group({
      Keyword: [''],
      Status: [null],
      ResponsibleSectionId: [null],
      ResponsibleSectionLeadId: [null]
    });
  }
 
  loadMockData(): void {
    this.tableList = [
      {
        TractorNumber: 'TR-001',
        ProjectCode: 'PC-101',
        TestDescription: 'Engine performance',
        TestStandardReferred: 'ISO-9001',
        ReportNo: 'RPT-2023-01',
        TestData: 'Data A',
        TestDocumentURL: 'report1.pdf',
        ImagePath: 'https://example.com/report1.pdf',
        ResponsibleSectionName: 'Engine',
        UserName: 'John Doe',
        Remarks: 'Verified',
        IsActive: true
      },
      {
        TractorNumber: 'TR-002',
        ProjectCode: 'PC-102',
        TestDescription: 'Transmission testing',
        TestStandardReferred: 'ISO-14001',
        ReportNo: 'RPT-2023-02',
        TestData: 'Data B',
        TestDocumentURL: null,
        ImagePath: '',
        ResponsibleSectionName: 'Transmission',
        UserName: 'Jane Smith',
        Remarks: 'Pending review',
        IsActive: false
      },
      {
  TractorNumber: 'TR-003',
  ProjectCode: 'PC-103',
  TestDescription: 'Brake efficiency test',
  TestStandardReferred: 'ISO-7637',
  ReportNo: 'RPT-2023-03',
  TestData: 'Data C',
  TestDocumentURL: 'report3.pdf',
  ImagePath: 'https://example.com/report3.pdf',
  ResponsibleSectionName: 'Brakes',
  UserName: 'Alex Johnson',
  Remarks: 'Approved',
  IsActive: true
},
{
  TractorNumber: 'TR-004',
  ProjectCode: 'PC-104',
  TestDescription: 'Hydraulic system check',
  TestStandardReferred: 'ISO-4413',
  ReportNo: 'RPT-2023-04',
  TestData: 'Data D',
  TestDocumentURL: 'report4.pdf',
  ImagePath: 'https://example.com/report4.pdf',
  ResponsibleSectionName: 'Hydraulics',
  UserName: 'Maria Gomez',
  Remarks: 'Under evaluation',
  IsActive: true
},
{
  TractorNumber: 'TR-005',
  ProjectCode: 'PC-105',
  TestDescription: 'Fuel consumption analysis',
  TestStandardReferred: 'ISO-50001',
  ReportNo: 'RPT-2023-05',
  TestData: 'Data E',
  TestDocumentURL: null,
  ImagePath: '',
  ResponsibleSectionName: 'Fuel Systems',
  UserName: 'Robert Brown',
  Remarks: 'Awaiting data',
  IsActive: false
},
{
  TractorNumber: 'TR-006',
  ProjectCode: 'PC-106',
  TestDescription: 'Emission testing',
  TestStandardReferred: 'EURO-6',
  ReportNo: 'RPT-2023-06',
  TestData: 'Data F',
  TestDocumentURL: 'report6.pdf',
  ImagePath: 'https://example.com/report6.pdf',
  ResponsibleSectionName: 'Environment',
  UserName: 'Emily Davis',
  Remarks: 'Compliant',
  IsActive: true
},
{
  TractorNumber: 'TR-007',
  ProjectCode: 'PC-107',
  TestDescription: 'Electrical system validation',
  TestStandardReferred: 'ISO-26262',
  ReportNo: 'RPT-2023-07',
  TestData: 'Data G',
  TestDocumentURL: '',
  ImagePath: '',
  ResponsibleSectionName: 'Electrical',
  UserName: 'David Clark',
  Remarks: 'Needs correction',
  IsActive: false
}
 
 
    ];
    this.totalSize = this.tableList.length;
  }
 
  getTests(): void {
    console.log('Fetching filtered tests', this.filterForm.value);
  }
 
  clearFilter(): void {
    this.filterForm.reset();
    this.getTests();
  }
 
  addtests(testItem: any): void {
    const dialogRef = this.dialog.open(AddtestsComponent, {
      width: '1080px',
      height: 'auto',
     
    });
 
    dialogRef.afterClosed().subscribe(result => {
      if (result && result !== 'Update') {
        if (testItem) {
          // Editing existing
          const index = this.tableList.indexOf(testItem);
          if (index > -1) {
            this.tableList[index] = result;
          }
        } else {
          // Adding new
          this.tableList.push(result);
        }
        this.totalSize = this.tableList.length;
      }
    });
  }
 
  // Confirmation(item: any): void {
  //   item.IsActive = !item.IsActive;
  //   console.log('Status toggled:', item);
  // }
 
  // deleteConfirmation(item: any): void {
  //   const index = this.tableList.indexOf(item);
  //   if (index > -1) {
  //     this.tableList.splice(index, 1);
  //     this.totalSize = this.tableList.length;
  //     console.log('Deleted Test:', item);
  //   }
  // }
 
  fnGetResponsibleSectionLeadsDD(respSectionId: number): void {
    console.log('Section selected:', respSectionId);
  }
 
  fnHandlePage(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log('Page changed:', event);
  }
    Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }
    deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
 
 
 
}
}
 