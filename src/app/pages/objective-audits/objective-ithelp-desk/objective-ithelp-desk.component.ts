import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objective-ithelp-desk',
  templateUrl: './objective-ithelp-desk.component.html',
  styleUrls: ['./objective-ithelp-desk.component.scss']
})
export class ObjectiveIthelpDeskComponent implements OnInit {

  itHelpDesk: FormGroup;
  isSubmitting = false;


  constructor(
    public dialogRef: MatDialogRef<ObjectiveIthelpDeskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.itHelpDesk = this.fb.group({
      Subject: new FormControl(),
      Description: new FormControl()
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.itHelpDesk.controls;
  }

  Send() {
    this.isSubmitting = true;
    if (this.itHelpDesk.valid) {
      // Static simulation of sending the data
      console.log('Form submitted with values:', this.itHelpDesk.value);

      // Reset form after submission
      this.itHelpDesk.reset();
      this.isSubmitting = false;
    } else {
      console.warn('Form is invalid!');
    }
  }

  close(): void {
    this.dialogRef.close();
  }
  selectedFile: File;

onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}

// Redirect method - change route or open another dialog/component
goToAddFiles() {
  // Example 1: If you're navigating to another route
  this.router.navigate(['/add-files']);

  // Example 2: If you're opening a dialog
  // this.dialog.open(AddFilesComponent);
}

}
