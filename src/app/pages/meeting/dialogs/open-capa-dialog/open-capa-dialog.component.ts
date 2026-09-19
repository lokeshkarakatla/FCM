import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-open-capa-dialog',
  templateUrl: './open-capa-dialog.component.html',
  styleUrls: ['./open-capa-dialog.component.scss']
})
export class OpenCapaDialogComponent implements OnInit {

  observationRef: string = 'NO-765';
  capaList: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<OpenCapaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data && this.data.ref) {
      this.observationRef = this.data.ref;
    }
    this.loadData();
  }

  loadData(): void {
    this.capaList = [
      {
        category: 'Quality Assurance',
        function: 'Inspection',
        observationRef: this.observationRef,
        severity: 'High',
        dateInitiated: '2026-08-05',
        dateResolved: '2026-08-12',
        resolved: true,
        tat: '7 Days'
      },
      {
        category: 'Production',
        function: 'Assembly',
        observationRef: this.observationRef,
        severity: 'Medium',
        dateInitiated: '2026-08-08',
        dateResolved: '-',
        resolved: false,
        tat: '-'
      }
    ];
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.capaList);
  }
}
