import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss']
})
export class ResetPasswordDialogComponent implements OnInit {

  myform: FormGroup;
  isSubmitting = false;
  type : any;
  alertService: any;
  private _userService: any;
hide: any;

  constructor(
    public fb: FormBuilder,public dialogRef: MatDialogRef<ResetPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.myform = this.fb.group({
      UserId: new FormControl(''),
      Password:new FormControl(null, Validators.compose([Validators.required])),
      UserPassword: new FormControl(null, Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
    this.type = this.data.type;
    if (this.data != null) {
      if(false) {
      } 
      else {
        this.myform.controls['UserId'].setValue(this.data.UserId);
        this.myform.controls['Password'].setValue(this.data.Password);
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  saveData() {
    if(this.myform.valid) {
      let password = this.myform.controls['Password'].value;
      let confirmPassword = this.myform.controls['UserPassword'].value;
      if(password != confirmPassword) {
        this.alertService.createAlert('Passwords do not match', 0);
      } 
      else {
        this.isSubmitting = true;
        if(true) {
          this._userService.resetUserPassword(this.myform.value).subscribe(data => {
            if(data != null) {
              this.dialogRef.close(data['Data']);
              if(data['Success'] != null) {
                if(data['Success']) {
                  this.dialogRef.close(data['Data']);
                } 
                else {
                  this.isSubmitting = false;
                }
              }
            }
          });
        } 
    }
    }
    else {
      this.myform.controls['Password'].markAsTouched();
      this.myform.controls['ConfirmPassword'].markAsTouched();
    }
  }
}
