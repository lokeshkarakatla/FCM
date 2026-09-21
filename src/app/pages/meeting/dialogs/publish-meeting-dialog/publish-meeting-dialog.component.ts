import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PublishMeetingDialogData {
  meetingRef: string;
  meetingDate?: string;
  attendance?: string;
  concludingRemarks?: string;
}

@Component({
  selector: 'app-publish-meeting-dialog',
  templateUrl: './publish-meeting-dialog.component.html',
  styleUrls: ['./publish-meeting-dialog.component.scss']
})
export class PublishMeetingDialogComponent implements OnInit {

  meetingRef: string = '';
  meetingDate: string = '';
  attendance: string = '';

  constructor(
    public dialogRef: MatDialogRef<PublishMeetingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PublishMeetingDialogData
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.meetingRef = this.data.meetingRef || '';
      this.meetingDate = this.data.meetingDate || '';
      this.attendance = this.data.attendance || '';
    }
  }

  close(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
