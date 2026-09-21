import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface MeetingCapaItem {
  id: number;
  subject: string;
  category: string;
  function: string;
  observationRef: string;
  severity: 'High' | 'Medium' | 'Low';
  dateInitiated: string;
  dateDue: string;
  dateResolved?: string;
  resolved: boolean;
  tat: string;
}

@Component({
  selector: 'app-meeting-capa-dialog',
  templateUrl: './meeting-capa-dialog.component.html',
  styleUrls: ['./meeting-capa-dialog.component.scss']
})
export class MeetingCapaDialogComponent implements OnInit {

  meetingRef: string = '';
  meetingDate: string = '';
  capaList: MeetingCapaItem[] = [];

  constructor(
    public dialogRef: MatDialogRef<MeetingCapaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.meetingRef = this.data.meetingRef || '';
      this.meetingDate = this.data.date || '';
      if (this.data.capas && Array.isArray(this.data.capas) && this.data.capas.length > 0) {
        this.capaList = JSON.parse(JSON.stringify(this.data.capas));
      } else {
        // High fidelity default CAPAs for meeting
        this.capaList = [
          {
            id: 1,
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
            id: 2,
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
          }
        ];
      }
    }
  }

  get resolvedCount(): number {
    return this.capaList.filter(c => c.resolved).length;
  }

  get pendingCount(): number {
    return this.capaList.length - this.resolvedCount;
  }

  close(): void {
    this.dialogRef.close();
  }

  openFullExecution(): void {
    this.dialogRef.close();
    this.router.navigate(['/app/complaints/meetings/detail'], {
      queryParams: {
        meetingRef: this.meetingRef,
        date: this.meetingDate,
        tab: 'capa'
      }
    });
  }
}
