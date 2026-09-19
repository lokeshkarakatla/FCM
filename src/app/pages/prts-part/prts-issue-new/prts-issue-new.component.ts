import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };

@Component({
  selector: 'app-prts-issue-new',
  templateUrl: './prts-issue-new.component.html',
  styleUrls: ['./prts-issue-new.component.scss']
})
export class PrtsIssueNewComponent implements OnInit {

  check_box_type = CheckBoxType;
  isRepeted: boolean = true;
  addStep = 1;
  currentlyChecked?: CheckBoxType;
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

  constructor(
    //@Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    public fb: FormBuilder,
    private _location: Location) {
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
  this.getAllCodes();

  if (this.data != null) {
    this.editLookupGroup.controls['LookupId'].setValue(this.data['LookupId']);
    this.editLookupGroup.controls['LookupName'].setValue(this.data['LookupName']);
    this.editLookupGroup.controls['CodeMasterId'].setValue(this.data['CodeMasterId']);
  }

  this.addNewInputField(3);

  // ✅ ADD THIS PART
  this.filteredMachines = [...this.machines];

  this.searchCtrl.valueChanges.subscribe(search => {
    this.filteredMachines = this.machines.filter(machine =>
      machine.viewValue.toLowerCase().includes(search?.toLowerCase() || '')
    );
  });
}

  


  getAllCodes() {
    // this._lookupService.GetAllCodes().subscribe((data) => {
    //   this.codes = data['Data'];
    // })
  }

  // close(): void {
  //   this.dialogRef.close();
  // }

  saveLookup() {
    // if(this.data != null)
    {
      if (this.editLookupGroup.valid) {

      }
    }


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

  fnLookupDeleteItemModal(i: number, item: any): void {
    this.index = i;
    this.removeInputField(this.index);
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
    control.removeAt(i);
  }
  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }
  repeted(event: any) {
    this.isRepeted = !this.isRepeted;
  }
  changeAddStep(value: number) {
    this.addStep = value;
  }
  goback() {
    //this._location.back();

    this.router.navigate(['/app/prts/gridview']);

  }
  close() {

  }

  searchCtrl = new FormControl();

  machines = [
  { value: 'MCH-101', viewValue: 'CNC Lathe Machine' },
  { value: 'MCH-102', viewValue: 'Hydraulic Press' },
  { value: 'MCH-103', viewValue: 'Injection Molding Machine' },
  { value: 'MCH-104', viewValue: 'Welding Robot' },
  { value: 'MCH-105', viewValue: 'Packaging Line 3' }
];

filteredMachines = [...this.machines];


}
