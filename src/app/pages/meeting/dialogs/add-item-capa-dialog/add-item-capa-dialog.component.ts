import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-capa-dialog',
  templateUrl: './add-item-capa-dialog.component.html',
  styleUrls: ['./add-item-capa-dialog.component.scss']
})
export class AddItemCapaDialogComponent implements OnInit {

  category: string = 'Quality';
  functionName: string = 'Function1';
  observationRef: string = 'NO-765';
  subject: string = '';
  severity: 'High' | 'Medium' | 'Low' = 'High';
  dateInitiated: string = new Date().toISOString().split('T')[0];
  dateDue: string = new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0];
  dateResolved: string = '';
  tat: string = '7 Days';

  constructor(
    public dialogRef: MatDialogRef<AddItemCapaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.category = this.data.category || 'Quality';
      this.functionName = this.data.function || 'Function1';
      this.observationRef = this.data.observationRef || 'NO-765';
      this.subject = this.data.subject || '';
      this.severity = this.data.severity || 'High';
      if (this.data.dateInitiated) this.dateInitiated = this.data.dateInitiated;
      if (this.data.dateDue) this.dateDue = this.data.dateDue;
      if (this.data.dateResolved && this.data.dateResolved !== 'N/A') {
        this.dateResolved = this.data.dateResolved;
      }
      if (this.data.tat) this.tat = this.data.tat;
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (!this.subject.trim()) return;
    const isResolved = !!(this.dateResolved && this.dateResolved.trim() !== '' && this.dateResolved !== 'N/A');
    this.dialogRef.close({
      category: this.category,
      function: this.functionName,
      observationRef: this.observationRef,
      subject: this.subject,
      severity: this.severity,
      dateInitiated: this.dateInitiated,
      dateDue: this.dateDue,
      dateResolved: isResolved ? this.dateResolved : 'N/A',
      resolved: isResolved,
      tat: this.tat
    });
  }
}
