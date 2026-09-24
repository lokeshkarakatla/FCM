import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WarrantyMasterService, SparePartMasterItem } from '../../../admin/masterdata/warranty-master.service';

@Component({
  selector: 'app-spare-dialog',
  templateUrl: './spare-dialog.component.html',
  styleUrls: ['./spare-dialog.component.scss']
})
export class SpareDialogComponent implements OnInit {

  masterParts: SparePartMasterItem[] = [];
  selectedMasterCode: string = '';

  partNo: string = '';
  partName: string = '';
  qty: number = 1;
  unitRate: number = 600;
  cost: number = 600;
  status: string = 'Replaced';

  constructor(
    public dialogRef: MatDialogRef<SpareDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private warrantyMasterService: WarrantyMasterService
  ) {}

  ngOnInit(): void {
    this.masterParts = this.warrantyMasterService.getSparePartsSync();

    if (this.data) {
      this.partNo = this.data.partNo || '';
      this.partName = this.data.partName || '';
      this.qty = this.data.qty || 1;
      this.unitRate = this.data.unitRate !== undefined ? this.data.unitRate : 600;
      this.cost = this.data.cost || (this.qty * this.unitRate);
      this.status = this.data.status || 'Replaced';

      const match = this.masterParts.find(p => p.partNo === this.partNo);
      if (match) {
        this.selectedMasterCode = match.partNo;
      }
    }
  }

  onMasterPartChange(code: string): void {
    const selected = this.masterParts.find(p => p.partNo === code);
    if (selected) {
      this.partNo = selected.partNo;
      this.partName = selected.partName;
      this.unitRate = selected.unitRate;
      this.updateCost();
    }
  }

  updateCost(): void {
    this.cost = (Number(this.qty) || 0) * (Number(this.unitRate) || 0);
  }

  isMasterPart(code: string): boolean {
    return this.masterParts.some(p => p.partNo === code);
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
