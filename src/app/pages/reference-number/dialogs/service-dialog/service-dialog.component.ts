import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.scss']
})
export class ServiceDialogComponent implements OnInit {

  serviceId: string = '';
  description: string = '';
  date: string = '';
  technician: string = '';
  status: string = 'Completed';

  constructor(
    public dialogRef: MatDialogRef<ServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.serviceId = this.data.serviceId || '';
      this.description = this.data.description || '';
      this.date = this.data.date || '';
      this.technician = this.data.technician || '';
      this.status = this.data.status || 'Completed';
    }
  }

  save(): void {
    if (!this.serviceId || !this.description) return;
    this.dialogRef.close({
      serviceId: this.serviceId,
      description: this.description,
      date: this.date,
      technician: this.technician,
      status: this.status
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
