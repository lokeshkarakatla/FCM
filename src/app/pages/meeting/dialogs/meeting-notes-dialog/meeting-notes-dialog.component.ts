import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-notes-dialog',
  templateUrl: './meeting-notes-dialog.component.html',
  styleUrls: ['./meeting-notes-dialog.component.scss']
})
export class MeetingNotesDialogComponent implements OnInit {

  dateTime: string = '';
  postedBy: string = 'Auditor';
  noteText: string = '';

  notesHistory: any[] = [
    {
      createdDate: '2026-08-02T10:30:00',
      auditor: 'Rajesh Kumar',
      notes: 'Initial observation recorded during line walk.'
    },
    {
      createdDate: '2026-08-04T14:15:00',
      auditor: 'Priya Sharma',
      notes: 'Follow-up with CFT team conducted; awaiting supplier validation.'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<MeetingNotesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    const now = new Date();
    this.dateTime = now.toISOString().substring(0, 16);
    if (this.data && this.data.notes) {
      this.notesHistory.unshift({
        createdDate: new Date().toISOString(),
        auditor: 'System User',
        notes: this.data.notes
      });
    }
  }

  addNote(): void {
    if (!this.noteText.trim()) return;
    this.notesHistory.unshift({
      createdDate: new Date().toISOString(),
      auditor: this.postedBy,
      notes: this.noteText
    });
    this.noteText = '';
  }

  deleteNote(item: any): void {
    this.notesHistory = this.notesHistory.filter(n => n !== item);
  }

  close(): void {
    this.dialogRef.close(this.notesHistory);
  }
}
