import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface AgendaTopic {
  id: number;
  title: string;
  description: string;
  duration: string;
  presenter: string;
}

@Component({
  selector: 'app-agendadetails',
  templateUrl: './agendadetails.component.html',
  styleUrls: ['./agendadetails.component.scss']
})
export class AgendadetailsComponent implements OnInit {

  meetingRef: string = '';
  meetingDate: string = '';

  agendaItems: AgendaTopic[] = [
    {
      id: 1,
      title: 'Field Failure & Quality Complaints Review',
      description: 'Review high-severity customer complaints (Misalignment, Sensor Drift, Packaging Defects).',
      duration: '25 min',
      presenter: 'Pavan Kalyan (Quality)'
    },
    {
      id: 2,
      title: 'Process Compliance & Tool Calibration',
      description: 'Critical parameter verification and torque tool calibration schedule evaluation.',
      duration: '15 min',
      presenter: 'Navin Malik (Operations)'
    },
    {
      id: 3,
      title: 'Containment Actions & CAPA Allocation',
      description: 'Assign CAPA actions to functional owners with target resolution dates and review cadence.',
      duration: '15 min',
      presenter: 'Contact OM (QA Engineer)'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<AgendadetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.meetingRef = this.data.meetingRef || '';
      this.meetingDate = this.data.date || '';
    }
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
        tab: 'agenda'
      }
    });
  }
}
