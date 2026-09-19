import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addeditsubgroup',
  templateUrl: './addeditsubgroup.component.html',
  styleUrls: ['./addeditsubgroup.component.scss']
})
export class AddeditsubgroupComponent implements OnInit {

  isSubmitting = false;
  roles: any;
  myGroup: FormGroup;
  users: any[];
  agencies: any[];
  managers: any[];
  respSection: any;

  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddeditsubgroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    //private _MasterDataService: MasterDataService
  ) {
  }

  ngOnInit() {
    this.fnGetRespSectionDD();
    if (this.data) {
      this.formInit(this.data)
    } else {
      this.formInit(null)
    }
  }

  upsertSubGroup() {
    this.isSubmitting = true;
    if (this.myGroup.valid) {
      // this._MasterDataService.UpsertSubGroups(this.myGroup.value).subscribe((data: any) => {
      //   if (data['Success']) {
      //     this.dialogRef.close("Update");
      //   }
      // })
    }
  }

  formInit(data: any) {
    this.myGroup = this._fb.group({
      SubGroupId: new FormControl(data?.SubGroupId),
    //  SubGroupName: new FormControl(data?.SubGroupName, Validators.compose([Validators.required])),
      SubGroupName: new FormControl(data?.SubGroupName, Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9][a-zA-Z0-9\- ]*[a-zA-Z0-9]$")])),
      
    respSectionId: new FormControl(data?.respSectionId, Validators.compose([Validators.required])),
    });
  }

  // convienience getter for form
  get f() { return this.myGroup.controls }
  
  fnGetRespSectionDD() {
    // this._MasterDataService.GetRespSectionDD().subscribe((data: any) => {
    //   if (data['Success']) {
    //     this.respSection = data['Data'];
    //   }
    // })
  }

  close(): void {
    this.dialogRef.close();
  }
}