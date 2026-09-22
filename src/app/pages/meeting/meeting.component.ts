import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MeetingDialogComponent } from './meeting-dialog/meeting-dialog.component';


import { Router } from '@angular/router';
import { AddattendanceComponent } from 'src/app/addattendance/addattendance.component';
import { AgendadetailsComponent } from 'src/app/agendadetails/agendadetails.component';
import { MeetingrefComponent } from 'src/app/meetingref/meetingref.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { MeetingCapaDialogComponent } from './dialogs/meeting-capa-dialog/meeting-capa-dialog.component';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  totalSize = 0;
  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.totalSize = this.data.length;
  }

  goBack() {
    this.router.navigate(['/app/complaints']);
  }
  data = [
    {
      referenceNo: "FC/2026/04/05",
      date: "10-10-2024",
      time: "10:00 AM",
      duration: "55 min",
      meetingRef: "MEET-2025/10/02",
      complaints: 8,
      capa: 2,
      actionPoints: 2,
      attendance: "5/8",
      lateAttendance: "1/8",
      agenda: 3
    },
    {
      referenceNo: "FC/2026/04/06",
      date: "11-10-2024",
      time: "11:30 AM",
      duration: "45 min",
      meetingRef: "MEET-2025/10/03",
      complaints: 5,
      capa: 2,
      actionPoints: 1,
      attendance: "5/7",
      lateAttendance: "1/7",
      agenda: 2
    },
    {
      referenceNo: "FC/2026/04/07",
      date: "24-10-2024",
      time: "02:00 PM",
      duration: "60 min",
      meetingRef: "MEET-2025/10/04",
      complaints: 6,
      capa: 2,
      actionPoints: 3,
      attendance: "5/7",
      lateAttendance: "1/7",
      agenda: 4
    },
    {
      referenceNo: "FC/2026/04/08",
      date: "23-10-2024",
      time: "03:30 PM",
      duration: "40 min",
      meetingRef: "MEET-2025/10/05",
      complaints: 4,
      capa: 2,
      actionPoints: 2,
      attendance: "5/7",
      lateAttendance: "1/7",
      agenda: 3
    },
    {
      referenceNo: "FC/2026/04/09",
      date: "23-10-2024",
      time: "10:30 AM",
      duration: "50 min",
      meetingRef: "MEET-2025/10/06",
      complaints: 3,
      capa: 2,
      actionPoints: 1,
      attendance: "5/7",
      lateAttendance: "1/7",
      agenda: 2
    },
    {
      referenceNo: "FC/2026/04/10",
      date: "29-10-2024",
      time: "04:00 PM",
      duration: "45 min",
      meetingRef: "MEET-2025/10/07",
      complaints: 7,
      capa: 2,
      actionPoints: 2,
      attendance: "5/7",
      lateAttendance: "1/7",
      agenda: 3
    },
    {
      referenceNo: "FC/2026/04/11",
      date: "30-10-2024",
      time: "11:00 AM",
      duration: "60 min",
      meetingRef: "MEET-2025/10/08",
      complaints: 5,
      capa: 2,
      actionPoints: 2,
      attendance: "6/7",
      lateAttendance: "0/7",
      agenda: 4
    },
    {
      referenceNo: "FC/2026/04/12",
      date: "02-11-2024",
      time: "02:30 PM",
      duration: "35 min",
      meetingRef: "MEET-2025/11/01",
      complaints: 2,
      capa: 2,
      actionPoints: 1,
      attendance: "5/7",
      lateAttendance: "1/7",
      agenda: 2
    }
  ];

  public gotoMeeting(id: any) {
    this.router.navigate(['/app/complaints/meeting/add']);
  }

  isMeetingClosed(item: any): boolean {
    return localStorage.getItem('meeting_closed_' + item.meetingRef) === 'true';
  }

  public openMeetingInnerScreen(item: any, tab: string = 'observations') {
    const isClosed = this.isMeetingClosed(item);
    this.router.navigate(['/app/complaints/meetings/detail'], {
      queryParams: {
        meetingRef: item.meetingRef,
        date: item.date,
        time: item.time,
        duration: item.duration,
        attendance: item.attendance,
        status: isClosed ? 'Closed' : 'Open',
        isClosed: isClosed ? 'true' : 'false',
        tab: tab
      }
    });
  }

  Attendancecount(item: any) {
    const dialogRef = this.dialog.open(AddattendanceComponent, {
      width: '780px',
      maxWidth: '94vw',
      data: {
        meetingRef: item.meetingRef,
        attendance: item.attendance,
        attendees: item.attendees || null
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res && res.attendance) {
        item.attendance = res.attendance;
        item.attendees = res.attendees;
      }
    });
  }

  openCapaDialog(item: any) {
    this.dialog.open(MeetingCapaDialogComponent, {
      width: '980px',
      maxWidth: '95vw',
      data: {
        meetingRef: item.meetingRef,
        date: item.date,
        capas: item.capasList || null
      }
    });
  }

  deleteConfirmation() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }

  openMeetingDialog(item: any) {
    this.openMeetingInnerScreen(item);
  }

  openAgendaDialog(item: any) {
    this.dialog.open(AgendadetailsComponent, {
      width: '740px',
      maxWidth: '94vw',
      data: {
        meetingRef: item.meetingRef,
        date: item.date
      }
    });
  }
}