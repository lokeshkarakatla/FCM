import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-two',
  templateUrl: './why-two.component.html',
  styleUrls: ['./why-two.component.scss']
})
export class WhyTwoComponent implements OnInit {

  data: any;
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

  constructor(
    //public dialogRef: MatDialogRef<AddValidationComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, public router: Router) {
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

  ngOnInit() {
    this.getAllCodes();
    if (this.data != null) {
      this.editLookupGroup.controls['LookupId'].setValue(this.data['LookupId']);
      this.editLookupGroup.controls['LookupName'].setValue(this.data['LookupName']);
      this.editLookupGroup.controls['CodeMasterId'].setValue(this.data['CodeMasterId']);
    }
    this.addNewInputField(5);
  }

  getAllCodes() {
    // this._lookupService.GetAllCodes().subscribe((data) => {
    //   this.codes = data['Data'];
    // })
  }

  close(): void {
    //this.dialogRef.close();
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
    this.router.navigate(['/app/prtsnavbar/actionmoniter-two']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/d1']);
  }
  action() {
    this.router.navigate(['/app/prtsnavbar/why']);
  }

}