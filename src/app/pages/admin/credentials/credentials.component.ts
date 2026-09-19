import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {

 
  constructor(
    public _fb: FormBuilder,
    //public _credentialsService: CredentialsService,
  ) {
    this.formInit()
  }

  myGroup: FormGroup;

  ngOnInit(): void {
    this.getOutlookCredentials();
  }

  /**
   * If the form is valid, then call the UpdateOutlookCredentials function in the credentials service
   * and pass in the form value.
   */
  SaveCredentials() {
    // console.log(this.myGroup.value)
    // if (this.myGroup.valid) {
    //   this._credentialsService.UpdateOutlookCredentials(this.myGroup.value).subscribe(data => {
    //     if (data['Message']) {
    //     }
    //   });
    // }
  }

  /**
   * This function is called when the component is initialized, and it calls a service to get the
   * credentials from the database, and if the credentials are found, it calls the formInit function to
   * initialize the form.
   */

  getOutlookCredentials() {
    // this._credentialsService.GetOutlookCredentials().subscribe(data => {
    //   if (data['Success'])
    //     //this.formInit(data['Data'])
    // })
  }

  /**
   * If the value is not null, then set the value of the form control to the value of the parameter,
   * otherwise set the value of the form control to null.
   */
  formInit() {
    this.myGroup = this._fb.group({
      // Id: new FormControl(val?.Id),
      // Email: new FormControl(val?.Email, Validators.compose([Validators.required])),
      // Password: new FormControl(val?.Password, Validators.compose([Validators.required])),

    });
  }
  // convienience getter for form
  get f() { return this.myGroup.controls; }

}
