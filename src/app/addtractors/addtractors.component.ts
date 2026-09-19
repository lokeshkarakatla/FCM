import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addtractors',
  templateUrl: './addtractors.component.html',
  styleUrls: ['./addtractors.component.scss']
})
export class AddtractorsComponent implements OnInit {

  isSubmitting = false;
  projects: any[] = [];
  myGroup: FormGroup; // Changed from myGroup to a more descriptive name

  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddtractorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.loadMockProjects(); // static mock project data
    
    // Initialize the form group with controls and validators
    this.myGroup = this._fb.group({
      EquipmentID: ['', [Validators.required]],
      ProjectId: [null, [Validators.required]],
      Model: [null, [Validators.required]],
      SerialNo: ['', [Validators.required]],
      Config: ['', [Validators.required]],
      TestActivityPlanned: ['', [Validators.required]],
      PlannedTestingHours: [null, [Validators.required]],
      ActualTestingHours: [null, [Validators.required]],
      Remarks: [''] // Remarks can be optional
    });

    // If data is passed (for updating), patch the form values
    if (this.data) {
      this.myGroup.patchValue(this.data);
    }
  }

  // Getter for easy access to form controls in the template
  get f() {
    return this.myGroup.controls;
  }

  upsertProjects() {
    this.isSubmitting = true;
    
    // Mark all fields as touched to trigger validation messages
    this.myGroup.markAllAsTouched();

    if (this.myGroup.valid) {
      console.log('Form Submitted and is Valid:', this.myGroup.value);
      this.dialogRef.close("Update"); // Return the form data on success
    } else {
      console.warn('Form is invalid. Please check the fields.');
      return; // Stop execution if the form is invalid
    }
  }

  loadMockProjects() {
    this.projects = [
      { ProjectId: 1, ProjectCode: 'P001', ProjectName: 'Demo Project A' },
      { ProjectId: 2, ProjectCode: 'P002', ProjectName: 'Demo Project B' },
      { ProjectId: 3, ProjectCode: 'P003', ProjectName: 'Demo Project C' }
    ];
  }

  close(): void {
    this.dialogRef.close();
  }
}