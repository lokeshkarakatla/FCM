import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Settings } from 'src/app/app.settings.model';
import { environment } from 'src/environments/environment';
import { ClientsData } from 'src/app/pages/prts-part/clientsdata';



@Component({
  selector: 'app-one-pager',
  templateUrl: './one-pager.component.html',
  styleUrls: ['./one-pager.component.scss']
})
export class OnePagerComponent implements OnInit {

  headers = [
    { Name: 'Client Name', IsSelected: true },
    { Name: 'Projects', IsSelected: true },
    { Name: 'Contacts', IsSelected: true },
    { Name: 'Contact Name', IsSelected: true },
    { Name: 'Client Type', IsSelected: true },
    { Name: 'Industry', IsSelected: true },
    { Name: 'Email', IsSelected: true },
    { Name: 'Mobile Number', IsSelected: true },
    { Name: 'Country', IsSelected: true },
    { Name: 'City', IsSelected: true },
    { Name: 'State', IsSelected: true },
    { Name: 'Postal Code', IsSelected: true },
    { Name: 'GST', IsSelected: true },
    { Name: 'PAN', IsSelected: true },

  ];
  savedHeaders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  allClients: any[];
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  color = 'accent';
  checked = true;
  public first: any[];


  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public setting = [];
  sortedData: any;
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  filteredClients = [];
  status = [{ 'status_id': '1', 'status_name': 'Active' },
  { 'status_id': '2', 'status_name': 'Inactive' }]
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  public status_filter = "";
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  //Objective Audit


  constructor(public dialog: MatDialog, public router: Router) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';

  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  values = []

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
    if (environment.mode == 1) { // UI Mode
      // this.tbaleList = this.totalClients;
      const first = ClientsData.PiechartData12();
      const multi = ClientsData.PieChartData21();
      const triple = ClientsData.PieChartData3();
      Object.assign(this, { first, multi, triple });
    }

    else {
      // Api comes Here
    }
  }

  breadcrumb = "Time Sheet"


  values1 = [
    { ref: 'H2022191', Date: '1-11-2021', VIN: 'Vivek Kele', AuditType: 'Paint sagging on Door', Checkpoints: 'Lorem lpsum', Demerits: 'Lorem lpsum', Location: 'Hyderabad', Auditor: 'Surya', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'High', Colour: 'White', Transmission: 'Manual', Fuel_Type: 'Diesel', Status: true },
    { ref: 'H2022191', Date: '12-11-2021', VIN: 'Vivek Kele', AuditType: 'Paint sagging on Door', Checkpoints: 'Lorem lpsum', Demerits: 'Lorem lpsum', Location: 'Banglore', Auditor: 'Siva', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Low', Colour: 'Black', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
    { ref: 'H2022191', Date: '15-11-2021', VIN: 'Vivek Kele', AuditType: 'Paint sagging on Door', Checkpoints: 'Lorem lpsum', Demerits: 'Lorem lpsum', Location: 'Mumbai', Auditor: 'Navin', Model: 'Gloster', Variant: 'Manual', Interior_Trim: 'High', Colour: 'Blue', Transmission: 'DCT', Fuel_Type: 'Petrol', Status: true },
    { ref: 'H2022191', Date: '23-10-2021', VIN: 'Vivek Kele', AuditType: 'Paint sagging on Door', Checkpoints: 'Lorem lpsum', Demerits: 'Lorem lpsum', Location: 'Pune', Auditor: 'Ridhima', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Medium', Colour: 'White', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
    { ref: 'H2022191', Date: '5-08-2021', VIN: 'Vivek Kele', AuditType: 'Paint sagging on Door', Checkpoints: 'Lorem lpsum', Demerits: 'Lorem lpsum', Location: 'Raipur', Auditor: 'Siva', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'Low', Colour: 'Orange', Transmission: 'Manual', Fuel_Type: 'Hybrid', Status: true },
  ]

  opendashboard() {
    window.open('/#/app/prtsonepager');
  }

  //parameterboard
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }
  public addchecklistaudit(auditdata) {
    // this.router.navigate(['./app/prts/intiative']);
    window.open('/#/app/prts-grid')

    //  let dialogRef = this.dialog.open(AddintiativeComponent, {
    //    data: auditdata,
    //    height: 'auto',
    //    width: '1500px'
    //  });
    //  dialogRef.afterClosed().subscribe(data => {
    //  });
  }
  public grid(auditdata) {
    // let dialogRef = this.dialog.open(GridColumnComponent, {
    //   data: auditdata,
    //   height: 'auto',
    //   width: '600px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }
  public onSelect(event) {
    // console.log(event);
  }

}
