import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EditissuesComponent } from 'src/app/editissues/editissues.component';
import { AddIssuesssComponent } from 'src/app/pages/testing/testing-issues/add-issuesss/add-issuesss.component';
import { IssuesGridColumnsComponent } from 'src/app/pages/testing/testing-issues/issues-grid-columns/issues-grid-columns.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { ActionDescRemarksComponent } from './action-desc-remarks/action-desc-remarks.component';
import { ProcessActionsGridComponent } from './process-actions-grid/process-actions-grid.component';
import { ProcessActionsEditComponent } from './process-actions-edit/process-actions-edit.component';
import { ProcessDocPopComponent } from './process-doc-pop/process-doc-pop.component';

@Component({
  selector: 'app-paudits-actions',
  templateUrl: './paudits-actions.component.html',
  styleUrls: ['./paudits-actions.component.scss']
})
export class PauditsActionsComponent implements OnInit {
go() {
throw new Error('Method not implemented.');
}
clearFilter() {
throw new Error('Method not implemented.');
}

  // // ← Use ViewChild instead of getElementById (more reliable in Angular)
  // @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  // totalSize = 0;
  // currentPage = 0;
  // pageSize = 5;
  // pagedData: any[] = [];

  // tableData = [
  //   { status: 'WIP', resolved: true, docs: 2, photos: 2, actionSubject: 'Supplier Risk Assessment', supplierName: 'Global Tech Supplies', actionType: 'Important', auditRef: 'AT12345', processArea: 'Quality Control', processCategory: 'Manufacturing', logDate: '01-Jan-2024', dueDate: '15-Jan-2024', completion: '12-Jan-2024' },
  //   { status: 'WIP', resolved: true, docs: 2, photos: 2, actionSubject: 'Product Recall Review', supplierName: 'Ace Components', actionType: 'Important', auditRef: 'AT67890', processArea: 'Logistics', processCategory: 'Distribution', logDate: '10-Feb-2024', dueDate: '20-Feb-2024', completion: '19-Feb-2024' },
  //   { status: 'WIP', resolved: false, docs: 2, photos: 2, actionSubject: 'Supplier Certification Audit', supplierName: 'Prime Manufacturing', actionType: 'Important', auditRef: 'AT54321', processArea: 'Compliance', processCategory: 'Certification', logDate: '05-Mar-2024', dueDate: '15-Mar-2024', completion: '' },
  //   { status: 'WIP', resolved: false, docs: 2, photos: 2, actionSubject: 'Supplier Risk Assessment', supplierName: 'Global Tech Supplies', actionType: 'Important', auditRef: 'AT12345', processArea: 'Quality Control', processCategory: 'Manufacturing', logDate: '01-Jan-2024', dueDate: '15-Jan-2024', completion: '12-Jan-2024' },
  //   { status: 'WIP', resolved: true, docs: 2, photos: 2, actionSubject: 'Product Recall Review', supplierName: 'Ace Components', actionType: 'Important', auditRef: 'AT67890', processArea: 'Logistics', processCategory: 'Distribution', logDate: '10-Feb-2024', dueDate: '20-Feb-2024', completion: '19-Feb-2024' },
  // ];

  // ngOnInit(): void {
  //   this.totalSize = this.tableData.length;
  //   this.updatePage();
  // }

  // onPageChange(event: PageEvent): void {
  //   this.currentPage = event.pageIndex;
  //   this.pageSize = event.pageSize;
  //   this.updatePage();
  // }

  // private updatePage(): void {
  //   const start = this.currentPage * this.pageSize;
  //   this.pagedData = this.tableData.slice(start, start + this.pageSize);
  // }

  // // ← Now uses ViewChild reference — guaranteed to find the element
  // scrollRight(): void {
  //   if (this.scrollContainer?.nativeElement) {
  //     this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  //   }
  // }

  // scrollLeft(): void {
  //   if (this.scrollContainer?.nativeElement) {
  //     this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  //   }
  // }

  // addchecklistaudit(item: any): void { }
  // deleteConfirmation(): void { }
  // opendashboard(): void { }



   filterToggle: boolean = false;
    totalSize = 0;
    myGroup!: FormGroup;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    someElementRef: any;
    constructor(public dialog: MatDialog) { }
  
