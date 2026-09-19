import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-remarks-dialog',
  templateUrl: './meeting-remarks-dialog.component.html',
  styleUrls: ['./meeting-remarks-dialog.component.scss']
})
export class MeetingRemarksDialogComponent implements OnInit {

  auditeeResponseDate: string = '';
  auditeeNarration: string = '';
  auditorRemarksDate: string = '';
  auditorDescription: string = '';

  constructor(
    public dialogRef: MatDialogRef<MeetingRemarksDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.auditeeResponseDate = today;
    this.auditorRemarksDate = today;

    if (this.data) {
      if (this.data.auditeeCompleted) {
        this.auditeeNarration = 'Immediate containment initiated on line; supplier contacted for raw material batch testing.';
      }
      if (this.data.auditorCompleted) {
        this.auditorDescription = 'Auditor reviewed containment actions. Satisfactory for current shift; formal 8D report expected in 5 days.';
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({
      auditeeCompleted: !!this.auditeeNarration.trim(),
      auditorCompleted: !!this.auditorDescription.trim(),
      auditeeResponseDate: this.auditeeResponseDate,
      auditorRemarksDate: this.auditorRemarksDate,
      auditeeNarration: this.auditeeNarration,
      auditorDescription: this.auditorDescription
    });
  }
}
