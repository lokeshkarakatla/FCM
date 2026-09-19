  import { Component, Inject, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

  @Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
  })
  export class EditUserComponent implements OnInit {
    isSubmitting = false;
    user: any;
    roles: any = [];
    myGroup: FormGroup;
    users: any;
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    service: any;
    alertService: any;

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<EditUserComponent> ,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        if (this.data == null) {
          this.myGroup = this.fb.group({
            UserId: new FormControl(''),
            UserName: new FormControl('', Validators.compose([Validators.required])),
            UserEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            UserPhone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
            RoleId: new FormControl('', Validators.compose([Validators.required])),
             DepartmentId: new FormControl('', Validators.compose([Validators.required])),
            RoleName: new FormControl(''),
          });
        }
        else {
          this.myGroup = this.fb.group({
            UserId: new FormControl(''),
            UserName: new FormControl(this.data.UserName, Validators.compose([Validators.required])),
            UserEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
            UserPhone: new FormControl(this.data.UserPhone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
            RoleId: new FormControl(this.data.RoleId, Validators.compose([Validators.required])),
            RoleName: new FormControl(this.data.RoleName, Validators.compose([Validators.required]))
          });
        }
    }

    

    ngOnInit() {
      console.log(this.data);
      this.service.GetAllUsers().subscribe(data => {
        if (data != null) {
          this.users = data['Data'];

        }
      });
    
      this.getAllRoles();
    // this.GetPermanentEmployees();
    }
    options: Array<any> = [
      { RoleName : "Data Collector", RoleId:1,Agency:'Research Development',Manager:'Navin'},
      { RoleName: "Field Coordinator", RoleId: 2, Agency: 'Quality Assurance', Manager: 'SaiKumar' },
      { RoleName: "Field Monitor", RoleId: 3, Agency: 'Maintenance', Manager: 'Satya' },
      { RoleName: "Supervisors", RoleId: 4, Agency: 'Inspection', Manager: 'Gaddam' },
       { RoleName: "Business Analyst", RoleId: 4, Agency: 'Supply Chain', Manager: 'Gaddam' },
    ]
    checkDuplicateUser(val: any) {

      if (this.users.length == 0) {
        this.setvalues(val);
      }

      else {
        this.users.forEach(element => {
          if (element.UserName == val.UserName) {
            this.alertService.createAlert("User Already Exists", 0);
            this.myGroup.invalid;
            // this.close(element);
          }
          else {
            this.setvalues(val);
          }

        });
      }

    }

    setvalues(val: any) {
      this.myGroup = this.fb.group({
        UserId: new FormControl(val.UserId, Validators.compose([Validators.required])),
        UserName: new FormControl(val.UserName, Validators.compose([Validators.required])),
        UserEmail:new FormControl(val.UserEmail, Validators.compose([Validators.required, Validators.email])),
        UserPhone: new FormControl(val.UserPhone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        RoleId: new FormControl(val.RoleId, Validators.compose([Validators.required]))
      });
    }
    getAllRoles() {
      this.service.GetAllRoles().subscribe(res => {
        if (res['Success'] == true) {
          this.options = res['Data'];
        }
        else {
          this.alertService.createAlert(res['Message'], 0);
        }
      });
    }

    permanentEmployeeDetails: any;

    // GetPermanentEmployees() {
    //   this.service.GetPermanentEmployees().subscribe(res => {
    //     if (res['Success'] == true) {
    //       this.permanentEmployeeDetails = res['Data'];
    //     }
    //     else {
    //       this.alertService.createAlert(res['Message'], 0);
    //     }
    //   });
    // }

    upsertuser() {
      console.log(this.data);
      if (this.data == null) {
        var list = {
          UserId: null,
          UserName: this.myGroup.value.UserName,
          UserEmail: this.myGroup.value.UserEmail,
          UserPhone: this.myGroup.value.UserPhone,
          RoleId: this.myGroup.value.RoleId,
          CreatedBy: localStorage.getItem('UserName'),
          result: null
        }
        console.log(list);
        this.service.UpsertUser(list).subscribe(data => {
          if (data != null) {
            if (data['Success'] == true) {
              this.alertService.createAlert('User Added Successfully', 1);
              this.dialogRef.close("SAVE")
            }
            else {
              this.alertService.createAlert(data['Message'], 0);
            }
          }
        });
      }
      else {
        var list = {
          UserId: this.data.UserId,
          UserName: this.myGroup.value.UserName,
          UserEmail: this.myGroup.value.UserEmail,
          UserPhone: this.myGroup.value.UserPhone,
          RoleId: this.myGroup.value.RoleId,
          CreatedBy: localStorage.getItem('UserName'),
          result: null
        }
        this.service.UpsertUser(list).subscribe(data => {
          if (data != null) {
            if (data['Success'] == true) {
              this.alertService.createAlert('User Updated Successfully', 1);
              this.dialogRef.close("SAVE")
            }
            else {
              this.alertService.createAlert(data['Message'], 0);
            }
          }
        });
      }
      this.myGroup.reset();
    }

    close(data): void {
      this.dialogRef.close("CANCEL");
    }

    saveData() {
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
      return ((k > 64 && k < 91) || (k > 96 && k < 123));
    }
    alphaNumeric(event) {
      let k;
      k = event.charCode;
      return ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123));
    }

  }
