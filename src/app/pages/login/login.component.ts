import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { users } from '../helpers/data';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public settings: any;

  passwordType: string = 'password';
  passwordShown: boolean = true;
  alertService: any;
  data: any[] = users;

  constructor(public appSettings: AppSettings, public fb: FormBuilder, public router: Router, public dialog: MatDialog) {
    this.settings = this.appSettings.settings;
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  public togglePassword() {
    this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
  }

  public onSubmit(values) {

    console.log(values)
    if (this.form.valid) {
      for (let i = 0; i < this.data.length; i++) {
        if (values.email === 'admin@optionmatrix.com' &&
          values.password === 'admin@123') {
          let userToken = btoa(encodeURIComponent(this.data[i]['email']))
          console.log((this.data[i].userId))
          localStorage.setItem('userToken', userToken)
          localStorage.setItem('userId', JSON.stringify(this.data[i].userId))
          if (this.data[i]['isClient']) {
            localStorage.setItem('isClient', JSON.stringify(true))
            this.router.navigate(['/app/client-login']);
          }
          else {
            localStorage.setItem('isClient', JSON.stringify(false))
            this.router.navigate(['/app/complaints/radar']);
          }


          return;
        }
      }
      alert("Wrong E-mail Id or Password");
      //True if all the fields are filled
    }
  }

  openRegistrationDialog() {
    this.dialog.open(LoginComponent, {
      height: 'auto',
      width: '600px'
    });
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
    localStorage.setItem('userType', '');
  }
}
