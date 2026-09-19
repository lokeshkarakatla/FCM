import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
 
@Component({
  selector: 'app-addresparas',
  templateUrl: './addresparas.component.html',
  styleUrls: ['./addresparas.component.scss']
})
export class AddresparasComponent implements OnInit {
 
  isSubmitting = false;
  roles = [];
  myGroup: FormGroup;
  users: any[];
  agencies: any[];
  managers: any[];
 
  constructor(
    public _fb: FormBuilder,
    public dialogRef: MatDialogRef<AddresparasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   // private _MasterDataService: MasterDataService
  ) {
  }
 
  ngOnInit() {
    this.fnGetUsersDD();
    this.data ? (() => {
      this.formInit(this.data);
      this.myGroup.controls['respLeads'].setValue(this.data?.UsersId.split(",").map(Number));
    })() : this.formInit(null);
  }
 
  upsertRespSection() {
    this.isSubmitting = true;
    if (this.myGroup.valid) {
      // this._MasterDataService.UpsertRespSection(this.myGroup.value).subscribe((data: any) => {
      //   if (data['Success']) {
      //     this.dialogRef.close("Update");
      //   }
      // })
    }
  }
 
  fnGetUsersDD() {
    // this._MasterDataService.GetUserDD().subscribe((data: any) => {
    //   if (data['Success']) {
    //     this.users = data['Data'];
    //   }
    // })
  }
 
  formInit(data: any) {
    this.myGroup = this._fb.group({
      respSectionId: new FormControl(data?.respSectionId),
    //  respSectionName: new FormControl(data?.respSectionName, Validators.compose([Validators.required])),
   // respSectionName: new FormControl(data?.respSectionName, Validators.compose([Validators.required, Validators.pattern("^\\s*<\\s*(.*?)\\s*>\\s*$")])),
    respSectionName: new FormControl(data?.respSectionName, Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9][a-zA-Z0-9\- ]*[a-zA-Z0-9]$")])),
   respLeads: new FormControl(data?.UsersId, Validators.required),
    });
  }
 
  // convienience getter for form
  get f() { return this.myGroup.controls }
 
  close(): void {
    this.dialogRef.close();
  }
}
 
 