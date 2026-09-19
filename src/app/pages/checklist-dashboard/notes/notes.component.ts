
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
    postedBy: 'Admin',
    message: 'Hi, It is a long established fact that a reader will be distracted by the readable content of a page.',
    documents: 'insert_drive_file',
    context: 'System Message',
    tags: ['emergency', 'expedite'],
    flag: true
  },
  {
    date: new Date('2025-10-11T14:45:00'),
    postedBy: 'User',
    message: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.',
    documents: 'insert_drive_file',
    context: 'General Chat',
    tags: ['emergency', 'Delayed'],
    flag: false
  },
  {
    date: new Date('2025-10-12T20:10:00'),
    postedBy: 'User1',
    message: 'Quick reminder: The server will be down for maintenance tonight.',
    documents: 'insert_drive_file',
    context: 'System Updates',
    tags: ['Delayed', 'emergency'],
    flag: true
  }
]);


  // Data for the timeline from par-notes.component.ts
  entries = [
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Surya",
      Checkpoint: "510",
      prblm: "(Exterior/1A- Hood to Front Grill-Gap(a))",
      issue: "68",
      model: "Hector",
      content: "LHF Door outer belt to rear door outer belt flush nok,2mm",
      dataelement: "fa fa-flag-o",
      date: "Fri, 11 June 2021 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    },
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "siva",
      Checkpoint: "510",
      issue: "68",
      model: "Hector",
      content: "LHS Tailgate garnish to tail lamp improper fit, flushness 3.5mm againts RHS flushness 1.5mm",
      dataelement: "fa fa-flag-o",
      date: "Fri, 27 August 2021 16:12",
      element: "fa fa-toggle-right",
      header: "Notes",
      headerClass: "eventClass"
    },
    {
      class: "mgl-timeline-entry-dot-event",
      Auditor: "Navin",
      Checkpoint: "510",
      prblm: "(Interior/Leather Seats Side trim- Flush)",
      issue: "68",
      model: "Hector",
      content: "Fuel flap - Reinforcement Panel Spot Exposed",
      dataelement: "fa fa-flag-o",
      date: "Fri, 16 Octuber 2021 16:12",
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
