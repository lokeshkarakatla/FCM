import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { AddIssuesssComponent } from './add-issuesss/add-issuesss.component';
import { IssuesGridColumnsComponent } from './issues-grid-columns/issues-grid-columns.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { EditissuesComponent } from 'src/app/editissues/editissues.component';

// --- Kanban Interfaces ---
export type Status = 'Pending' | 'Allocated' | 'Progress' | 'Hold' | 'Cancelled' | 'Completed';

export interface Card {
  id: number;
  subject: string;
  LawFirm: string;
  createdBy: string;
  assignedTo: string;
  createdDate: string;
  dueDate: string;
  expedite: boolean;
  notes: { text: string; author: string; date: string }[];
  expanded: boolean;
  status: Status;
}

@Component({
  selector: 'app-testing-issues',
  templateUrl: './testing-issues.component.html',
  styleUrls: ['./testing-issues.component.scss']
})
export class TestingIssuesComponent implements OnInit {
  filterToggle: boolean = false;
  totalSize = 0;
  myGroup!: FormGroup;
  
  // Controls which view is currently shown (Table vs Kanban)
  isKanbanView: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

    // Initialize Kanban Data
    const savedData = localStorage.getItem('kanbanData');
    if (savedData) {
      this.cards = JSON.parse(savedData);
    } else {
      this.initializeKanbanData();
    }
  }

  // ==================== GRID DATA & LOGIC ====================
 tableList = [

    {

      projectCode: 'PRJ001',

      serial: 'SN1001',

      tractorId: 'TRX1234',

      issueDescription: 'Hydraulic failure during operation',

      failureHours: 15,

      updationHours: 18,

      hoursAfterUpdation: 3,

      implement: 'Plough',

      issueReportingDate: '2025-06-10',

      partDescription: 'Hydraulic Pump',

      partCode: 'HP-4578',

      photograph: 'https://example.com/photos/photo1.jpg',

      l1Rca: 'Seal leakage due to pressure build-up',

      concernedAcknowledgement: 'Acknowledged by Maintenance Lead',

      finalRca: 'Defective O-ring in hydraulic pump',

      rcaTargetDate: '2025-06-20',

      rcaDocument: 'https://example.com/docs/rca1.pdf',

      interimAction: 'Replace faulty O-ring',

      interimDocument: 'https://example.com/docs/interim1.pdf',

      interimTargetDate: '2025-06-15',

      permanentAction: 'Redesign pump to withstand higher pressure',

      permanentDocument: 'https://example.com/docs/permanent1.pdf',

      permanentTargetDate: '2025-07-01',

      currentStatus: 'Open',

      currentResponsibility: 'Hydraulic Team',

      targetDate: '2025-07-05',

      regularOrNew: 'Regular',

      orcStatus: 'Pending',

      responsibleSection: 'R&D',

      subGroup: 'Hydraulics',

      responsibleSectionLead: 'Anil Kumar',

      projectViLead: 'Ravi Sharma',

      category: 'Mechanical',

      failureEffect: 'Tractor could not operate',

      severity: 8,

      probability: 5,

      detection: 6,

      rpn: 240,

      agingSinceReported: 16,

      documentUpload: 'https://example.com/docs/upload1.pdf'

    },

    {

      projectCode: 'PRJ002',

      serial: 'SN1002',

      tractorId: 'TRX5678',

      issueDescription: 'Engine overheating on long runs',

      failureHours: 10,

      updationHours: 12,

      hoursAfterUpdation: 2,

      implement: 'Seeder',

      issueReportingDate: '2025-06-12',

      partDescription: 'Radiator Fan',

      partCode: 'RF-2233',

      photograph: 'https://example.com/photos/photo2.jpg',

      l1Rca: 'Fan not operating at full speed',

      concernedAcknowledgement: 'Acknowledged by Engine Lead',

      finalRca: 'Fan motor defective',

      rcaTargetDate: '2025-06-22',

      rcaDocument: 'https://example.com/docs/rca2.pdf',

      interimAction: 'Install backup fan',

      interimDocument: 'https://example.com/docs/interim2.pdf',

      interimTargetDate: '2025-06-18',

      permanentAction: 'Replace fan motor supplier',

      permanentDocument: 'https://example.com/docs/permanent2.pdf',

      permanentTargetDate: '2025-07-03',

      currentStatus: 'Closed',

      currentResponsibility: 'Cooling Systems Team',

      targetDate: '2025-07-04',

      regularOrNew: 'New',

      orcStatus: 'Completed',

      responsibleSection: 'Production',

      subGroup: 'Cooling',

      responsibleSectionLead: 'Meera Iyer',

      projectViLead: 'Karan Patel',

      category: 'Thermal',

      failureEffect: 'Machine auto-shutdown',

      severity: 7,

      probability: 4,

      detection: 7,

      rpn: 196,

      agingSinceReported: 14,

      documentUpload: 'https://example.com/docs/upload2.pdf'

    },

    {

      projectCode: 'PRJ001',

      serial: 'SN1001',

      tractorId: 'TRX1234',

      issueDescription: 'Engine overheating during long operations',

      failureHours: 12,

      updationHours: 15,

      hoursAfterUpdation: 3,

      implement: 'Plough',

      issueReportingDate: '2025-05-22',

      partDescription: 'Radiator',

      partCode: 'RAD-4501',

      photograph: 'https://example.com/photos/photo1.jpg',

      l1Rca: 'Coolant leakage in radiator fins',

      concernedAcknowledgement: 'Maintenance team verified',

      finalRca: 'Worn out radiator fins',

      rcaTargetDate: '2025-06-02',

      rcaDocument: 'https://example.com/docs/rca1.pdf',

      interimAction: 'Top-up coolant',

      interimDocument: 'https://example.com/docs/interim1.pdf',

      interimTargetDate: '2025-05-28',

      permanentAction: 'Replace radiator',

      permanentDocument: 'https://example.com/docs/permanent1.pdf',

      permanentTargetDate: '2025-06-10',

      currentStatus: 'Completed',

      currentResponsibility: 'Service Team',

      targetDate: '2025-06-12',

      regularOrNew: 'Regular',

      orcStatus: 'Closed',

      responsibleSection: 'Mechanical',

      subGroup: 'Cooling System',

      responsibleSectionLead: 'Ravi Mehta',

      projectViLead: 'Kiran Sharma',

      category: 'Mechanical',

      failureEffect: 'Engine shuts down unexpectedly',

      severity: 7,

      probability: 5,

      detection: 4,

      rpn: 140,

      agingSinceReported: 20,

      documentUpload: 'https://example.com/docs/upload1.pdf'

    },

    {

      projectCode: 'PRJ002',

      serial: 'SN1002',

      tractorId: 'TRX5678',

      issueDescription: 'Hydraulic pump failure',

      failureHours: 18,

      updationHours: 21,

      hoursAfterUpdation: 3,

      implement: 'Seeder',

      issueReportingDate: '2025-06-05',

      partDescription: 'Hydraulic Pump',

      partCode: 'HDP-7810',

      photograph: 'https://example.com/photos/photo2.jpg',

      l1Rca: 'Seal wear due to high pressure',

      concernedAcknowledgement: 'Hydraulics QA verified',

      finalRca: 'Poor quality seal material',

      rcaTargetDate: '2025-06-12',

      rcaDocument: 'https://example.com/docs/rca2.pdf',

      interimAction: 'Lower hydraulic pressure',

      interimDocument: 'https://example.com/docs/interim2.pdf',

      interimTargetDate: '2025-06-08',

      permanentAction: 'Upgrade to high-strength seals',

      permanentDocument: 'https://example.com/docs/permanent2.pdf',

      permanentTargetDate: '2025-06-25',

      currentStatus: 'In Progress',

      currentResponsibility: 'Hydraulics Team',

      targetDate: '2025-06-30',

      regularOrNew: 'Regular',

      orcStatus: 'Open',

      responsibleSection: 'Hydraulics',

      subGroup: 'Pump Systems',

      responsibleSectionLead: 'Neha Kulkarni',

      projectViLead: 'Vikram Rao',

      category: 'Hydraulic',

      failureEffect: 'Implements not lifting properly',

      severity: 8,

      probability: 6,

      detection: 3,

      rpn: 144,

      agingSinceReported: 10,

      documentUpload: 'https://example.com/docs/upload2.pdf'

    },

    {

      projectCode: 'PRJ003',

      serial: 'SN1003',

      tractorId: 'TRX9101',

      issueDescription: 'Transmission not shifting properly',

      failureHours: 20,

      updationHours: 23,

      hoursAfterUpdation: 3,

      implement: 'Rotavator',

      issueReportingDate: '2025-06-15',

      partDescription: 'Transmission Control Unit',

      partCode: 'TCU-8921',

      photograph: 'https://example.com/photos/photo3.jpg',

      l1Rca: 'Software bug in control logic',

      concernedAcknowledgement: 'Software QA verified',

      finalRca: 'Incorrect PID tuning',

      rcaTargetDate: '2025-06-25',

      rcaDocument: 'https://example.com/docs/rca3.pdf',

      interimAction: 'Patch software with temporary fix',

      interimDocument: 'https://example.com/docs/interim3.pdf',

      interimTargetDate: '2025-06-20',

      permanentAction: 'Revise PID parameters and test',

      permanentDocument: 'https://example.com/docs/permanent3.pdf',

      permanentTargetDate: '2025-07-05',

      currentStatus: 'Pending',

      currentResponsibility: 'Software Team',

      targetDate: '2025-07-10',

      regularOrNew: 'New',

      orcStatus: 'In Progress',

      responsibleSection: 'Electronics',

      subGroup: 'Controls',

      responsibleSectionLead: 'Divya Rathi',

      projectViLead: 'Arun Dev',

      category: 'Software',

      failureEffect: 'Jerky gear shifting',

      severity: 6,

      probability: 6,

      detection: 5,

      rpn: 180,

      agingSinceReported: 11,

      documentUpload: 'https://example.com/docs/upload3.pdf'

    },

    {

      projectCode: 'PRJ003',

      serial: 'SN1003',

      tractorId: 'TRX9101',

      issueDescription: 'Transmission not shifting properly',

      failureHours: 20,

      updationHours: 23,

      hoursAfterUpdation: 3,

      implement: 'Rotavator',

      issueReportingDate: '2025-06-15',

      partDescription: 'Transmission Control Unit',

      partCode: 'TCU-8921',

      photograph: 'https://example.com/photos/photo3.jpg',

      l1Rca: 'Software bug in control logic',

      concernedAcknowledgement: 'Software QA verified',

      finalRca: 'Incorrect PID tuning',

      rcaTargetDate: '2025-06-25',

      rcaDocument: 'https://example.com/docs/rca3.pdf',

      interimAction: 'Patch software with temporary fix',

      interimDocument: 'https://example.com/docs/interim3.pdf',

      interimTargetDate: '2025-06-20',

      permanentAction: 'Revise PID parameters and test',

      permanentDocument: 'https://example.com/docs/permanent3.pdf',

      permanentTargetDate: '2025-07-05',

      currentStatus: 'Pending',

      currentResponsibility: 'Software Team',

      targetDate: '2025-07-10',

      regularOrNew: 'New',

      orcStatus: 'In Progress',

      responsibleSection: 'Electronics',

      subGroup: 'Controls',

      responsibleSectionLead: 'Divya Rathi',

      projectViLead: 'Arun Dev',

      category: 'Software',

      failureEffect: 'Jerky gear shifting',

      severity: 6,

      probability: 6,

      detection: 5,

      rpn: 180,

      agingSinceReported: 11,

      documentUpload: 'https://example.com/docs/upload3.pdf'

    },

    {

      projectCode: 'PRJ003',

      serial: 'SN1003',

      tractorId: 'TRX9101',

      issueDescription: 'Transmission not shifting properly',

      failureHours: 20,

      updationHours: 23,

      hoursAfterUpdation: 3,

      implement: 'Rotavator',

      issueReportingDate: '2025-06-15',

      partDescription: 'Transmission Control Unit',

      partCode: 'TCU-8921',

      photograph: 'https://example.com/photos/photo3.jpg',

      l1Rca: 'Software bug in control logic',

      concernedAcknowledgement: 'Software QA verified',

      finalRca: 'Incorrect PID tuning',

      rcaTargetDate: '2025-06-25',

      rcaDocument: 'https://example.com/docs/rca3.pdf',

      interimAction: 'Patch software with temporary fix',

      interimDocument: 'https://example.com/docs/interim3.pdf',

      interimTargetDate: '2025-06-20',

      permanentAction: 'Revise PID parameters and test',

      permanentDocument: 'https://example.com/docs/permanent3.pdf',

      permanentTargetDate: '2025-07-05',

      currentStatus: 'Pending',

      currentResponsibility: 'Software Team',

      targetDate: '2025-07-10',

      regularOrNew: 'New',

      orcStatus: 'In Progress',

      responsibleSection: 'Electronics',

      subGroup: 'Controls',

      responsibleSectionLead: 'Divya Rathi',

      projectViLead: 'Arun Dev',

      category: 'Software',

      failureEffect: 'Jerky gear shifting',

      severity: 6,

      probability: 6,

      detection: 5,

      rpn: 180,

      agingSinceReported: 11,

      documentUpload: 'https://example.com/docs/upload3.pdf'

    },

    {

      projectCode: 'PRJ003',

      serial: 'SN1003',

      tractorId: 'TRX9101',

      issueDescription: 'Transmission not shifting properly',

      failureHours: 20,

      updationHours: 23,

      hoursAfterUpdation: 3,

      implement: 'Rotavator',

      issueReportingDate: '2025-06-15',

      partDescription: 'Transmission Control Unit',

      partCode: 'TCU-8921',

      photograph: 'https://example.com/photos/photo3.jpg',

      l1Rca: 'Software bug in control logic',

      concernedAcknowledgement: 'Software QA verified',

      finalRca: 'Incorrect PID tuning',

      rcaTargetDate: '2025-06-25',

      rcaDocument: 'https://example.com/docs/rca3.pdf',

      interimAction: 'Patch software with temporary fix',

      interimDocument: 'https://example.com/docs/interim3.pdf',

      interimTargetDate: '2025-06-20',

      permanentAction: 'Revise PID parameters and test',

      permanentDocument: 'https://example.com/docs/permanent3.pdf',

      permanentTargetDate: '2025-07-05',

      currentStatus: 'Pending',

      currentResponsibility: 'Software Team',

      targetDate: '2025-07-10',

      regularOrNew: 'New',

      orcStatus: 'In Progress',

      responsibleSection: 'Electronics',

      subGroup: 'Controls',

      responsibleSectionLead: 'Divya Rathi',

      projectViLead: 'Arun Dev',

      category: 'Software',

      failureEffect: 'Jerky gear shifting',

      severity: 6,

      probability: 6,

      detection: 5,

      rpn: 180,

      agingSinceReported: 11,

      documentUpload: 'https://example.com/docs/upload3.pdf'

    },

    {

      projectCode: 'PRJ003',

      serial: 'SN1003',

      tractorId: 'TRX9101',

      issueDescription: 'Transmission not shifting properly',

      failureHours: 20,

      updationHours: 23,

      hoursAfterUpdation: 3,

      implement: 'Rotavator',

      issueReportingDate: '2025-06-15',

      partDescription: 'Transmission Control Unit',

      partCode: 'TCU-8921',

      photograph: 'https://example.com/photos/photo3.jpg',

      l1Rca: 'Software bug in control logic',

      concernedAcknowledgement: 'Software QA verified',

      finalRca: 'Incorrect PID tuning',

      rcaTargetDate: '2025-06-25',

      rcaDocument: 'https://example.com/docs/rca3.pdf',

      interimAction: 'Patch software with temporary fix',

      interimDocument: 'https://example.com/docs/interim3.pdf',

      interimTargetDate: '2025-06-20',

      permanentAction: 'Revise PID parameters and test',

      permanentDocument: 'https://example.com/docs/permanent3.pdf',

      permanentTargetDate: '2025-07-05',

      currentStatus: 'Pending',

      currentResponsibility: 'Software Team',

      targetDate: '2025-07-10',

      regularOrNew: 'New',

      orcStatus: 'In Progress',

      responsibleSection: 'Electronics',

      subGroup: 'Controls',

      responsibleSectionLead: 'Divya Rathi',

      projectViLead: 'Arun Dev',

      category: 'Software',

      failureEffect: 'Jerky gear shifting',

      severity: 6,

      probability: 6,

      detection: 5,

      rpn: 180,

      agingSinceReported: 11,

      documentUpload: 'https://example.com/docs/upload3.pdf'

    },



  ];





  tractors = [ { TractorStatusId: 'ID-01' }, { TractorStatusId: 'ID-02' }, { TractorStatusId: 'ID-03' } ];
  TractorIdSections = [ { item_id: 1, item_text: 'ID-01' }, { item_id: 2, item_text: 'ID-02' }, { item_id: 3, item_text: 'ID-03' } ];
  responsibleSections = [ { item_id: 1, item_text: 'Front Axle Bracket Area' }, { item_id: 2, item_text: 'Gearbox' }, { item_id: 3, item_text: 'Cooling Package' }, { item_id: 4, item_text: 'Air Intake System' } ];
  ORCStatuses = [ { item_id: 1, item_text: 'O' }, { item_id: 2, item_text: 'R1' }, { item_id: 3, item_text: 'R2' }, { item_id: 4, item_text: 'C' } ];
  Probability = [ { item_id: 1, item_text: '1' }, { item_id: 2, item_text: '2' }, { item_id: 3, item_text: '3' }, { item_id: 4, item_text: '4' }, { item_id: 5, item_text: '5' }, { item_id: 6, item_text: '6' }, { item_id: 7, item_text: '7' }, { item_id: 8, item_text: '8' }, { item_id: 9, item_text: '9' }, { item_id: 10, item_text: '10' } ];
  sortOrder = [ { item_id: 1, item_text: 'ASC' }, { item_id: 2, item_text: 'DESC' } ];
  IsNew = [ { item_id: 1, item_text: 'New' }, { item_id: 2, item_text: 'Regular' } ];
  ScoreMatrix = [ { item_id: 1, item_text: 'Assembly' }, { item_id: 2, item_text: 'Service' }, { item_id: 3, item_text: 'Performance' }, { item_id: 4, item_text: 'Functional' } ];
  resSectionFilterLeads = [ { UserId: 'U001', UserName: 'Lead A' }, { UserId: 'U002', UserName: 'Lead B' }, { UserId: 'U003', UserName: 'Lead C' } ];
  FilterSubgroup = [ { SubGroupId: 'SG001', SubGroupName: 'Subgroup 1' }, { SubGroupId: 'SG002', SubGroupName: 'Subgroup 2' }, { SubGroupId: 'SG003', SubGroupName: 'Subgroup 3' } ];
  scorematrix = [ { ScoreMatrixId: 'FE001', ScoreMatrixName: 'High Impact' }, { ScoreMatrixId: 'FE002', ScoreMatrixName: 'Medium Impact' }, { ScoreMatrixId: 'FE003', ScoreMatrixName: 'Low Impact' } ];
  categories = [ { CategoryId: 'C001', CategoryName: 'Detection 1' }, { CategoryId: 'C002', CategoryName: 'Detection 2' }, { CategoryId: 'C003', CategoryName: 'Detection 3' } ];

  // Grid Controls
  addTests(applicant: any) {
    let dialogRef = this.dialog.open(EditissuesComponent, {
      height: 'auto',
      width: '5000px',
    });
  }

  public addIssues(id: any) {
    let dialogRef = this.dialog.open(AddIssuesssComponent, {
      data: id,
      height: 'auto',
      width: '5000px',
    });
  }

  public openGrid(id: any) {
    let dialogRef = this.dialog.open(IssuesGridColumnsComponent, {
      data: id,
      height: 'auto',
      width: '800px',
    });
  }

  deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
  }

  scrollRight() {
    const container = document.getElementById('grid-table-container');
    if (container) { container.scrollBy({ left: 300, behavior: 'smooth' }); }
  }

  scrollLeft() {
    const container = document.getElementById('grid-table-container');
    if (container) { container.scrollBy({ left: -300, behavior: 'smooth' }); }
  }

  clearFilter() {
    this.myGroup.reset();
  }

  go() {
    // search trigger
  }

  // ==================== KANBAN DATA & LOGIC ====================
  data = [
    { subject: 'Global fleet of connected vehicles', distributor: 'Mahindra',   Lead: 'Ravi',  status: 'Pending', TargetDate: '2026-04-25', FailureDate: '2026-04-20' },
    { subject: 'Engine Overheating',                 distributor: 'Tata Motors', Lead: 'Sneha', status: 'Pending', TargetDate: '2026-04-22', FailureDate: '2026-04-18' },
    { subject: 'Update Application Dependencies',    distributor: 'Infosys',     Lead: 'Kiran', status: 'Hold',    TargetDate: '2026-04-30', FailureDate: '2026-04-21' },
    { subject: 'Verify DLL Versions',                distributor: 'Tesla',       Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Bumper Issue',                       distributor: 'Tesla',       Lead: 'Arjun', status: 'Hold',    TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing A',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Pending', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing B',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Hold',    TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing C',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Process', TargetDate: '2026-04-15', FailureDate: '2026-04-10' },
    { subject: 'Error Testing D',                    distributor: 'Tesla',       Lead: 'Arjun', status: 'Closed',  TargetDate: '2026-04-15', FailureDate: '2026-04-10' }
  ];

  lists: Status[] = ['Pending', 'Allocated', 'Progress', 'Hold', 'Cancelled', 'Completed'];

  cards: Record<Status, Card[]> = {
    Pending: [], Allocated: [], Progress: [],
    Hold: [], Cancelled: [], Completed: []
  };

  private statusMap: Record<string, Status> = {
    'Pending':   'Pending',
    'Allocated': 'Allocated',
    'Process':   'Progress',
    'Progress':  'Progress',
    'Hold':      'Hold',
    'Cancelled': 'Cancelled',
    'Closed':    'Completed',
    'Completed': 'Completed'
  };

  initializeKanbanData(): void {
    const grouped: Record<Status, Card[]> = {
      Pending: [], Allocated: [], Progress: [],
      Hold: [], Cancelled: [], Completed: []
    };

    this.data.forEach((item, index) => {
      const status: Status = this.statusMap[item.status] ?? 'Pending';
      grouped[status].push({
        id: index + 1,
        subject: item.subject,
        LawFirm: item.distributor,
        createdBy: item.Lead,
        assignedTo: item.Lead,
        createdDate: item.FailureDate,
        dueDate: item.TargetDate,
        expedite: false,
        notes: [],
        expanded: false,
        status
      });
    });

    this.cards = grouped;
    localStorage.setItem('kanbanData', JSON.stringify(this.cards));
  }

  drop(event: CdkDragDrop<Card[]>, targetList: Status): void {
    const previousList = event.previousContainer.id as Status;
    const currentList  = event.container.id as Status;

    if (previousList !== currentList) {
      transferArrayItem(
        this.cards[previousList],
        this.cards[currentList],
        event.previousIndex,
        event.currentIndex
      );
      this.cards[currentList][event.currentIndex].status = currentList;
    } else {
      moveItemInArray(this.cards[targetList], event.previousIndex, event.currentIndex);
    }

    this.cards = { ...this.cards };
    localStorage.setItem('kanbanData', JSON.stringify(this.cards));
  }

  toggleCard(card: Card): void {
    card.expanded = !card.expanded;
  }

  getColor(status: string): string {
    const colors: Record<string, string> = {
      'Pending':   '#e24b4a',
      'Allocated': '#ef9f27',
      'Progress':  '#378add',
      'Hold':      '#f0995b',
      'Cancelled': '#888780',
      'Completed': '#639922'
    };
    return colors[status] ?? '#888780';
  }

  getCardClass(status: string): string {
    const classes: Record<string, string> = {
      'Pending':   'pending-card',
      'Allocated': 'allocated-card',
      'Progress':  'progress-card',
      'Hold':      'hold-card',
      'Cancelled': 'cancelled-card',
      'Completed': 'completed-card'
    };
    return classes[status] ?? 'default-card';
  }

  trackByCard(index: number, item: Card): number {
    return item.id;
  }
}