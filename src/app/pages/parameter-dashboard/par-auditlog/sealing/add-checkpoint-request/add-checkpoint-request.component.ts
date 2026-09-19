import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-checkpoint-request',
  templateUrl: './add-checkpoint-request.component.html',
  styleUrls: ['./add-checkpoint-request.component.scss']
})
export class AddCheckpointRequestComponent implements OnInit {

  addLookupGroup: FormGroup;
  editLookupGroup: FormGroup;
  addStep = 1;

  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCheckpointRequestComponent>,
  ) {
    // console.log(data);
    this.addLookupGroup = this.fb.group({
      CodeMasterId: new FormControl(''),
      lookupNameDetails: this.fb.array([
        this.initTechnologyFields()
      ])
    });
    this.editLookupGroup = this.fb.group({
      LookupId: new FormControl(''),
      CodeMasterId: new FormControl(''),
      LookupName: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
    this.addNewInputField(3);
  }
  addNewInputField(val): void {
    console.log(val, "test")

    if (val > 0) {
      for (let i = 0; i < val; i++) {
        console.log("test")

        const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
        control.push(this.initTechnologyFields());
      }
    }
    else {
      const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
      control.push(this.initTechnologyFields());
    }
  }

  changeAddStep(value) {
    this.addStep = value;
  }

  initTechnologyFields(): FormGroup {
    return this.fb.group({
      LookupId: [],
      LookupName: ['', Validators.required]
    });
  }

  close() {
    this.dialogRef.close();
  }

}

