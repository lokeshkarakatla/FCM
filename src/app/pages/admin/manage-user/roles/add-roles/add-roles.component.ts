import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss']
})
export class AddRolesComponent implements OnInit {
  role: any;
  myGroup: FormGroup;
  isSubmitting: boolean = false;
  service: any;
  alertService: any;

  constructor(public fb: FormBuilder,  @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AddRolesComponent>) {
    this.myGroup = this.fb.group({
      RoleId:new FormControl(''),
      RoleName:new FormControl(null, Validators.compose([Validators.required]))
    })
  }

  ngOnInit() {
    console.log(this.data);
    if(this.data != null) {
      if(this.data['data'] != null) {
        this.role = this.data['data'];
        this.myGroup.controls['RoleId'].setValue(this.role['RoleId']);
        this.myGroup.controls['RoleName'].setValue(this.role['RoleName']);
      }
    }
  }

  Upsertrole(){
    if(this.data = null){
      var list={
        RoleId: null,
        RoleName:this.myGroup.value.RoleName,
        CreatedBy:null,
        result:null
      }
      this.service.UpsertRole(list).subscribe(res=>{
        if(res['Success']==true){
          this.alertService.createAlert('Role Added Successfully', 1);
        }
        else{
          this.alertService.createAlert(res['Message'], 0);
        }
      });
    }
    else{
      var list={
        RoleId: this.myGroup.value.RoleId,
        RoleName:this.myGroup.value.RoleName,
        CreatedBy:null,
        result:null
      }
      this.service.UpsertRole(list).subscribe(res=>{
        if(res['Success']==true){
          this.alertService.createAlert('Role Updated Successfully', 1);
        }
        else{
          this.alertService.createAlert(res['Message'], 0);
        }
      });
    }
   
    this.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  saveData(){
    this.alertService.createAlert('Successfully saved.', 1);
  }

  inputNotAllowed() {
    return false;
  }
  onlyNumbers(event) {
    let k;
    k = event.charCode;
    return ((k > 47 && k < 58));
  }
  onlyAlphabets(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 32);
  }
  alphaNumeric(event) {
    let k;
    k = event.charCode;
    return ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123));
  }

}
