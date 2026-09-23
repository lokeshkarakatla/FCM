import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spare-dialog',
  templateUrl: './spare-dialog.component.html',
  styleUrls: ['./spare-dialog.component.scss']
})
export class SpareDialogComponent implements OnInit {

  partNo: string = '';
  partName: string = '';
  qty: number = 1;
  unitRate: number = 1200;
  cost: number = 1200;
  status: string = 'Replaced';

  constructor(
    public dialogRef: MatDialogRef<SpareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.partNo = this.data.partNo || '';
      this.partName = this.data.partName || '';
      this.qty = this.data.qty || 1;
      this.unitRate = this.data.unitRate || 1200;
      this.cost = this.data.cost || (this.qty * this.unitRate);
      this.status = this.data.status || 'Replaced';
    }
  }

  updateCost(): void {
    this.cost = (this.qty || 0) * (this.unitRate || 0);
  }

  save(): void {
    if (!this.partNo || !this.partName) return;
    this.dialogRef.close({
      partNo: this.partNo,
      partName: this.partName,
      qty: this.qty,
      unitRate: this.unitRate,
      cost: this.cost,
      status: this.status
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
