import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eval-five-w-two-h',
  templateUrl: './five-w-two-h.component.html',
  styleUrls: ['./five-w-two-h.component.scss']
})
export class FiveWTwoHComponent implements OnInit {

  // 5W2H Analysis fields (from img2)
  what: string = '';
  where: string = '';
  when: string = '';
  who: string = '';
  why: string = '';
  how: string = '';
  howMuch: string = '';

  // Cascading WHY Analysis FormArray (from img3)
  addLookupGroup: FormGroup;

  // Root Cause Analysis (from img3)
  rootCause: string = '';

  isSaved: boolean = false;

  constructor(private fb: FormBuilder) {
    this.addLookupGroup = this.fb.group({
      CodeMasterId: new FormControl(''),
      lookupNameDetails: this.fb.array([
        this.initTechnologyFields(),
        this.initTechnologyFields(),
        this.initTechnologyFields(),
        this.initTechnologyFields(),
        this.initTechnologyFields()
      ])
    });
  }

  ngOnInit(): void {}

  get lookupNameDetails(): FormArray {
    return this.addLookupGroup.get('lookupNameDetails') as FormArray;
  }

  initTechnologyFields(val: string = ''): FormGroup {
    return this.fb.group({
      LookupId: [],
      LookupName: [val]
    });
  }

  addNewInputField(count: number = 1): void {
    for (let i = 0; i < count; i++) {
      this.lookupNameDetails.push(this.initTechnologyFields());
    }
  }

  fnLookupDeleteItemModal(i: number): void {
    if (this.lookupNameDetails.length > 1) {
      this.lookupNameDetails.removeAt(i);
    }
  }

  save(): void {
    this.isSaved = true;
    console.log('5W2H & Root Cause saved', {
      fiveWTwoH: {
        what: this.what,
        where: this.where,
        when: this.when,
        who: this.who,
        why: this.why,
        how: this.how,
        howMuch: this.howMuch
      },
      cascadingWhy: this.lookupNameDetails.value,
      rootCause: this.rootCause
    });

    setTimeout(() => {
      this.isSaved = false;
    }, 3000);
  }
}
