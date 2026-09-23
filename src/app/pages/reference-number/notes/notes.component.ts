import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

export interface NoteData {
  id?: number;
  actions?: string;
  date: string;
  postedBy: string;
  message: string;
  document: string;
  tags: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @ViewChild('editNoteDialog') editNoteDialog!: TemplateRef<any>;

  displayedColumns: string[] = ['actions', 'date', 'postedBy', 'message', 'document', 'tags'];
  notesList: NoteData[] = [];
  paginatedNotes: NoteData[] = [];

  pageSize: number = 10;
  currentPage: number = 0;

  selectedTag: string = '';
  noteText: string = '';
  attachedDocument: string = '';
  availableTags: string[] = [
    'Investigation',
    'Root Cause',
    'Containment',
    'Supplier Action',
    'Warranty',
    'Quality & Testing',
    'Customer Communications',
    'Field Feedback'
  ];

  editingNote: NoteData | null = null;
  editSelectedTag: string = '';
  editNoteText: string = '';
  editDialogRef: any = null;

  refNo: string = 'FIELD/2024/09/3';
  subject: string = 'Global fleet of connected vehicles';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadTags();
    this.loadNotes();
  }

  loadTags(): void {
    const stored = localStorage.getItem('fcm_complaint_tags');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          this.availableTags = parsed.map((t: any) => typeof t === 'string' ? t : t.name);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  loadNotes(): void {
    const stored = localStorage.getItem('fcm_complaint_notes');
    if (stored) {
      try {
        this.notesList = JSON.parse(stored);
      } catch (e) {
        this.setDefaultNotes();
      }
    } else {
      this.setDefaultNotes();
    }
    this.updatePagination();
  }

  setDefaultNotes(): void {
    this.notesList = [
      {
        id: 1,
        date: '24/09/2024 10:45 AM',
        postedBy: 'Rajesh_Kumar (QA Lead)',
        message: 'My car’s engine has been stalling unexpectedly while driving. Vehicle diagnostics revealed intermittent harness signal loss.',
        document: 'Harness_Fault_Log.pdf',
        tags: 'Investigation'
      },
      {
        id: 2,
        date: '24/09/2024 02:15 PM',
        postedBy: 'Anita_Desai (Field Engineer)',
        message: 'My brakes have been making a loud squeaking noise under moderate braking. Inspected front pads - abnormal glaze detected.',
        document: 'Brake_Pads_Glaze_Report.pdf',
        tags: 'Quality & Testing'
      },
      {
        id: 3,
        date: '24/09/2024 04:30 PM',
        postedBy: 'Amit_Patel (Supplier Quality)',
        message: 'Transmission in customer vehicle slips between gears. Escalated to supplier Bosch for batch sensor replacement.',
        document: '',
        tags: 'Supplier Action'
      }
    ];
    this.saveNotes();
  }

  saveNotes(): void {
    localStorage.setItem('fcm_complaint_notes', JSON.stringify(this.notesList));
    this.updatePagination();
  }

  updatePagination(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedNotes = this.notesList.slice(startIndex, endIndex);
  }

  handlePageEvent(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagination();
  }

  addNote(): void {
    if (!this.selectedTag || !this.noteText.trim()) return;

    const newNote: NoteData = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-GB') + ' ' + new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      postedBy: 'Current_User (QA Engineer)',
      message: this.noteText.trim(),
      document: this.attachedDocument || '',
      tags: this.selectedTag
    };

    this.notesList.unshift(newNote);
    this.saveNotes();
    this.clearForm();
  }

  clearForm(): void {
    this.selectedTag = '';
    this.noteText = '';
    this.attachedDocument = '';
  }

  uploaddoc(note?: NoteData | null): void {
    const dialogRef = this.dialog.open(UploadDocumentsComponent, {
      width: '560px',
      data: null
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.fileName) {
        this.attachedDocument = result.fileName;
      }
    });
  }

  editNote(note: NoteData): void {
    this.editingNote = note;
    this.editSelectedTag = note.tags;
    this.editNoteText = note.message;

    this.editDialogRef = this.dialog.open(this.editNoteDialog, {
      width: '600px',
      data: note
    });
  }

  saveEditDialog(): void {
    if (this.editingNote && this.editSelectedTag && this.editNoteText.trim()) {
      this.editingNote.tags = this.editSelectedTag;
      this.editingNote.message = this.editNoteText.trim();
      this.saveNotes();
    }
    this.closeEditDialog();
  }

  closeEditDialog(): void {
    if (this.editDialogRef) {
      this.editDialogRef.close();
      this.editDialogRef = null;
    }
    this.editingNote = null;
  }

  deleteNote(note: NoteData): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: {
        title: 'Delete Confirmation',
        content: 'Are you sure you want to delete this note?',
        isConfirmation: true
      }
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this.notesList = this.notesList.filter(n => n !== note && n.id !== note.id);
        this.saveNotes();
      }
    });
  }

  viewPdf(docName: string): void {
    alert('Viewing attached document: ' + docName);
  }

  downloadPdf(docName: string): void {
    alert('Downloading attached document: ' + docName);
  }

  goBack(): void {
    this.router.navigate(['/app/complaints/monitor']);
  }
}