import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VerificationMethod, VerificationMasterService } from '../../verification-master.service';

@Component({
  selector: 'app-add-verification-method',
  templateUrl: './add-verification-method.component.html',
  styleUrls: ['./add-verification-method.component.scss']
})
export class AddVerificationMethodComponent implements OnInit {
  methodForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private verificationService: VerificationMasterService,
    public dialogRef: MatDialogRef<AddVerificationMethodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VerificationMethod | null
  ) {
    this.methodForm = this.fb.group({
      name: ['', Validators.required],
      code: [''],
      description: [''],
      status: [true]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.methodForm.patchValue({
        name: this.data.name,
        code: this.data.code,
        description: this.data.description,
        status: this.data.status
      });
    }
  }

  save(): void {
    if (this.methodForm.invalid) return;

    const formVal = this.methodForm.value;
    if (this.data) {
      this.verificationService.updateMethod(this.data.id, formVal);
    } else {
      this.verificationService.addMethod(formVal);
    }
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close();
  }
}
