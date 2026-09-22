import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddParnotesComponent } from './add-parnotes/add-parnotes.component';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-par-notes',
  templateUrl: './par-notes.component.html',
  styleUrls: ['./par-notes.component.scss']
})
export class ParNotesComponent implements OnInit {

    // Properties from referral-notes.component.ts
  public currentPage = 0;
  public totalSize = 0;
  showMore = false;
  filterToggle: boolean = false;
  isNavOpen = true;
  isAscending: boolean = true;
  message: string = '';
  selectedTags: string[] = [];
  displayedColumns: string[] = ['date', 'postedBy', 'message', 'documents', 'context', 'tags', 'flag'];
  

  // Properties from par-notes.component.ts for the timeline
  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = false;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'left';

  // DataSource for the MatTable
chatMessages = new MatTableDataSource<any>([
  {
    date: new Date('2025-10-10T09:30:00'),
    postedBy: 'Surya N. (Lead Objective Auditor)',
    message: 'Sealing bead continuity check on RH Fender wheel arch completed. Laser gauge verified 4.2mm bead width (spec: 4.0 ± 0.5mm).',
    documents: 'insert_drive_file',
    context: 'Sealing Quality Gate',
    tags: ['sealing-leak', 'rework'],
    flag: true
  },
  {
    date: new Date('2025-10-11T14:45:00'),
    postedBy: 'Deepak Nair (Metrology Specialist)',
    message: 'CMM inspection report uploaded for Bonnet flushness profile. Max variance observed at LH hinge +0.35mm against 0.5mm tolerance limit.',
    documents: 'insert_drive_file',
    context: 'Metrology Lab',
    tags: ['gap-flushness', 'poka-yoke'],
    flag: false
  },
  {
    date: new Date('2025-10-12T20:10:00'),
    postedBy: 'Vikram Mehta (Plant Quality Lead)',
    message: 'End-of-line shower leak testing verified at 3.5 bar pressure. Zero water ingress detected across all 4 door weatherstrips. Batch approved for staging.',
    documents: 'insert_drive_file',
    context: 'Rain Test Sign-Off',
    tags: ['expedite', 'critical-safety'],
    flag: true
  }
]);


  // Data for the timeline from par-notes.component.ts
  entries = [
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Surya N.",
      Checkpoint: "510",
      prblm: "(Exterior/1A - Hood to Front Grill Gap)",
      issue: "12",
      model: "Toyota Fortuner 4x4",
      content: "Hood to fender flushness measured at 0.8mm against nominal 1.0mm. Verified compliant with Class-A surface standards.",
      dataelement: "fa fa-flag-o",
      date: "Fri, 15 Aug 2025 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    },
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Siva K.",
      Checkpoint: "490",
      issue: "34",
      model: "Hyundai Creta SX",
      content: "LHS Tailgate garnish flushness 3.2mm against RHS 1.5mm. Re-shimmed hinge mounting plates to bring gap under 2.0mm.",
      dataelement: "fa fa-flag-o",
      date: "Fri, 22 Aug 2025 11:30",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    },
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Navin R.",
      Checkpoint: "532",
      prblm: "(Interior/Front Console Trim Fastener Torque)",
      issue: "26",
      model: "Mahindra XUV700 AX7",
      content: "M6 console bolt torque audit recorded 9.2 Nm (spec: 9.0-10.5 Nm). Poka-yoke torque wrench calibration certified.",
      dataelement: "fa fa-flag-o",
      date: "Wed, 27 Aug 2025 14:45",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.totalSize = this.chatMessages.data.length;
     
  }

  // --- Methods from referral-notes.component.ts ---

  toggleSort(event: Event) {
    event.stopPropagation();
    this.isAscending = !this.isAscending;
  }

  onSortOptionSelected(option: string) {
    console.log('Selected sort option:', option);
  }

  addMessage() {
    if (!this.message.trim()) return;
    const newMessage = {
      date: new Date(),
      postedBy: 'User',
      message: this.message,
      documents: 'insert_drive_file',
      context: 'Chat Context',
      tags: [...this.selectedTags],
      flag: false
    };
    const data = this.chatMessages.data;
    data.push(newMessage);
    this.chatMessages.data = data;
    this.message = '';
    this.selectedTags = [];
  }

  openfileupload(id: any) {
    // this.dialog.open(FileUploadComponent, {
    //   data: id,
    //   height: 'auto',
    //   width: '400px'
    // });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.isNavOpen = event.target.innerWidth > 768;
  // }

  // --- Methods from par-notes.component.ts ---

  addEntry() {
    this.entries.push({
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Surya",
      Checkpoint: "510",
      prblm: "",
      issue: "68",
      model: "Hector",
      content: "RHF Door under flush to A Pillar 7mm, Nom 4mm",
      dataelement: "fa fa-flag-o",
      date: "Fri, 21 May 2021 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    });
  }

  removeEntry() {
    this.entries.pop();
  }

  onHeaderClick(event: MouseEvent) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event: MouseEvent) {
    if (!this.expandEnabled) {
      this.addnotes();
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded: boolean, index: number) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }

  addnotes() {
    this.dialog.open(AddParnotesComponent, {
      width: "600px",
      height: "auto"
    });
  }
}
