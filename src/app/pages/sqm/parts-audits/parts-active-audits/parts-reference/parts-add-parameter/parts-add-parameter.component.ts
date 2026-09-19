import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-parts-add-parameter',
  templateUrl: './parts-add-parameter.component.html',
  styleUrls: ['./parts-add-parameter.component.scss']
})
export class PartsAddParameterComponent implements OnInit {

  addStep = 1;
  isEditMode: boolean = false;
  localData: any = {}; // Holds the form data

  constructor(
    public dialogRef: MatDialogRef<PartsAddParameterComponent>,
    // @Optional() prevents errors if the dialog is opened without passing data
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    // If data was passed in, we are in Edit Mode. Clone the data so we don't 
    // modify the table row directly until 'Save' is clicked.
    if (this.data) {
      this.isEditMode = true;
      this.localData = { ...this.data }; 
    } else {
      this.isEditMode = false;
      this.localData = {}; // Empty object for Add Mode
    }
  }

  close() {
    this.dialogRef.close();
  }

  changeAddStep(value: any) {
    this.addStep = value;
  }

  save() {
    // Pass the filled/updated localData back to the parent component
    this.dialogRef.close(this.localData);
  }
}