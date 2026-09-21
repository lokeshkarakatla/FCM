import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface Attendee {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  present: boolean;
}

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.scss']
})
export class AddattendanceComponent implements OnInit {

  meetingRef: string = '';

  attendees: Attendee[] = [
    {
      id: 1,
      name: 'Pavan Kalyan',
      role: 'Project Manager',
      initials: 'PK',
      avatarBg: '#3b82f6', // blue
      present: true
    },
    {
      id: 2,
      name: 'Test1',
      role: 'Lead Developer',
      initials: 'T1',
      avatarBg: '#8b5cf6', // purple
      present: true
    },
    {
      id: 3,
      name: 'Navin Malik',
      role: 'UI/UX Designer',
      initials: 'NM',
      avatarBg: '#10b981', // green
      present: true
    },
    {
      id: 4,
      name: 'Gaurav',
      role: 'Business Analyst',
      initials: 'GV',
      avatarBg: '#f59e0b', // orange
      present: true
    },
    {
      id: 5,
      name: 'Contact OM',
      role: 'QA Engineer',
      initials: 'CO',
      avatarBg: '#ef4444', // coral/red
      present: true
    },
    {
      id: 6,
      name: 'Ayush',
      role: 'Product Owner',
      initials: 'AY',
      avatarBg: '#14b8a6', // teal
      present: false
    },
    {
      id: 7,
      name: 'Santosh',
      role: 'DevOps Engineer',
      initials: 'ST',
      avatarBg: '#ec4899', // pink
      present: false
    },
    {
      id: 8,
      name: 'Harsha',
      role: 'Scrum Master',
      initials: 'HA',
      avatarBg: '#6366f1', // indigo
      present: false
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<AddattendanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.meetingRef = this.data.meetingRef || '';
      if (this.data.attendees && Array.isArray(this.data.attendees)) {
        this.attendees = JSON.parse(JSON.stringify(this.data.attendees));
      }
    }
  }

  get presentCount(): number {
    return this.attendees.filter(a => a.present).length;
  }

  get isAllSelected(): boolean {
    return this.presentCount === this.attendees.length;
  }

  toggleSelectAll(): void {
    const targetState = !this.isAllSelected;
    this.attendees.forEach(a => a.present = targetState);
  }

  toggleAttendee(att: Attendee): void {
    att.present = !att.present;
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({
      attendance: `${this.presentCount}/${this.attendees.length}`,
      presentCount: this.presentCount,
      totalCount: this.attendees.length,
      attendees: this.attendees
    });
  }
}
