import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-prts',
  templateUrl: './action-prts.component.html',
  styleUrls: ['./action-prts.component.scss']
})
export class ActionPrtsComponent implements OnInit {

    activeTab: string = 'overview';   // default tab

  setTab(tab: string) {
    this.activeTab = tab;
  }

  next() {
    this.router.navigate(['/app/prtsnavbar/moniter']);
  }
  data: any;
  addLookupGroup: FormGroup;
  editLookupGroup: FormGroup;
  lookup: any = false;
  codes: any = [];
  colors: Array<any> = [{ 'code': 'green', 'name': 'Green', 'colorClass': 'dot_green' }, { 'code': 'blue', 'name': 'Blue', 'colorClass': 'dot_blue' }, { 'code': 'grey', 'name': 'Grey', 'colorClass': 'dot_grey' }, { 'code': 'red', 'name': 'Red', 'colorClass': 'dot_red' }];
  pageGroup!: FormGroup;
  deleteLookupItemValue: any;
  index = 10;
  private _lookupService: any;
  alertService: any;

  constructor(public router: Router,
    //public dialogRef: MatDialogRef<AddValidationComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,) {

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

  addNewInputField(): void {
    const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
    control.push(this.initTechnologyFields());
  }

  fnLookupDeleteItemModal(i:any) {
    this.index = i;
    this.removeInputField(this.index);
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.addLookupGroup.controls.lookupNameDetails;
    control.removeAt(i);
  }
}
