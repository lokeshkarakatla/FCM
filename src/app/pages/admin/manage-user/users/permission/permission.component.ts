import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  roleId  = null;
  moduleId = 5 ;
  roleName : any;
  items = [];
  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  service: any;
  alertService: any;

  constructor(private _location: Location,public router:Router,private _activeRoute: ActivatedRoute,private location:Location, ) {

  }
  public screens = [
        
        {"name":"Project Dashboard","value1":"true","value2":"false","value3":"true","value4":"true"},
        {"name":"Admin >> Manage Users >> Users","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Manage Users >> Roles","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Master Data","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Master Data >> Handover Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Lookup Options","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Settings","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Notification","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Kanban Setup","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Admin >> Event Log","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Manage Clients","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Manage Projects >> Grid View","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Manage Projects >> Kanban View","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Manage Projects >> Handover","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Manage Projects >> Reports","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Purchase Indent","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> RFQ","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Quotations","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Purchase Orders","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Purchase Orders >> Pending","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Purchase Orders >> Published","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Purchase Orders >> Archives","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Consignments","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Consignments >> Active","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Procurement >> Consignments >> Archives","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Store Management >> ARN","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Store Management >> Stock Transfers","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Store Management >> Stock Transfers >> Active","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Store Management >> Stock Transfers >> Archives","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Store Management >> Material Issues >> Active","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Store Management >> Material Issues >> Archives ","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Inventory Control >> Opening Stock","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Inventory Control >> Stock Reconcilliation","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Inventory Control >> Stock Adjustments","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Inventory Control >> Inventory Analysis","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Inventory Control >> Recorder Levels","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> Service Indent","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> RFQ","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> Quotations","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> Work Orders","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> Work Orders >> Pending","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> Work Orders >> Published","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> Work Orders >> Archives","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> Service Challans","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Service Contracts >> ARN","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Item Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Categories >> Item Categories","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Categories >> Item Sub Categories","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Categories >> Service Categories","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Store Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Unit Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Job Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Vendors ","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Terms Master","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Setup >> Term Templates","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Rentals","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Purchase >> Rentals >> Archives","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Finance >> Aging Analysis","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Finance >> Payables","value1":true,"value2":true,"value3":true,"value4":true},   
        {"name":"Vendor-Management >> Order Status","value1":true,"value2":true,"value3":true,"value4":true},
        {"name":"Vendor-Management >> PO / Bill Status","value1":true,"value2":true,"value3":true,"value4":true},
        
        
        
        
      
        // {"name":"Help","value1":true,"value2":true,"value3":true,"value4":true}    
      ];
  ngOnInit() {
    this._activeRoute.paramMap.subscribe(v => {
      console.log(v.get("id"));
      if (v.get("id") !== null && v.get("id") !== undefined) {
        this.roleId = v.get("id");
        this.getPermissions(v.get("id"));
      
      }
      else{
      
      }
    });
  }
  goback()
  {
    this._location.back();
  }
  getPermissions(id) {
    this.service.getRolePermissionsbyModule(id).subscribe(
      data => {
        console.log(data);
        this.items = data['Data'];
        // this.items.forEach(element => {
        //   element['IsCreate']=true;
        // });
        this.roleName = this.items[0]['RoleName'];
      }
    )
  }
  recordChange(value)
  {

  }
  saveUserPermissions() {
    this.service.saveRolePermissions(this.items).subscribe(data => {
        if(data != null && data['Success']) {
        // this.items = data['Data'];
        this.alertService.createAlert('Permissions Saved Successfully',1);
        this.getPermissions(this.roleId);
        }
        else{
          this.alertService.createAlert('Something Went Wrong! Please Try Again Later',0);
        }
      })
  }
}
