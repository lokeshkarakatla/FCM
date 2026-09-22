
import { AddNotesComponent } from './add-notes/add-notes.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { environment } from 'src/environments/environment';
import { AddParnotesComponent } from '../../parameter-dashboard/par-notes/add-parnotes/add-parnotes.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

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
    postedBy: 'Surya N. (Lead Auditor)',
    message: 'Clearcoat sagging on RH Rear Door lower edge. Wet film measured 145 µm (spec: 110-125 µm). Recommending spray nozzle recalibration on Robot 2.',
    documents: 'insert_drive_file',
    context: 'Paint Inspection',
    tags: ['paint-finish', 'rework'],
    flag: true
  },
  {
    date: new Date('2025-10-11T14:45:00'),
    postedBy: 'Deepak Nair (Process Eng)',
    message: '5W2H diagnostics logged under PRTS #PSR-24001. Containment batch quarantined at Bidadi Plant 1. Clean breakpoint VIN established.',
    documents: 'insert_drive_file',
    context: 'Engineering Action',
    tags: ['containment', 'poka-yoke'],
    flag: false
  },
  {
    date: new Date('2025-10-12T20:10:00'),
    postedBy: 'Vikram Mehta (CFT Lead)',
    message: 'Gate 4 offline sort confirmed 100% compliant over 3 consecutive shifts. Zero defects recorded. Process capability Cpk verified at 1.72.',
    documents: 'insert_drive_file',
    context: 'CFT Sign-Off',
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
      issue: "68",
      model: "Toyota Fortuner 4x4",
      content: "LHF Door outer belt to rear door outer belt flushness variance +1.8mm against nominal spec.",
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
      content: "LHS Tailgate garnish to tail lamp flushness 3.2mm against RHS flushness 1.5mm (tolerance <= 2.0mm).",
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
      prblm: "(Interior/Leather Seats Side Trim - Flushness)",
      issue: "26",
      model: "Mahindra XUV700 AX7",
      content: "Fuel flap hinge reinforcement spot weld micro-gap observed. Repaired and torque re-audited.",
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
