import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-open-capa-dialog',
  templateUrl: './open-capa-dialog.component.html',
  styleUrls: ['./open-capa-dialog.component.scss']
})
export class OpenCapaDialogComponent implements OnInit {

  observationRef: string = '';
  subject: string = '';
  capaList: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<OpenCapaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.observationRef = this.data.ref || this.data.observationRef || '';
      this.subject = this.data.subject || '';
      if (this.data.capas && Array.isArray(this.data.capas)) {
        this.capaList = JSON.parse(JSON.stringify(this.data.capas));
      } else {
        this.capaList = [];
      }
    }
  }

  deleteItem(item: any): void {
    this.capaList = this.capaList.filter(c => c !== item);
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.capaList);
  }
}
