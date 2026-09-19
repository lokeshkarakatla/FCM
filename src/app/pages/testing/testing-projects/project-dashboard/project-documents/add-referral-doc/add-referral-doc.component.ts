import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-referral-doc',
  templateUrl: './add-referral-doc.component.html',
  styleUrls: ['./add-referral-doc.component.scss']
})
export class AddReferralDocComponent implements OnInit {

  addStep = 1;
  isEditMode: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddReferralDocComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    // If data was passed in, we are in Edit Mode. 
    if (this.data) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  close() {
    this.dialogRef.close();
  }

  changeAddStep(value: number) {
    this.addStep = value;
  }

  save() {
    this.dialogRef.close();
  }
  documentTypes: string[] = ['Intake', 'Invoice'];
  selectedType: string = '';
}