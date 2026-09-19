import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prts-pillar',
  templateUrl: './add-prts-pillar.component.html',
  styleUrls: ['./add-prts-pillar.component.scss']
})
export class AddPrtsPillarComponent implements OnInit {
  //  data: any;
  addLookupGroup: FormGroup;
  editLookupGroup: FormGroup;
  lookup: any = false;
  codes: any = [];
  colors: Array<any> = [{ 'code': 'green', 'name': 'Green', 'colorClass': 'dot_green' }, { 'code': 'blue', 'name': 'Blue', 'colorClass': 'dot_blue' }, { 'code': 'grey', 'name': 'Grey', 'colorClass': 'dot_grey' }, { 'code': 'red', 'name': 'Red', 'colorClass': 'dot_red' }];
  pageGroup: FormGroup;
  deleteLookupItemValue: any;
  index: any;
  private _lookupService: any;
  alertService: any;
  myGroup: FormGroup;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public dialogRef: MatDialogRef<AddPrtsPillarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
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
    if (this.data != null) {
      this.editLookupGroup.controls['LookupId'].setValue(this.data['LookupId']);
      this.editLookupGroup.controls['LookupName'].setValue(this.data['LookupName']);
      this.editLookupGroup.controls['CodeMasterId'].setValue(this.data['CodeMasterId']);
    }
    this.addNewInputField(5);
  }

  close(): void {
    this.dialogRef.close();
  }

  initTechnologyFields(): FormGroup {
    return this.fb.group({
      LookupId: [],
      LookupName: ['', Validators.required]
    });
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

  fnLookupDeleteItemModal(i) {
    this.index = i;
    this.removeInputField(this.index);
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
    control.removeAt(i);
  }
  next() {
    this.router.navigate(['/app/prtsnavbar/actionmoniter2']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/d1']);
  }
  action() {
    this.router.navigate(['/app/prtsnavbar/why']);
  }


}