    ngOnInit(): void {
      this.myGroup = new FormGroup({
        firstName: new FormControl(''),
        Keyword: new FormControl(''),
        TractorIdSections: new FormControl(''),
        ResponsibleSections: new FormControl(''),
        ResponsibleSectionLeadId: new FormControl(''),
        SubGroupId: new FormControl(''),
        ORCStatuses: new FormControl(''),
        IsNew: new FormControl(''),
        ScoreMatrix: new FormControl(''),
        Probability: new FormControl(''),
        PartCode: new FormControl(''),
        CategoryId: new FormControl(''),
        sortOrder: new FormControl('')
      });
    }
  
  
  
tableList = [
  {
    status: 'WIP',
    resolved: true,
    docs: 2,
    photos: 2,
    actionSubject: 'Supplier Risk Assessment',
    supplierName: 'Global Tech Supplies',
    actionType: 'Containment',
    auditReference: 'AT12345',
    processArea: 'Quality Control',
    processCategory: 'Manufacturing',
    description: 'Found variations in raw material quality.',
    supplierRemarks: 'Awaiting new batch testing.',
    logDate: '01-Jan-2024',
    dueDate: '15-Jan-2024',
    completion: '12-Jan-2024',
    reference: '25416',
    delayInDays: 3,
    severity: 8,
    occurrence: 5,
    detection: 2,
    riskRating: 'Medium',
    rating: 4,
    pdcaStatus: 'Plan',
    capaActionType: 'Containment'
  },
  {
    status: 'Open',
    resolved: false,
    docs: 2,
    photos: 2,
    actionSubject: 'Product Recall Review',
    supplierName: 'Ace Components',
    actionType: 'Corrective',
    auditReference: 'AT67890',
    processArea: 'Logistics',
    processCategory: 'Distribution',
    description: 'Packaging defect causing transit damage.',
    supplierRemarks: 'Investigating packaging line.',
    logDate: '10-Feb-2024',
    dueDate: '20-Feb-2024',
    completion: '19-Feb-2024',
    reference: '25419',
    delayInDays: 2,
    severity: 9,
    occurrence: 8,
    detection: 8,
    riskRating: 'High',
    rating: 2,
    pdcaStatus: 'Do',
    capaActionType: 'Corrective'
  },
  {
    status: 'WIP',
    resolved: false,
    docs: 2,
    photos: 2,
    actionSubject: 'Supplier Certification Audit',
    supplierName: 'Prime Manufacturing',
    actionType: 'Preventive',
    auditReference: 'AT34321',
    processArea: 'Compliance',
    processCategory: 'Certification',
    description: 'ISO certification expired.',
    supplierRemarks: 'Audit scheduled for next week.',
    logDate: '05-Mar-2024',
    dueDate: '15-Mar-2024',
    completion: null,
    reference: '25417',
    delayInDays: 4,
    severity: 4,
    occurrence: 2,
    detection: 1,
    riskRating: 'Low',
    rating: 5,
    pdcaStatus: 'Check',
    capaActionType: 'Preventive'
  },
  {
    status: 'In Progress',
    resolved: false,
    docs: 2,
    photos: 2,
    actionSubject: 'Supplier Risk Assessment',
    supplierName: 'Global Tech Supplies',
    actionType: 'Corrective',
    auditReference: 'AT12345',
    processArea: 'Quality Control',
    processCategory: 'Manufacturing',
    description: 'Calibration error on primary scales.',
    supplierRemarks: 'Vendor notified for recalibration.',
    logDate: '01-Jan-2024',
    dueDate: '15-Jan-2024',
    completion: '12-Jan-2024',
    reference: '25438',
    delayInDays: 6,
    severity: 7,
    occurrence: 6,
    detection: 7,
    riskRating: 'High',
    rating: 3,
    pdcaStatus: 'Act',
    capaActionType: 'Corrective'
  },
  {
    status: 'Completed',
    resolved: true,
    docs: 2,
    photos: 2,
    actionSubject: 'Product Recall Review',
    supplierName: 'Ace Components',
    actionType: 'Containment',
    auditReference: 'AT67890',
    processArea: 'Logistics',
    processCategory: 'Distribution',
    description: 'Label misprint.',
    supplierRemarks: 'Labels reprinted and replaced.',
    logDate: '10-Feb-2024',
    dueDate: '20-Feb-2024',
    completion: '19-Feb-2024',
    reference: '25419',
    delayInDays: null,
    severity: 3,
    occurrence: 3,
    detection: 2,
    riskRating: 'Low',
    rating: 5,
    pdcaStatus: 'Closed',
    capaActionType: 'Containment'
  },
  {
    status: 'WIP',
    resolved: false,
    docs: 2,
    photos: 2,
    actionSubject: 'Supplier Certification Audit',
    supplierName: 'Prime Manufacturing',
    actionType: 'Preventive',
    auditReference: 'AT34321',
    processArea: 'Compliance',
    processCategory: 'Certification',
    description: 'Missing worker safety documentation.',
    supplierRemarks: 'Documents currently being compiled.',
    logDate: '05-Mar-2024',
    dueDate: '15-Mar-2024',
    completion: null,
    reference: '25417',
    delayInDays: null,
    severity: 6,
    occurrence: 5,
    detection: 4,
    riskRating: 'Medium',
    rating: 3,
    pdcaStatus: 'Plan',
    capaActionType: 'Preventive'
  }
];
  
    
  
  
  
  
  
