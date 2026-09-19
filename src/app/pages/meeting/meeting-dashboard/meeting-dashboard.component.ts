import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NextReviewDialogComponent } from '../next-review-dialog/next-review-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddAgendaDialogComponent } from '../dialogs/add-agenda-dialog/add-agenda-dialog.component';
import { AddObservationDialogComponent } from '../dialogs/add-observation-dialog/add-observation-dialog.component';
import { MeetingNotesDialogComponent } from '../dialogs/meeting-notes-dialog/meeting-notes-dialog.component';
import { MeetingRemarksDialogComponent } from '../dialogs/meeting-remarks-dialog/meeting-remarks-dialog.component';
import { OpenCapaDialogComponent } from '../dialogs/open-capa-dialog/open-capa-dialog.component';
import { AddItemCapaDialogComponent } from '../dialogs/add-item-capa-dialog/add-item-capa-dialog.component';

export interface AgendaItem {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

export interface MeetingComplaint {
  id: number;
  ref: string;
  subject: string;
  description: string;
  category: string;
  severity: 'High' | 'Moderate' | 'Low';
  status: 'Pending' | 'Overdue';
  chronic: boolean;
  demerit: number;
  notesCount: number;
  auditeeCompleted: boolean;
  auditorCompleted: boolean;
  docsCount: number;
  capaCount: number;
  initiated: boolean;
  resolved: boolean;
  tat: string;
  dateLogged: string;
  dateResolved: string;
  nextReviewDate?: string;
  reviewed?: boolean;
}

export interface MeetingCapa {
  id: number;
  subject: string;
  category: string;
  function: string;
  observationRef: string;
  severity: 'High' | 'Medium' | 'Low';
  dateInitiated: string;
  dateDue: string;
  dateResolved: string;
  resolved: boolean;
  tat: string;
}

@Component({
  selector: 'app-meeting-dashboard',
  templateUrl: './meeting-dashboard.component.html',
  styleUrls: ['./meeting-dashboard.component.scss']
})
export class MeetingDashboardComponent implements OnInit {

  // Meeting Metadata
  meetingRef: string = 'MEET-2025/10/02';
  meetingDate: string = '10-10-2024';
  meetingTime: string = '10:00 AM';
  duration: string = '55 min';
  attendance: string = '5/7';
  isClosed: boolean = false;

  // Active top tab: 'agenda' | 'observations' | 'capa' | 'closure'
  activeTab: 'agenda' | 'observations' | 'capa' | 'closure' = 'agenda';

  // Sub-filters on Observations
  // STATUS: ALL(8), Pending(7), Overdue(1)
  selectedStatus: 'ALL' | 'Pending' | 'Overdue' = 'ALL';

  // SEVERITY: High(4), Moderate(2), Low(2)
  selectedSeverity: 'ALL' | 'High' | 'Moderate' | 'Low' = 'High';

  // Left folder navigation
  selectedFolder: string = 'All';
  systemFolders = [
    {
      name: 'Formulations',
      count: 23,
      isOpen: true,
      children: [
        { name: 'Quality Oversight', count: 8 },
        { name: 'Quality Check', count: 4 },
        { name: 'Quality Enhancement', count: 3 }
      ]
    },
    { name: 'API Units', count: 11, isOpen: false },
    { name: 'Laboratory Systems', count: 4, isOpen: false },
    { name: 'Facility & Equipment Systems', count: 18, isOpen: false }
  ];

  // Concluding remarks
  concludingRemarks: string = 'All high-priority complaints reviewed. CAPA assigned to QA for supplier containment. Target completion within 10 days.';

  // Agenda List (matches Image from New folder)
  agendaList: AgendaItem[] = [
    {
      id: 1,
      name: 'Safety Audit',
      description: 'Fire extinguisher & emergency exits check in assembly line',
      status: true
    },
    {
      id: 2,
      name: 'Quality Audit',
      description: 'Incoming raw material quality inspection & Certificate of Analysis validation',
      status: false
    },
    {
      id: 3,
      name: 'Hygiene & Cleanliness Audit',
      description: 'Shop floor, material packaging area & staging zone inspection',
      status: true
    },
    {
      id: 4,
      name: 'Process Compliance Audit',
      description: 'Critical parameter verification and torque tool calibration review',
      status: false
    }
  ];

