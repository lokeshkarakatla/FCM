import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addsec',
  templateUrl: './addsec.component.html',
  styleUrls: ['./addsec.component.scss']
})
export class AddsecComponent  {

 categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddsecComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.categoryForm = this.fb.group({
      category: [data?.category || '', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      console.log('Form Submitted:', this.categoryForm.value);
      this.dialogRef.close(this.categoryForm.value);
    }
  }

  close() {
    this.dialogRef.close(null);
  }
}
