import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VerificationChecklistItem, VerificationMethod, VerificationMasterService } from '../../verification-master.service';

@Component({
  selector: 'app-add-verification-checklist',
  templateUrl: './add-verification-checklist.component.html',
  styleUrls: ['./add-verification-checklist.component.scss']
})
export class AddVerificationChecklistComponent implements OnInit {
  checklistForm: FormGroup;
  methods: VerificationMethod[] = [];

  constructor(
    private fb: FormBuilder,
    private verificationService: VerificationMasterService,
    public dialogRef: MatDialogRef<AddVerificationChecklistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: VerificationChecklistItem | null; defaultMethodId?: string }
  ) {
    this.checklistForm = this.fb.group({
      methodId: ['', Validators.required],
      item: ['', Validators.required],
      status: [true]
    });
  }

  ngOnInit(): void {
    this.methods = this.verificationService.getActiveMethods();

    if (this.data && this.data.item) {
      this.checklistForm.patchValue({
        methodId: this.data.item.methodId,
        item: this.data.item.item,
        status: this.data.item.status
      });
    } else if (this.data && this.data.defaultMethodId && this.data.defaultMethodId !== 'all') {
      this.checklistForm.patchValue({
        methodId: this.data.defaultMethodId
      });
    } else if (this.methods.length > 0) {
      this.checklistForm.patchValue({
        methodId: this.methods[0].id
      });
    }
  }

  save(): void {
    if (this.checklistForm.invalid) return;

    const val = this.checklistForm.value;
    if (this.data && this.data.item) {
      this.verificationService.updateChecklistItem(this.data.item.id, val);
    } else {
      this.verificationService.addChecklistItem(val);
    }
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close();
  }
}
