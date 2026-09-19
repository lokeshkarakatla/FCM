import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { environment } from 'src/environments/environment';
import { admindata } from '../admindata';

@Component({
  selector: 'app-event-log',
  templateUrl: './event-log.component.html',
  styleUrls: ['./event-log.component.scss']
})
export class EventLogComponent implements OnInit {

  sortedData: any;
  tableList: Object[] = [];
  alltableListLookup: any;
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  tableListLookup = [];
  public allReports: Array<any> = [];
  // sortedData = [];
  type: any;
  navParameter: any;
  filterForm: FormGroup;
  roleDetails: any;
  options = [];
  filteredEvents: any;
  access = {
    btCreate: false,
    btRead: false,
    btUpdate: false,
    btDelete: false
  };
  allRoles: any;
  filteredAlerts = [];
  titleService: any;
  alertService: any;
  service: any;
  constructor(public _menuService: MenuService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      Role: new FormControl('',),
      Keyword: new FormControl('',)
    });
  }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  filterToggle: boolean;
  deleteUser(elementValues) {
    console.log(elementValues);
  }
  name: any;

  public setTitle(newTitle: string) {
    // this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.eventDetails = admindata.eventLog();
    }
    else {

    }


  }

  eventDetails: Array<any> = [
  ];


  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
    this.alertService.createAlert('Successfully saved.', 1);
  }
  getAllevents() {
    this.service.GetAllEvents().subscribe(res => {
      if (res['Success'] == true) {
        console.log(res);
        this.eventDetails = res['Data'];
        // this.options = this.eventDetails;
        this.sortedData = this.eventDetails.slice();
        this.bindData(res['Data']);

        //this.getallusers();
      }
      else {
        this.alertService.createAlert(res['Message'], 0);
      }
    });
  }
  public bindData(data) {
    //this.allRoles = data['RolesList'];
    this.allRoles = data;
    this.filter();
  }

  filter() {

    this.filteredEvents = this.allRoles;
    let keyword = this.filterForm.controls['Keyword'].value;
    let role = this.filterForm.controls['Role'].value;

    if (keyword != null && keyword != '') {
      this.filteredEvents = this.filteredEvents.filter(function (item) {
        return JSON.stringify(item).toLowerCase().includes(keyword.toLowerCase());
      });
    }
    if (role != null && role != '') {
      this.filteredEvents = this.filteredEvents.filter(x => x['RoleName'] == role);
    }

    this.eventDetails = this.filteredEvents.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);
    this.totalSize = this.filteredEvents.length;
    this.sortedData = this.eventDetails.slice();
    console.log(this.eventDetails);

  }

  clearFilter() {
    this.filterForm.reset();
    this.getAllevents();
  }

}
