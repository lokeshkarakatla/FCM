import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recognition-dialog',
  templateUrl: './recognition-dialog.component.html',
  styleUrls: ['./recognition-dialog.component.scss']
})
export class RecognitionDialogComponent implements OnInit {

  name: string = '';
  role: string = 'Quality Engineer';
  contribution: string = '';
  award: string = 'Zero Defect Champion';

  constructor(
    public dialogRef: MatDialogRef<RecognitionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.name = this.data.name || '';
      this.role = this.data.role || 'Quality Engineer';
      this.contribution = this.data.contribution || '';
      this.award = this.data.award || 'Zero Defect Champion';
    }
  }

  save(): void {
    if (!this.name || !this.contribution) return;
    this.dialogRef.close({
      name: this.name,
      role: this.role,
      contribution: this.contribution,
      award: this.award
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
