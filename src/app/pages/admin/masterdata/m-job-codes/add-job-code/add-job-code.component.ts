import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JobCodeMasterItem, WarrantyMasterService } from '../../warranty-master.service';

@Component({
  selector: 'app-add-job-code',
  templateUrl: './add-job-code.component.html',
  styleUrls: ['./add-job-code.component.scss']
})
export class AddJobCodeComponent implements OnInit {
  jobForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private warrantyService: WarrantyMasterService,
    public dialogRef: MatDialogRef<AddJobCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JobCodeMasterItem | null
  ) {
    this.jobForm = this.fb.group({
      jobCode: ['', Validators.required],
      serviceName: ['', Validators.required],
      description: [''],
      unitRate: [0, [Validators.required, Validators.min(0)]],
      status: ['Active', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.jobForm.patchValue({
        jobCode: this.data.jobCode,
        serviceName: this.data.serviceName,
        description: this.data.description || '',
        unitRate: this.data.unitRate,
        status: this.data.status || 'Active'
      });
    }
  }

  save(): void {
    if (this.jobForm.invalid) return;

    const val = this.jobForm.value;
    if (this.data) {
      this.warrantyService.updateJobCode(this.data.id, {
        jobCode: val.jobCode,
        serviceName: val.serviceName,
        description: val.description,
        unitRate: Number(val.unitRate) || 0,
        status: val.status
      });
    } else {
      this.warrantyService.addJobCode({
        jobCode: val.jobCode,
        serviceName: val.serviceName,
        description: val.description,
        unitRate: Number(val.unitRate) || 0,
        status: val.status
      });
    }
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close();
  }
}
