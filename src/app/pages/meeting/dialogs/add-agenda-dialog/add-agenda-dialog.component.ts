import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-agenda-dialog',
  templateUrl: './add-agenda-dialog.component.html',
  styleUrls: ['./add-agenda-dialog.component.scss']
})
export class AddAgendaDialogComponent implements OnInit {

  name: string = '';
  description: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddAgendaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.name = this.data.name || '';
      this.description = this.data.description || '';
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (!this.name.trim()) return;
    this.dialogRef.close({
      name: this.name,
      description: this.description,
      status: true
    });
  }
}
