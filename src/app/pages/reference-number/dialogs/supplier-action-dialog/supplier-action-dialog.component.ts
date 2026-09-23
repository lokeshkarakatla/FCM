import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-supplier-action-dialog',
  templateUrl: './supplier-action-dialog.component.html',
  styleUrls: ['./supplier-action-dialog.component.scss']
})
export class SupplierActionDialogComponent implements OnInit {

  action: string = '';
  supplier: string = 'Bosch Automotive';
  component: string = 'ECU Wiring Harness';
  deadline: string = '';
  dateCompleted: string = '';
  status: string = 'Open';
  done: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SupplierActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.action = this.data.action || '';
      this.supplier = this.data.supplier || 'Bosch Automotive';
      this.component = this.data.component || '';
      this.deadline = this.data.deadline || '';
      this.dateCompleted = this.data.dateCompleted || '';
      this.status = this.data.status || 'Open';
      this.done = this.data.done || false;
    }
  }

  save(): void {
    if (!this.action) return;
    this.dialogRef.close({
      action: this.action,
      supplier: this.supplier,
      component: this.component,
      deadline: this.deadline,
      dateCompleted: this.dateCompleted,
      status: this.status,
      done: this.done
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
