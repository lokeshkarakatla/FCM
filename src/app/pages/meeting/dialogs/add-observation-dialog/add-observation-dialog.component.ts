import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-observation-dialog',
  templateUrl: './add-observation-dialog.component.html',
  styleUrls: ['./add-observation-dialog.component.scss']
})
export class AddObservationDialogComponent implements OnInit {

  category: string = 'Quality';
  functionName: string = 'Function1';
  serial: string = '';
  subject: string = '';
  description: string = '';
  chronic: boolean = false;
  demerit: number = 10;
  dateInitiated: string = new Date().toISOString().split('T')[0];

  constructor(
    public dialogRef: MatDialogRef<AddObservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.category = this.data.category || 'Quality';
      this.functionName = this.data.function || 'Function1';
      this.serial = this.data.ref || this.data.serial || '';
      this.subject = this.data.subject || '';
      this.description = this.data.description || '';
      this.chronic = !!this.data.chronic;
      this.demerit = this.data.demerit || 10;
      this.dateInitiated = this.data.dateInitiated || new Date().toISOString().split('T')[0];
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (!this.subject.trim()) return;
    this.dialogRef.close({
      category: this.category,
      function: this.functionName,
      ref: this.serial || `NO-${Math.floor(100 + Math.random() * 900)}`,
      subject: this.subject,
      description: this.description,
      chronic: this.chronic,
      demerit: this.demerit,
      dateInitiated: this.dateInitiated,
      status: 'Pending',
      severity: 'High'
    });
  }
}