  // Complaints / Observations Data
  complaintsData: MeetingComplaint[] = [
    {
      id: 1,
      ref: 'NO-765',
      subject: 'Component Misalignment',
      description: 'Parts are not properly aligned before being fastened, creating a risk of structural weakness or functional failure.',
      category: 'Formulations',
      severity: 'High',
      status: 'Pending',
      chronic: false,
      demerit: 30,
      notesCount: 2,
      auditeeCompleted: true,
      auditorCompleted: true,
      docsCount: 1,
      capaCount: 1,
      initiated: true,
      resolved: true,
      tat: '8 Days',
      dateLogged: '2026-08-02',
      dateResolved: '2026-08-10',
      reviewed: true,
      nextReviewDate: '2026-08-18'
    },
    {
      id: 2,
      ref: 'NO-954',
      subject: 'Foreign Contamination',
      description: 'Traces of foreign particulate matter were discovered inside the material drums during routine batch sampling.',
      category: 'Formulations',
      severity: 'High',
      status: 'Pending',
      chronic: true,
      demerit: 30,
      notesCount: 1,
      auditeeCompleted: false,
      auditorCompleted: false,
      docsCount: 0,
      capaCount: 1,
      initiated: false,
      resolved: false,
      tat: '-',
      dateLogged: '2026-08-05',
      dateResolved: '-',
      reviewed: false
    },
    {
      id: 3,
      ref: 'NO-356',
      subject: 'Missing COA',
      description: 'The shipment arrived from the supplier without the mandatory Certificate of Analysis documentation.',
      category: 'API Units',
      severity: 'High',
      status: 'Pending',
      chronic: false,
      demerit: 10,
      notesCount: 1,
      auditeeCompleted: false,
      auditorCompleted: false,
      docsCount: 0,
      capaCount: 0,
      initiated: false,
      resolved: false,
      tat: '-',
      dateLogged: '2026-08-06',
      dateResolved: '-',
      reviewed: false
    },
    {
      id: 4,
      ref: 'NO-912',
      subject: 'Damaged Packaging',
      description: 'Raw material packaging was found torn or crushed upon delivery, increasing the risk of contamination.',
      category: 'API Units',
      severity: 'High',
      status: 'Overdue',
      chronic: true,
      demerit: 10,
      notesCount: 2,
      auditeeCompleted: false,
      auditorCompleted: false,
      docsCount: 0,
      capaCount: 0,
      initiated: false,
      resolved: false,
      tat: '-',
      dateLogged: '2026-07-28',
      dateResolved: '-',
      reviewed: false
    },
    {
      id: 5,
      ref: 'NO-441',
      subject: 'Sensor Calibration Drift',
      description: 'Optical alignment sensors showing intermittent +/- 2mm offset deviation during continuous cycle run.',
      category: 'Laboratory Systems',
      severity: 'Moderate',
      status: 'Pending',
      chronic: false,
      demerit: 15,
      notesCount: 1,
      auditeeCompleted: true,
      auditorCompleted: false,
      docsCount: 1,
      capaCount: 1,
      initiated: true,
      resolved: false,
      tat: '-',
      dateLogged: '2026-08-08',
      dateResolved: '-',
      reviewed: false
    },
    {
      id: 6,
      ref: 'NO-518',
      subject: 'Hydraulic Pressure Fluctuation',
      description: 'Secondary line pump pressure fluctuating outside 120-140 bar tolerance band during shift handover.',
      category: 'Facility & Equipment Systems',
      severity: 'Moderate',
      status: 'Pending',
      chronic: false,
      demerit: 15,
      notesCount: 0,
      auditeeCompleted: false,
      auditorCompleted: false,
      docsCount: 0,
      capaCount: 0,
      initiated: false,
      resolved: false,
      tat: '-',
      dateLogged: '2026-08-09',
      dateResolved: '-',
      reviewed: false
    },
    {
      id: 7,
      ref: 'NO-215',
      subject: 'Label Barcode Readability',
      description: 'Thermal transfer printed barcodes showing 4% scanner rejection rate at warehouse inbound gate.',
      category: 'Formulations',
      severity: 'Low',
      status: 'Pending',
      chronic: false,
      demerit: 5,
      notesCount: 1,
      auditeeCompleted: true,
      auditorCompleted: true,
      docsCount: 2,
      capaCount: 0,
      initiated: true,
      resolved: true,
      tat: '2 Days',
      dateLogged: '2026-08-04',
      dateResolved: '2026-08-06',
      reviewed: true,
      nextReviewDate: '2026-08-20'
    },
    {
      id: 8,
      ref: 'NO-102',
      subject: 'Storage Bin Dust Cover Defect',
      description: 'Dust cover clips on tier-3 storage bins showing cosmetic micro-cracks without functional impairment.',
      category: 'Facility & Equipment Systems',
      severity: 'Low',
      status: 'Pending',
      chronic: false,
      demerit: 5,
      notesCount: 0,
      auditeeCompleted: false,
      auditorCompleted: false,
      docsCount: 0,
      capaCount: 0,
      initiated: false,
      resolved: false,
      tat: '-',
      dateLogged: '2026-08-10',
      dateResolved: '-',
      reviewed: false
    }
  ];

