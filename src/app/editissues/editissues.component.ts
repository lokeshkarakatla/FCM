import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddInterimComponent } from '../add-interim/add-interim.component';
import { AddactsComponent } from '../addacts/addacts.component';
import { AddrcaComponent } from '../addrca/addrca.component';

@Component({
  selector: 'app-editissues',
  templateUrl: './editissues.component.html',
  styleUrls: ['./editissues.component.scss']
})
export class EditissuesComponent implements OnInit {
  form!: FormGroup;
  addStep = 1;
  updateStep = 1;

  projects = ['Project A', 'Project B'];
  products = ['Product X', 'Product Y'];
  tests = ['Test 1', 'Test 2'];
  statuses = ['Open', 'Closed'];
  categories = ['Category 1', 'Category 2'];

  tractors: any;
  formFields: any;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditissuesComponent>,
    public dialog: MatDialog
  ) {}

ngOnInit(): void {
  this.form = this.fb.group({
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
    IsNew: [null],
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
}

  close(): void {
    this.dialogRef.close();
  }

  changeAddStep(value: number): void {
    this.addStep = value;
  }

  changeUpdateStep(value: number): void {
    this.updateStep = value;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    console.log('Selected file:', file);
  }

  AddInterim(value: any): void {
    this.dialog.open(AddInterimComponent, {
      data: {},
      height: 'auto',
      width: '600px',
    });
  }

  fnUpdateInterim(data: any): void {
    // Placeholder for future logic
  }

  AddRCA(): void {
    this.dialog.open(AddrcaComponent, {
      height: 'auto',
      width: '600px',
      data: {}
    });
  }

  AddAction(): void {
    this.dialog.open(AddactsComponent, {
      height: 'auto',
      width: '600px',
      data: {}
    });
  }
}
