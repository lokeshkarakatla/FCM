import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SparePartMasterItem, WarrantyMasterService } from '../../warranty-master.service';

@Component({
  selector: 'app-add-spare-part',
  templateUrl: './add-spare-part.component.html',
  styleUrls: ['./add-spare-part.component.scss']
})
export class AddSparePartComponent implements OnInit {
  spareForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private warrantyService: WarrantyMasterService,
    public dialogRef: MatDialogRef<AddSparePartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SparePartMasterItem | null
  ) {
    this.spareForm = this.fb.group({
      partNo: ['', Validators.required],
      partName: ['', Validators.required],
      unitRate: [0, [Validators.required, Validators.min(0)]],
      remarks: [''],
      status: ['Active', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.spareForm.patchValue({
        partNo: this.data.partNo,
        partName: this.data.partName,
        unitRate: this.data.unitRate,
        remarks: this.data.remarks || '',
        status: this.data.status || 'Active'
      });
    }
  }

  save(): void {
    if (this.spareForm.invalid) return;

    const val = this.spareForm.value;
    if (this.data) {
      this.warrantyService.updateSparePart(this.data.id, {
        partNo: val.partNo,
        partName: val.partName,
        unitRate: Number(val.unitRate) || 0,
        remarks: val.remarks,
        status: val.status
      });
    } else {
      this.warrantyService.addSparePart({
        partNo: val.partNo,
        partName: val.partName,
        unitRate: Number(val.unitRate) || 0,
        remarks: val.remarks,
        status: val.status
      });
    }
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close();
  }
}