  // CAPA Data
  capaList: MeetingCapa[] = [
    {
      id: 1,
      subject: 'Revise Incoming Material Checklist',
      category: 'Quality Assurance',
      function: 'Raw Material Inspection',
      observationRef: 'NO-277',
      severity: 'Low',
      dateInitiated: '2026-08-01',
      dateDue: '2026-08-11',
      dateResolved: 'N/A',
      resolved: false,
      tat: '10 Days'
    },
    {
      id: 2,
      subject: 'Conduct Vendor Quality Audit',
      category: 'Production Operations',
      function: 'Assembly Line Inspection',
      observationRef: 'NO-765',
      severity: 'Medium',
      dateInitiated: '2026-08-04',
      dateDue: '2026-08-12',
      dateResolved: 'N/A',
      resolved: false,
      tat: '8 Days'
    },
    {
      id: 3,
      subject: 'Implement Backup Scanning Protocol',
      category: 'Quality Assurance',
      function: 'Raw Material Inspection',
      observationRef: 'NO-954',
      severity: 'High',
      dateInitiated: '2026-08-06',
      dateDue: '2026-08-12',
      dateResolved: 'N/A',
      resolved: false,
      tat: '6 Days'
    },
    {
      id: 4,
      subject: 'Update Supplier Labeling Standards',
      category: 'Quality Assurance',
      function: 'Raw Material Inspection',
      observationRef: 'NO-696',
      severity: 'High',
      dateInitiated: '2026-08-04',
      dateDue: '2026-08-11',
      dateResolved: '2026-08-14',
      resolved: true,
      tat: '10 Days'
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['meetingRef']) {
        this.meetingRef = params['meetingRef'];
      }
      if (params['tab']) {
        this.activeTab = params['tab'];
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/app/complaints/meetings']);
  }

  // ── Agenda Actions ──
  openAddAgenda(item?: AgendaItem): void {
    const dialogRef = this.dialog.open(AddAgendaDialogComponent, {
      width: '600px',
      data: item || null
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (item) {
          item.name = res.name;
          item.description = res.description;
        } else {
          this.agendaList.unshift({
            id: this.agendaList.length + 1,
            name: res.name,
            description: res.description,
            status: true
          });
        }
      }
    });
  }

  deleteAgenda(item: AgendaItem): void {
    this.agendaList = this.agendaList.filter(a => a !== item);
  }

  toggleAgendaStatus(item: AgendaItem): void {
    item.status = !item.status;
  }

  // ── Observation Filtering ──
  get filteredComplaints(): MeetingComplaint[] {
    return this.complaintsData.filter(item => {
      // Status filter
      if (this.selectedStatus !== 'ALL' && item.status !== this.selectedStatus) {
        return false;
      }
      // Severity filter
      if (this.selectedSeverity !== 'ALL' && item.severity !== this.selectedSeverity) {
        return false;
      }
      // Folder filter
      if (this.selectedFolder !== 'All' && item.category !== this.selectedFolder) {
        return false;
      }
      return true;
    });
  }

  getStatusCount(status: 'ALL' | 'Pending' | 'Overdue'): number {
    if (status === 'ALL') return this.complaintsData.length;
    return this.complaintsData.filter(c => c.status === status).length;
  }

  getSeverityCount(severity: 'High' | 'Moderate' | 'Low'): number {
    return this.complaintsData.filter(c => c.severity === severity).length;
  }

