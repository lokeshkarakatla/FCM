import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WarrantyMasterService, JobCodeMasterItem } from '../../../admin/masterdata/warranty-master.service';

@Component({
  selector: 'app-service-dialog',
  templateUrl: './service-dialog.component.html',
  styleUrls: ['./service-dialog.component.scss']
})
export class ServiceDialogComponent implements OnInit {

  masterJobs: JobCodeMasterItem[] = [];
  selectedJobCode: string = '';

  serviceId: string = '';
  jobCode: string = '';
  description: string = '';
  qty: number = 1;
  unitRate: number = 850;
  cost: number = 850;
  date: string = '';
  technician: string = '';
  status: string = 'Completed';

  constructor(
    public dialogRef: MatDialogRef<ServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private warrantyMasterService: WarrantyMasterService
  ) {}

  ngOnInit(): void {
    this.masterJobs = this.warrantyMasterService.getJobCodesSync();

    if (this.data) {
      this.serviceId = this.data.serviceId || this.data.jobCode || '';
      this.jobCode = this.data.jobCode || this.data.serviceId || '';
      this.description = this.data.description || '';
      this.qty = this.data.qty || 1;
      this.unitRate = this.data.unitRate !== undefined ? this.data.unitRate : 850;
      this.cost = this.data.cost || (this.qty * this.unitRate);
      this.date = this.data.date || new Date().toISOString().substring(0, 10);
      this.technician = this.data.technician || '';
      this.status = this.data.status || 'Completed';

      const match = this.masterJobs.find(j => j.jobCode === this.jobCode);
      if (match) {
        this.selectedJobCode = match.jobCode;
      }
    } else {
      this.date = new Date().toISOString().substring(0, 10);
    }
  }

  onMasterJobChange(code: string): void {
    const selected = this.masterJobs.find(j => j.jobCode === code);
    if (selected) {
      this.jobCode = selected.jobCode;
      this.serviceId = selected.jobCode;
      this.description = selected.description;
      this.unitRate = selected.unitRate;
      this.updateCost();
    }
  }

  updateCost(): void {
    this.cost = (Number(this.qty) || 0) * (Number(this.unitRate) || 0);
  }

  isMasterJob(code: string): boolean {
    return this.masterJobs.some(j => j.jobCode === code);
  }

  save(): void {
    if (!this.jobCode && !this.serviceId) return;
    this.dialogRef.close({
      serviceId: this.serviceId || this.jobCode,
      jobCode: this.jobCode || this.serviceId,
      description: this.description,
      qty: this.qty,
      unitRate: this.unitRate,
      cost: this.cost,
      date: this.date,
      technician: this.technician,
      status: this.status
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
