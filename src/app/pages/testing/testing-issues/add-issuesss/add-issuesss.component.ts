import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddInterimComponent } from 'src/app/add-interim/add-interim.component';
import { AddactsComponent } from 'src/app/addacts/addacts.component';
import { AddrcaComponent } from 'src/app/addrca/addrca.component';
import { MatCheckboxChange } from '@angular/material/checkbox';

// import { AddRcaComponent } from 'src/app/add-rca/add-rca.component';
import { ReactiveFormsModule } from '@angular/forms';

 
@Component({
  selector: 'app-add-issuesss',
  templateUrl: './add-issuesss.component.html',
  styleUrls: ['./add-issuesss.component.scss']
})
export class AddIssuesssComponent implements OnInit {
  addStep = 1;
  updateStep = 1
  // form!: FormGroup;
 
  projects = ['Project A', 'Project B'];
  products = ['Product X', 'Product Y'];
  tests = ['Test 1', 'Test 2'];
  statuses = ['Open', 'Closed'];
  categories = ['Category 1', 'Category 2'];
tractors: any;
formFields: any;
  public reviewIsDone: boolean = false;

 
  constructor(
    private fb: FormBuilder,
     public dialogRef: MatDialogRef<AddIssuesssComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //  public dialogRef: MatDialogRef<AddIssuesssComponent>,
 
    // public fb: FormBuilder,
    public dialog: MatDialog,
 
  ) {}
 
 
ngOnInit(): void {
    // A single FormGroup for all steps
    this.form = this.fb.group({
      // Step 1 Controls
      isNew: [null, Validators.required],
      project: ['', Validators.required],
      equipmentId: ['', Validators.required],
      issueDescription: ['', Validators.required],
      partCode: ['', Validators.required],
      partDescription: ['', Validators.required],
      severity: [null], // Optional
      probability: [null], // Optional
      context: [''], // Optional
      failureHours: ['', Validators.required],
      updationHours: [''], // Optional
      rootCauseAnalysis: ['', Validators.required],
      photograph: [null], // Optional

      // Step 2 Controls
      responsibleSection: [null], // Optional
      subGroup: [null], // Optional
      sectionLead: [null], // Optional
      orcStatus: [null], // Optional
      projectLead: [null], // Optional
      failureEffect: [null], // Optional
      relevantDocument: [null], // Optional

      // Step 3 Controls
      category: [null], // Optional
      currentResponsibility: [null], // Optional
      targetDate: [null], // Optional
      reviewDone: [false], // Optional
      currentStatus: [''], // Optional
    });

    // If you are updating an existing issue, patch the form data
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }
 

  onReviewChange(event: MatCheckboxChange): void {
    this.reviewIsDone = event.checked;
  }
 
public close() : void {
    this.dialogRef.close();
  }
 
 
  changeAddStep(value: number): void {
    this.addStep = value;
  }
   changeUpdateStep(value: any) {
    this.updateStep = value;
  }
 
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    // Optional: store it or attach to FormGroup if needed
    console.log('Selected file:', file);
  }
 form: FormGroup = this.fb.group({
  context: ['Admin', Validators.required],
  project: ['', Validators.required],
  issueDescription: ['', Validators.required],
  partDescription: ['', Validators.required],
  tractorId: ['', Validators.required],
  failureHours: ['', Validators.required],
  updationHours: [''],
  implement: ['', Validators.required],
  partCode: ['', Validators.required],
  l1rca: ['', Validators.required],
  CategoryId: ['', Validators.required],
  CurrentResponsibilityId: ['', Validators.required],
  IsNew: [null], // 🔥 Add this
  ORCStatus: [null],
  ResponsibleSectionId: [null],
  SubGroupId: [null],
  ResponsibleSectionLeadId: [''],
  ProjectVILead: [null],
  ScoreMatrix: [null],
  Severity: [''],
  Probability: [null],
  TargetDate: [null],
  ConcernedAcknowledgement: [null],
  CurrentStatus: ['']
});
 
 
  AddInterim(value:any) {
    let dialogRef = this.dialog.open(AddInterimComponent, {
      data:{} ,
      height: 'auto',
      width: '600px',
    });
  }
 
 
  fnUpdateInterim(data: any) {
 
  }
 
  get f() {
  return this.form.controls;
}
 
 
 
  AddRCA() {
  this.dialog.open(AddrcaComponent, {
    height: 'auto',
    width: '600px',
    data: {} // optional: pass empty object if AddrcaComponent expects a `data` input
  });
}
 AddAction() {
  this.dialog.open(AddactsComponent, {
    height: 'auto',
    width: '650px',
    data: {} // optional: pass empty object if AddrcaComponent expects a `data` input
  });
}
 
}