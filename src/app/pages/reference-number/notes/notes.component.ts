import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// 👉 Dialog Components

import { AddNotesComponent } from '../base-info/add-notes/add-notes.component';

import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private dialog: MatDialog) {}

  notes: any[] = [];
  totalSize = 0;

  ngOnInit(): void {
    this.loadNotes();
  }

  // ✅ Load from localStorage
  loadNotes() {
    const data = localStorage.getItem('notes');

    if (data) {
      this.notes = JSON.parse(data);
    } else {
      // default data
      this.notes = [
        { id: 1, date: '24/09/2024', description: 'My car’s engine has been stalling unexpectedly while driving', status: 'Active' },
        { id: 2, date: '24/09/2024', description: 'My brakes have been making a loud squeaking noise.', status: 'Active' },
        { id: 3, date: '24/09/2024', description: 'Transmission in my car seems to slip between gears', status: 'Active' }
      ];
    }

    this.totalSize = this.notes.length;
  }

  // ✅ Save to localStorage
  saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.totalSize = this.notes.length;
  }

  // ✅ TrackBy
  trackById(index: number, item: any): number {
    return item.id;
  }

  // ✅ Add / Edit Note
  openNotes(item: any) {
    const dialogRef = this.dialog.open(AddNotesComponent, {
      data: item,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {

        if (item) {
          // 🔥 EDIT MODE
          const index = this.notes.findIndex(n => n.id === item.id);
          if (index !== -1) {
            this.notes[index] = { ...this.notes[index], ...result };
          }

        } else {
          // 🔥 ADD MODE
          const newId = this.notes.length > 0
            ? Math.max(...this.notes.map(n => n.id)) + 1
            : 1;

          this.notes.push({
            id: newId,
            ...result,
            status: 'Active'
          });
        }

        this.saveNotes(); // 🔥 persist data
      }
    });
  }

  // ✅ Change Status
  Confirmation(item: any) {
    const dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      data: {
        title: 'Change Status',
        content: 'Are you sure you want to change the status?'
      }
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        item.status = item.status === 'Active' ? 'Inactive' : 'Active';
        this.saveNotes(); // 🔥 persist
      }
    });
  }

  // ✅ Delete Note
  deleteConfirmation(item: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: 'Delete Confirmation',
        content: 'Are you sure you want to delete?',
        isConfirmation: true
      }
    });

    dialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this.notes = this.notes.filter(n => n.id !== item.id);
        this.saveNotes(); // 🔥 persist
      }
    });
  }
}