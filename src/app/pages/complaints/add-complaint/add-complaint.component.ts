import { Component, OnInit, ViewChild } from '@angular/core';
import Stepper from 'bs-stepper';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.scss']
})
export class AddComplaintComponent  {

  @ViewChild('stepper') stepperElement: any;
  bsStepperInstance!: Stepper;

  baseInfoFormGroup!: FormGroup;
  overviewFormGroup!: FormGroup;
  // dialogRef: any;
  constructor(private fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<AddComplaintComponent>) { }

  ngOnInit() {
    const stepperElement = document.querySelector('#stepper');
    if (stepperElement) {
      this.bsStepperInstance = new Stepper(stepperElement, {
        linear: false,
        animation: true
      });
    }

    // this.baseInfoFormGroup = this.fb.group({
    //   reference: [''],
    // subject: [''],
    // problemStatement: [''],
    // continent: [''],
    // country: [''],
    // model: [''],
    // targetDate: [''],
    // failureDate: [''],
    // criticality: [''],
    // detailedStatus: [''],
    // distributorName: [''],
    // serialNo: ['']
    // });

    // this.overviewFormGroup = this.fb.group({
    //    status: [''],
    // expectedFinishDate: [''],
    // actualFinishDate: [''],
    // department: [''],
    // lead: [''],
    // feedback: ['']
    // });
  }

  close() {
    this.dialogRef.close();
  }

  goBack() {
    this.router.navigate(['/app/complaints']);
  }

  onSubmit() {
    console.log('Form submitted successfully');
    this.router.navigate(['/app/complaints']);
  }

  activeStep = 1; // default active

}
