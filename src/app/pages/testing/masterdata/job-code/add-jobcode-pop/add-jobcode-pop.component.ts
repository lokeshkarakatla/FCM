import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-jobcode-pop',
  templateUrl: './add-jobcode-pop.component.html',
  styleUrls: ['./add-jobcode-pop.component.scss']
})
export class AddJobcodePopComponent implements OnInit {

  myGroup!: FormGroup;
  isSubmitting: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddJobcodePopComponent>, // Injected to handle closing the modal
    @Inject(MAT_DIALOG_DATA) public data: any,             // Injected to handle "Update" scenarios
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Initialize the form with 4 new fields
    this.myGroup = this.fb.group({
      jobCode: [this.data ? this.data.jobCode : '', Validators.required],
      jobCodeTitle: [this.data ? this.data.jobCodeTitle : '', Validators.required],
      jobCodeCategory: [this.data ? this.data.jobCodeCategory : '', Validators.required],
      chargeoutRate: [this.data ? this.data.chargeoutRate : '', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields in the HTML
  get f() { return this.myGroup.controls; }

  // Closes the popup without passing data back
  close(): void {
    this.dialogRef.close();
  }

  // Submits the form
  upsertCategory(): void {
    this.isSubmitting = true;

    // Stop here if form is invalid
    if (this.myGroup.invalid) {
      return;
    }

    // Pass the form values back to the parent component
    this.dialogRef.close(this.myGroup.value);
  }

}