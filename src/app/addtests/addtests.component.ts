import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
class NotificationService {
  success(msg: string) { alert(`Success: ${msg}`); }
  error(msg: string) { alert(`Error: ${msg}`); }
}
 
@Component({
  selector: 'app-addtests',
  templateUrl: './addtests.component.html',
  styleUrls: ['./addtests.component.scss']
})
export class AddtestsComponent implements OnInit {
 
  document: FormGroup;
  isSubmitting = false;
  ImagesName: string | null = null;
 
  projects = [
    { ProjectId: 1, Name: 'Project Alpha' },
    { ProjectId: 2, Name: 'Project Beta' }
  ];
 
  Products = [
    { ProductId: 1, Name: 'Product X' },
    { ProductId: 2, Name: 'Product Y' }
  ];
 
  departments = [
    { DepartmentId: 1, Name: 'HR' },
    { DepartmentId: 2, Name: 'IT' }
  ];
 
  Sections = [
    { SectionId: 1, Name: 'Section A' },
    { SectionId: 2, Name: 'Section B' }
  ];
 
  SectionLeads = [
    { LeadId: 1, Name: 'John Doe' },
    { LeadId: 2, Name: 'Jane Smith' }
  ];
 
  showFileInput = true; // Controls file input visibility
 
  constructor(
    public dialogRef: MatDialogRef<AddtestsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    //private _notify: NotificationService
  ) {}
 
  ngOnInit(): void {
    this.formInit(this.data || null);
  }
 
  close() {
    this.dialogRef.close();
  }
 
  formInit(data: any) {
    this.document = this.fb.group({
      TestId: new FormControl({ value: data?.TestId || '', disabled: true }),
      ProjectId: new FormControl(data?.ProjectId || '', Validators.required),
      ProductId: new FormControl(data?.ProductId || '', Validators.required),
      Subject: new FormControl(data?.Subject || '', Validators.required),
      Description: new FormControl(data?.Description || '', Validators.required),
      DocumentPath: new FormControl(data?.DocumentPath || ''),
      DepartmentId: new FormControl(data?.DepartmentId || '', Validators.required),
      SectionId: new FormControl(data?.SectionId || '', Validators.required),
      LeadId: new FormControl(data?.LeadId || '', Validators.required),
      myfile: ['']
    });
 
    this.showFileInput = !this.document.get('DocumentPath')?.value;
    if (this.document.get('DocumentPath')?.value) {
      this.ImagesName = this.document.get('DocumentPath')?.value.split('/').pop();
    }
  }
 
  upsertOnepagerDocument() {
    this.isSubmitting = true;
    this.document.markAllAsTouched();
 
    if (this.document.valid) {
      const formValue = this.document.getRawValue();
      // Return the form data (simulate save)
      this.dialogRef.close(formValue);
    } else {
      //this._notify.error('Please fill all required fields.');
      this.isSubmitting = false;
    }
  }
 
  onFileSelect(event: any) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (!allowedTypes.includes(file.type)) {
       // this._notify.error('Please upload only image/jpeg or image/png files.');
        return;
      }
      this.document.get('myfile')?.setValue(file);
      this.onFormSubmit();
    }
  }
 
  onFormSubmit() {
    const uploadFile = this.document.get('myfile')?.value;
    if (uploadFile) {
      setTimeout(() => {
        const fakeUrl = `assets/uploads/${uploadFile.name}`;
        this.document.get('DocumentPath')?.setValue(fakeUrl);
        this.ImagesName = uploadFile.name;
        this.showFileInput = false;
        //this._notify.success('File uploaded successfully (simulated).');
      }, 500);
    }
  }
 
  removeLogo() {
    this.document.controls.DocumentPath.setValue(null);
    this.ImagesName = null;
    this.showFileInput = true;
  }
 
  toggleFileInput(value: boolean) {
    this.showFileInput = value;
    if (value) {
      this.document.get('myfile')?.setValue(null);
      this.document.controls.DocumentPath.setValue(null);
      this.ImagesName = null;
    }
  }
 
 
}
 