    addTests(applicant: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(EditissuesComponent, {
        // data: id,
        height: 'auto',
        width: '5000px',
      });
      // dialogRef.afterClosed().subscribe((data: any) => {});
    }
    // deleteConfirmation(applicant: any) {
    //   console.log('Delete:', applicant);
    // }
  
    imageSource1() {
     this.dialog.open(ActionDescRemarksComponent, {
        width: '500px',
        height: 'auto',
      });
    }
  
    public addIssues(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddIssuesssComponent, {
        data: id,
        height: 'auto',
        width: '500px',
      });
      // dialogRef.afterClosed().subscribe((data: any) => {});
    }
  
    public openGrid(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(IssuesGridColumnsComponent, {
        data: id,
        height: 'auto',
        width: '800px',
      });
      // dialogRef.afterClosed().subscribe((data: any) => {});
    }
    deleteConfirmation(item: any) {
      let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: 'auto',
        data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
      });
  
    }
    tractors = [
      { TractorStatusId: 'ID-01' },
      { TractorStatusId: 'ID-02' },
      { TractorStatusId: 'ID-03' }
    ];
    TractorIdSections = [
      { item_id: 1, item_text: 'ID-01' },
      { item_id: 2, item_text: 'ID-02' },
      { item_id: 3, item_text: 'ID-03' },
    ];
    responsibleSections = [
      { item_id: 1, item_text: 'Front Axle Bracket Area' },
      { item_id: 2, item_text: 'Gearbox' },
      { item_id: 3, item_text: 'Cooling Package' },
      { item_id: 4, item_text: 'Air Intake System' },
    ];
    ORCStatuses = [
      { item_id: 1, item_text: 'O' },
      { item_id: 2, item_text: 'R1' },
      { item_id: 3, item_text: 'R2' },
      { item_id: 4, item_text: 'C' },
    ];
    Probability = [
      { item_id: 1, item_text: '1' },
      { item_id: 2, item_text: '2' },
      { item_id: 3, item_text: '3' },
      { item_id: 4, item_text: '4' },
      { item_id: 5, item_text: '5' },
      { item_id: 6, item_text: '6' },
      { item_id: 7, item_text: '7' },
      { item_id: 8, item_text: '8' },
      { item_id: 9, item_text: '9' },
      { item_id: 10, item_text: '10' },
  
    ];
    sortOrder = [
      { item_id: 1, item_text: 'ASC' },
      { item_id: 2, item_text: 'DESC' },
  
    ];
    IsNew = [
      { item_id: 1, item_text: 'New' },
      { item_id: 2, item_text: 'Regular' },
  
    ];
    ScoreMatrix = [
      { item_id: 1, item_text: 'Assembly' },
      { item_id: 2, item_text: 'Service' },
      { item_id: 3, item_text: 'Performance' },
      { item_id: 4, item_text: 'Functional' },
  
  
  
    ];
  
    scrollRight() {
      const container = document.getElementById('grid-table-container');
      if (container) {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  
    scrollLeft() {
      const container = document.getElementById('grid-table-container');
      if (container) {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      }
    }
  
    // Component .ts file
    ;
  
    resSectionFilterLeads = [
      { UserId: 'U001', UserName: 'Lead A' },
      { UserId: 'U002', UserName: 'Lead B' },
      { UserId: 'U003', UserName: 'Lead C' }
    ];
  
    FilterSubgroup = [
      { SubGroupId: 'SG001', SubGroupName: 'Subgroup 1' },
      { SubGroupId: 'SG002', SubGroupName: 'Subgroup 2' },
      { SubGroupId: 'SG003', SubGroupName: 'Subgroup 3' }
    ];
  
  
  
    scorematrix = [
      { ScoreMatrixId: 'FE001', ScoreMatrixName: 'High Impact' },
      { ScoreMatrixId: 'FE002', ScoreMatrixName: 'Medium Impact' },
      { ScoreMatrixId: 'FE003', ScoreMatrixName: 'Low Impact' }
    ];
  
    categories = [
      { CategoryId: 'C001', CategoryName: 'Detection 1' },
      { CategoryId: 'C002', CategoryName: 'Detection 2' },
      { CategoryId: 'C003', CategoryName: 'Detection 3' }
    ];
  
processgrid()
{
  this.dialog.open(ProcessActionsGridComponent, {
      width: '650px',
      height: 'auto',
        maxHeight: '90vh',
          panelClass: 'no-scroll-dialog' 
})}


editrow()
{
  this.dialog.open(ProcessActionsEditComponent, {
      width: '650px',
      height: 'auto',
        maxHeight: '90vh',
          panelClass: 'no-scroll-dialog' 
})}


docsPhoto()
{
  this.dialog.open(ProcessDocPopComponent, {
      width: '650px',
      height: 'auto',
        maxHeight: '90vh',
          panelClass: 'no-scroll-dialog' 
})}


}