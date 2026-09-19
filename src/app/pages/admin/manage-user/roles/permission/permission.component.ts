import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  roleId = null;
  moduleId = 5;
  roleName: any;
  items = [];
  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  service: any;
  alertService: any;

  constructor(private _location: Location, public router: Router, private _activeRoute: ActivatedRoute, private location: Location,) {
    this.selectedModule = this.modules[0];
  }

  selectedModule: any;

  options: Array<any> = [
    { RoleName: "Submit Initiative", RoleId: 1 },
    { RoleName: "Approve Steps", RoleId: 2 },
    { RoleName: "Close Initiative", RoleId: 3 },
    // { RoleName: "Line 4", RoleId: 4 },
  ]

  public modules = [


    {
      name: 'Admin & Dashboard',
      screens: [
        { screenName: 'Dashboard', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'Roles', create: true, read: true, update: true, delete: true },
        { screenName: 'Users', create: true, read: true, update: true, delete: true },
         { screenName: 'Master Data', create: true, read: true, update: true, delete: true },
        { screenName: 'Lookup Options', create: true, read: true, update: true, delete: true },
        { screenName: 'Preferences', create: '-', read: true, update: false, delete: '-' },
        { screenName: 'Event Log', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'Escalation Matrix', create: '-', read: true, update: false, delete: '-' },
       // { screenName: 'Audit Config', create: false, read: true, update: false, delete: false },
      ]
    },

    {
      name: 'SUB Audits',
      screens: [
        { screenName: 'Reports',create: '-', read: true, update: '-', delete: '-'},
        { screenName: 'Audit Status >> Tabular View', create: null, read: true, update: null, delete: true },
        { screenName: 'Audit Status >> Recording >> Issue Log', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'Audit Status >> Recording >> Metrics', create: '-', read: true, update: '-', delete: '-'},
        { screenName: 'Audit Status >> Recording >> Notes', create: true, read: true, update: true, delete: true },
        { screenName: 'Alerts', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'Archives', create: '-', read: true, update: true, delete: '-' },
        { screenName: 'New Audit', create: true, read: true, update: '-', delete: '-' },
        { screenName: 'Setup >> Audit Types', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Sections', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Modules', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Parts', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Functions', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Images', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Defects', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Issues', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Monthly Targets', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >>  Agency Targets', create: true, read: true, update: true, delete: null },
         { screenName: 'User Manual', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'IT Help Desk', create: true, read: true, update: true, delete: '-' },
        
      ]
    },


    {
      name: 'OBJ Audits ',
      screens: [
        { screenName: 'Reports', create: null, read: true, update: '-', delete: '-' },
        { screenName: 'Audit Status >> Tabular View', create: true, read: true, update: null, delete: null },
        { screenName: 'Audit Status >> Recording >> Issue Log', create: true, read: true, update: true, delete: true },
        { screenName: 'Audit Status >> Recording >> Metrics', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'Audit Status >> Recording >> Notes', create: true, read: true, update: null, delete: true },
        { screenName: 'Alerts', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'Archives', create: '-', read: true, update: true, delete: '-' },
        { screenName: 'New Audit', create: true, read: true, update: '-', delete: '-' },
        { screenName: 'Setup >> Audit Types', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Category Master', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Measure Master', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Modules & Checkpoints', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup >> Monthly Targets', create: true, read: true, update: true, delete: null },
        { screenName: 'User Manual', create: '-', read: true, update: '-', delete: '-' },
        { screenName: 'IT Help Desk', create: null, read: true, update: '-', delete: '-' }
      ]
    },




    {
      name: 'PRTS',
      screens: [
        { screenName: 'Dashboard', create: '-', read: true, update: '-', delete: '-'},
        { screenName: 'New Issue', create: true, read: true, update: '-', delete: '-' },
        { screenName: 'Issue Status >> PSR >> Tabular View', create: true, read: true, update: null, delete: null },
        { screenName: 'Issue Status >> PSR >> Matrix', create: true, read: true, update: null, delete: null },
        { screenName: 'Issue Status >> PSR >> Recording', create: true, read: true, update: true, delete: true },
        { screenName: 'Issue Status >> One Pager >> Tabular View', create: true, read: true, update: null, delete: null },
        { screenName: 'Issue Status >> One Pager >> Recording', create: true, read: true, update: true, delete: null },
        { screenName: 'Setup', create: null, read: true, update: null, delete: null },
        { screenName: 'Alerts', create: null, read: true, update: '-', delete: '-' },
        { screenName: 'Archives', create: null, read: true, update: null, delete: '-' },
        { screenName: 'User Manual', create: null, read: true, update: '-', delete: '-' },


      ]
    },

    {
      name: 'Testing',
      screens: [
        //  { screenName: 'Radar', create: null, read: true, update: '-', delete: '-' },
        //   { screenName: 'Issues', create: null, read: true, update: true, delete: true },
        //    { screenName: 'Tractor Status',  create: null, read: true, update: true, delete: true},
        //     { screenName: 'Test Status',  create: null, read: true, update: true, delete: true},
        //      { screenName: 'Master Data', create: null, read: true, update: true, delete: true },
        //       { screenName: 'Projects',  create: null, read: true, update: true, delete: true },
        {
          screenName: 'Radar',
          create: false, read: true, update: false, delete: true
        },
        {
          screenName: 'Issues',
          create: true, read: true, update: true, delete: false
        },
        {
          screenName: 'Tractor Status',
          create: false, read: true, update: false, delete: false
        },
        {
          screenName: 'Test Status',
          create: true, read: true, update: true, delete: false
        },
        {
          screenName: 'Master Data',
          create: false, read: true, update: false, delete: false
        },
        {
          screenName: 'Projects',
          create: false, read: true, update: false, delete: false
        },
        // {
        //   screenName: 'Admin >> Master Data >> Interior Trim',
        //   create: false, read: true, update: false, delete: false
        // },
        // {
        //   screenName: 'Admin >> Master Data >> Color',
        //   create: false, read: true, update: false, delete: true
        // },
        // {
        //   screenName: 'Admin >> Master Data >> PRTS Roles',
        //   create: false, read: true, update: false, delete: false
        // },
        // {
        //   screenName: 'Admin >> Master Data >> Transmission',
        //   create: false, read: true, update: true, delete: false
        // },
        // {
        //   screenName: 'Admin >> Master Data >> Fuel Type',
        //   create: false, read: true, update: false, delete: false
        // },
        // {
        //   screenName: 'Admin >> Lookup Options',
        //   create: false, read: true, update: false, delete: true
        // },
        // {
        //   screenName: 'Admin >> Preferences',
        //   create: false, read: true, update: false, delete: false
        // },
        // {
        //   screenName: 'Admin >> Event Log',
        //   create: false, read: true, update: false, delete: true
        // }

      ]
    },

    {
      name: 'Complaints',
      screens: [
        // { screenName: 'Dashboard', create: "-" , read: true, update: false, delete: false },
        // { screenName: 'Roles', create: true, read: true, update: true, delete: true },
        // { screenName: 'Users', create: true, read: true, update: true, delete: true },
        //  { screenName: 'Master Data', create: true, read: true, update: true, delete: true },
        // { screenName: 'Lookup Options', create: true, read: true, update: true, delete: true },
        // { screenName: 'Preferences', create: false, read: true, update: false, delete: false },
        // { screenName: 'Event Log', create: false, read: true, update: false, delete: false },
        // { screenName: 'Escalation Matrix', create: false, read: true, update: false, delete: false },
        // { screenName: 'Audit Config', create: false, read: true, update: false, delete: false },
        // { screenName: 'Setup >> Measure Master', create: true, read: true, update: true, delete: null },
        // { screenName: 'Setup >> Modules & Checkpoints', create: true, read: true, update: true, delete: null },
        // { screenName: 'Setup >> Monthly Targets', create: true, read: true, update: true, delete: null },
        // { screenName: 'User Manual', create: null, read: true, update: null, delete: null },
        // { screenName: 'IT Help Desk', create: null, read: true, update: null, delete: null }
          { screenName: 'Complaints', create: true, read: true, update: true, delete: true },
           { screenName: 'Meeting', create: true, read: true, update: true, delete: true },
            { screenName: 'Attendance', create: '-', read: true, update: '-', delete: '-' },
             { screenName: 'CAPA', create: null, read: true, update: null, delete: null },
               { screenName: 'Master Data', create: true, read: true, update: true, delete: true }



      ]
    },

  ]


  ngOnInit() {

    console.log('load roles')
    // this._activeRoute.paramMap.subscribe(v => {
    //   console.log(v.get("id"));
    //   if (v.get("id") !== null && v.get("id") !== undefined) {
    //     this. roleId = v.get("id");
    //     this.getPermissions(v.get("id"));

    //   }
    //   else{

    //   }
    // });
  }
  goback() {
    this._location.back();
  }
  getPermissions(id) {
    this.service.getRolePermissionsbyModule(id).subscribe(
      data => {
        console.log(data);
        this.items = data['Data'];

        this.roleName = this.items[0]['RoleName'];
      }
    )
  }
  recordChange(value) {

  }
  saveUserPermissions() {
    this.service.saveRolePermissions(this.items).subscribe(data => {
      if (data != null && data['Success']) {
        // this.items = data['Data'];
        this.alertService.createAlert('Permissions Saved Successfully', 1);
        this.getPermissions(this.roleId);
      }
      else {
        this.alertService.createAlert('Something Went Wrong! Please Try Again Later', 0);
      }
    })
  }
  next() {
    let index = 0;
    this.modules.forEach((x, i) => {
      if (this.selectedModule.name === x.name) {
        index = i
      }
    })
    if (index != (this.modules.length - 1))
      this.selectedModule = this.modules[index + 1]
  }
  previous() {
    let index = 0;
    this.modules.forEach((x, i) => {
      if (this.selectedModule.name === x.name) {
        index = i
      }
    })

    if (index != 0)
      this.selectedModule = this.modules[index - 1]
  }
}