  toggleFolder(folder: any): void {
    folder.isOpen = !folder.isOpen;
  }

  selectFolder(name: string): void {
    if (this.selectedFolder === name) {
      this.selectedFolder = 'All';
    } else {
      this.selectedFolder = name;
    }
  }

  // ── Observation Modals ──
  openAddObservation(item?: MeetingComplaint): void {
    const dialogRef = this.dialog.open(AddObservationDialogComponent, {
      width: '600px',
      data: item || null
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        if (item) {
          Object.assign(item, res);
        } else {
          this.complaintsData.unshift({
            id: this.complaintsData.length + 1,
            ref: res.ref,
            subject: res.subject,
            description: res.description,
            category: res.category,
            severity: res.severity,
            status: 'Pending',
            chronic: res.chronic,
            demerit: res.demerit,
            notesCount: 0,
            auditeeCompleted: false,
            auditorCompleted: false,
            docsCount: 0,
            capaCount: 0,
            initiated: false,
            resolved: false,
            tat: '-',
            dateLogged: res.dateInitiated,
            dateResolved: '-',
            reviewed: false
          });
        }
      }
    });
  }

  deleteObservation(item: MeetingComplaint): void {
    this.complaintsData = this.complaintsData.filter(c => c !== item);
  }

  openNotes(item: MeetingComplaint): void {
    this.dialog.open(MeetingNotesDialogComponent, {
      width: '800px',
      data: item
    });
  }

  openRemarks(item: MeetingComplaint): void {
    const dialogRef = this.dialog.open(MeetingRemarksDialogComponent, {
      width: '960px',
      data: item
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        item.auditeeCompleted = res.auditeeCompleted;
        item.auditorCompleted = res.auditorCompleted;
      }
    });
  }

  openCapaDialog(item: MeetingComplaint): void {
    const dialogRef = this.dialog.open(OpenCapaDialogComponent, {
      width: '1020px',
      data: item
    });

    dialogRef.afterClosed().subscribe(list => {
      if (list && list.length) {
        item.capaCount = list.length;
      }
    });
  }

  openNextReviewDialog(item: MeetingComplaint): void {
    const dialogRef = this.dialog.open(NextReviewDialogComponent, {
      width: '520px',
      data: {
        ref: item.ref,
        subject: item.subject,
        currentReviewDate: item.nextReviewDate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        item.reviewed = true;
        item.nextReviewDate = result.nextReviewDate;
      }
    });
  }

  onToggleReviewed(item: MeetingComplaint, event: any): void {
    if (event.checked) {
      this.openNextReviewDialog(item);
    } else {
      item.reviewed = false;
      item.nextReviewDate = undefined;
    }
  }

  // ── CAPA Modals ──
  openAddItemCapa(item?: MeetingComplaint): void {
    const dialogRef = this.dialog.open(AddItemCapaDialogComponent, {
      width: '600px',
      data: item ? { observationRef: item.ref, subject: item.subject, category: item.category } : null
    });

    dialogRef.afterClosed().subscribe(newCapa => {
      if (newCapa) {
        this.capaList.unshift({
          id: this.capaList.length + 1,
          subject: newCapa.subject,
          category: newCapa.category,
          function: newCapa.function,
          observationRef: newCapa.observationRef,
          severity: newCapa.severity,
          dateInitiated: newCapa.dateInitiated,
          dateDue: newCapa.dateDue,
          dateResolved: newCapa.dateResolved,
          resolved: false,
          tat: newCapa.tat
        });
        if (item) {
          item.capaCount++;
        }
        this.activeTab = 'capa';
      }
    });
  }

  deleteCapa(item: MeetingCapa): void {
    this.capaList = this.capaList.filter(c => c !== item);
  }

  // ── Closure / Publish ──
  publishMeeting(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: {
        title: 'Publish & Close Meeting',
        content: `Are you sure you want to close meeting ${this.meetingRef}? This will lock the agenda and publish the review decisions.`
      }
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.isClosed = true;
        this.router.navigate(['/app/complaints/meetings']);
      }
    });
  }

  downloadReport(): void {
    alert(`Meeting Closure Report for ${this.meetingRef} downloaded successfully.`);
  }

  emailReport(): void {
    alert(`Meeting Closure Report for ${this.meetingRef} emailed to all CFT members.`);
  }
}
