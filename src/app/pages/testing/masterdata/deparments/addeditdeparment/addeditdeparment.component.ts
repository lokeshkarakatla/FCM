import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditdeparment',
  templateUrl: './addeditdeparment.component.html',
  styleUrls: ['./addeditdeparment.component.scss']
})
export class AddeditdeparmentComponent implements OnInit {

  isSubmitting = false;
  roles: any;
  myGroup: FormGroup;
  users: any[];
  agencies: any[];
  managers: any[];

  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddeditdeparmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private _MasterDataService: MasterDataService
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.formInit(this.data)
    } else {
      this.formInit(null)
    }
  }

  upsertDepartment() {
    this.isSubmitting = true;
    if (this.myGroup.valid) {
      // this._MasterDataService.UpsertDepartment(this.myGroup.value).subscribe((data: any) => {
      //   if (data['Success']) {
      //     this.dialogRef.close("Update");
      //   }
      // })
    }
  }

  formInit(data: any) {
    this.myGroup = this._fb.group({
      DepartmentId: new FormControl(data?.DepartmentId),
    //  DepartmentName: new FormControl(data?.DepartmentName, Validators.compose([Validators.required])),
    DepartmentName: new FormControl(data?.DepartmentName, Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9][a-zA-Z0-9\- &]*[a-zA-Z0-9]$")])),
       
  });
  }

  // convienience getter for form
  get f() { return this.myGroup.controls }

  close(): void {
    this.dialogRef.close();
  }
}