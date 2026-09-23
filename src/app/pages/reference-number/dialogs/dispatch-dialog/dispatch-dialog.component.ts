import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dispatch-dialog',
  templateUrl: './dispatch-dialog.component.html',
  styleUrls: ['./dispatch-dialog.component.scss']
})
export class DispatchDialogComponent implements OnInit {

  partNumber: string = '';
  partName: string = '';
  trackingNumber: string = '';
  dispatchDate: string = '';
  from: string = 'Mumbai Dealer Center';
  to: string = 'Main Factory Plant B';
  remarks: string = '';
  status: string = 'Dispatched';

  constructor(
    public dialogRef: MatDialogRef<DispatchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.partNumber = this.data.partNumber || '';
      this.partName = this.data.partName || '';
      this.trackingNumber = this.data.trackingNumber || '';
      this.dispatchDate = this.data.dispatchDate || '';
      this.from = this.data.from || 'Mumbai Dealer Center';
      this.to = this.data.to || 'Main Factory Plant B';
      this.remarks = this.data.remarks || '';
      this.status = this.data.status || 'Dispatched';
    }
  }

  save(): void {
    if (!this.partNumber || !this.partName) return;
    this.dialogRef.close({
      partNumber: this.partNumber,
      partName: this.partName,
      trackingNumber: this.trackingNumber,
      dispatchDate: this.dispatchDate,
      from: this.from,
      to: this.to,
      remarks: this.remarks,
      status: this.status
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
