import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Router } from '@angular/router';
enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };
@Component({
  selector: 'app-base-info-one-pager',
  templateUrl: './base-info-one-pager.component.html',
  styleUrls: ['./base-info-one-pager.component.scss']
})
export class BaseInfoOnePagerComponent implements OnInit {

  isRepeted: boolean = false;
  check_box_type = CheckBoxType;

  currentlyChecked?: CheckBoxType;


  next() {
    this.router.navigate(['/app/prtsnavbar/moniter']);
  }
  data: any;
  addLookupGroup: FormGroup;
  editLookupGroup: FormGroup;
  lookup: any = false;
  codes: any = [];
  colors: Array<any> = [{ 'code': 'green', 'name': 'Green', 'colorClass': 'dot_green' }, { 'code': 'blue', 'name': 'Blue', 'colorClass': 'dot_blue' }, { 'code': 'grey', 'name': 'Grey', 'colorClass': 'dot_grey' }, { 'code': 'red', 'name': 'Red', 'colorClass': 'dot_red' }];
  pageGroup?: FormGroup;
  deleteLookupItemValue: any;
  index = 10;
  private _lookupService: any;
  alertService: any;


  constructor(public router: Router,
    //public dialogRef: MatDialogRef<AddValidationComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, ) {

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

  ngOnInit() {
    this.getAllCodes();
    if (this.data != null) {
      this.editLookupGroup.controls['LookupId'].setValue(this.data['LookupId']);
      this.editLookupGroup.controls['LookupName'].setValue(this.data['LookupName']);
      this.editLookupGroup.controls['CodeMasterId'].setValue(this.data['CodeMasterId']);
    }
    this.addNewInputField(4);
  }

  getAllCodes() {

  }

  close(): void {

  }

  saveLookup() {
    // if(this.data != null)
    {
      if (this.editLookupGroup.valid) {
        // this._lookupService.EditLookups(this.editLookupGroup.value).subscribe(res => {
        //   if(res != null) {
        //     this.dialogRef.close(res['Data']);
        //   }
        //   else{
        //     this.alertService.createAlert(res['Message'], 0);
        //   }
        // });
      }
    }

    // else{
    //   if (this.addLookupGroup.valid) {
    //     this._lookupService.AddLookups(this.addLookupGroup.value).subscribe(res => {
    //       if(res != null) {
    //         this.dialogRef.close(res['Data']);
    //       }
    //       else{
    //         this.alertService.createAlert(res['Message'], 0);
    //       }
    //     });
    //   }

    // }
  }

  initTechnologyFields(): FormGroup {
    return this.fb.group({
      LookupId: [],
      LookupName: ['', Validators.required]
    });
  }


  addNewInputField(val: number): void {
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

  fnLookupDeleteItemModal(i: number) {
    this.index = i;
    this.removeInputField(this.index);
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
    control.removeAt(i);
  }
  repeted(event: any) {
    this.isRepeted = !this.isRepeted;
  }

  repeted1(event: any) {

  }
  repeted2(event: any) {

  }


  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }

 goBack() {
  this.router.navigate(['app/prts-part/prtsissuestatus/one-pager']);
}

}
