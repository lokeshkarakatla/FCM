import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-spl-permissions',
  templateUrl: './spl-permissions.component.html',
  styleUrls: ['./spl-permissions.component.scss']
})
export class SplPermissionsComponent implements OnInit {

  roleId  = null;
  moduleId = 5 ;
  roleName : any;
  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };

  constructor(public router:Router,private _activeRoute: ActivatedRoute, private _location: Location ) {

  }
  
  public items = [
    {"splpermname":"Approve Purchase Indent","value1":true,"value2":true,"value3":true,"value4":true},
    {"splpermname":"Approve Purchase Quotation","value1":true,"value2":true,"value3":true,"value4":true},
    {"splpermname":"Approve Purchase Orde","value1":true,"value2":true,"value3":true,"value4":true},
    {"splpermname":"Approve Service Quotation","value1":true,"value2":true,"value3":true,"value4":true},
    {"splpermname":"Approve Service Indent	","value1":true,"value2":true,"value3":true,"value4":true},
    {"splpermname":"Approve Work Order","value1":true,"value2":true,"value3":true,"value4":true},
    {"splpermname":"Approve GRN","value1":true,"value2":true,"value3":true,"value4":true},
    {"splpermname":"Approve ARN","value1":true,"value2":true,"value3":true,"value4":true},
  ];
  ngOnInit() {
    this._activeRoute.paramMap.subscribe(v => {
      console.log(v.get("id"));
      if (v.get("id") !== null && v.get("id") !== undefined) {
        this.roleId = v.get("id");
        this.getSplPermissions(v.get("id"));
      
      }
      else{
      
      }
    });
  }
  backClicked() {
    this._location.back();
  }
  getSplPermissions(id) {
    // this.service.getSplPermissions(id).subscribe(
    //   data => {
    //     console.log(data);
    //     this.items = data['Data'];
    //     // this.items.forEach(element => {
    //     //   element['IsCreate']=true;
    //     // });
    //     this.roleName = this.items[0]['RoleName'];
    //   }
    // )
  }
  recordChange(value)
  {

  }
  saveSplPermissions() {
    // this.service.saveSplPermissions(this.items).subscribe(data => {
    //     if(data != null && data['Success']) {
    //     // this.items = data['Data'];
    //     this.alertService.createAlert('Permissions Saved Successfully',1);
    //     this.getSplPermissions(this.roleId);
    //     }
    //     else{
    //       this.alertService.createAlert('Something Went Wrong! Please Try Again Later',0);
    //     }
    //   })
  }


}
