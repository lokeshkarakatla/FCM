import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-prts-document',
  templateUrl: './add-prts-document.component.html',
  styleUrls: ['./add-prts-document.component.scss']
})
export class AddPrtsDocumentComponent implements OnInit {

  addLookupGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddPrtsDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addLookupGroup = this.fb.group({
      lookupNameDetails: this.fb.array([ this.initDocumentField() ])
    });
  }

  ngOnInit(): void {}

  // FormArray getter for template
  get lookupControls() {
    return (this.addLookupGroup.get('lookupNameDetails') as FormArray).controls;
  }

  initDocumentField(): FormGroup {
    return this.fb.group({
      LookupName: ['', Validators.required]
    });
  }

  addNewInputField() {
    const control = this.addLookupGroup.get('lookupNameDetails') as FormArray;
    control.push(this.initDocumentField());
  }

  removeInputField(index: number) {
    const control = this.addLookupGroup.get('lookupNameDetails') as FormArray;
    if (control.length > 1) {
      control.removeAt(index);
    }
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    if (this.addLookupGroup.valid) {
      console.log(this.addLookupGroup.value);
      this.dialogRef.close(this.addLookupGroup.value);
    }
  }

  viewDocument(index: number) {
  const docValue = (this.addLookupGroup.get('lookupNameDetails') as FormArray).at(index).get('LookupName')?.value;
  console.log('View Document:', docValue);
  // You can open a modal or navigate to view the document here
  alert('Viewing Document: ' + docValue);
}

}
