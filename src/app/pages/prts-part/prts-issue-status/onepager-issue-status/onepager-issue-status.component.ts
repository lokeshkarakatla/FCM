import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Settings } from 'src/app/app.settings.model';
import { environment } from 'src/environments/environment';
import { ClientsData } from '../../clientsdata';

@Component({
  selector: 'app-onepager-issue-status',
  templateUrl: './onepager-issue-status.component.html',
  styleUrls: ['./onepager-issue-status.component.scss']
})
export class OnepagerIssueStatusComponent implements OnInit {


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
  { 
    ref: 'H2022191', 
    Date: '01-11-2021', 
    VIN: 'MH12AB1234', 
    AuditType: 'Paint Sagging on Door', 
    Checkpoints: 'Surface finish, gloss level', 
    Demerits: 'Uneven paint thickness', 
    Location: 'Hyderabad', 
    Auditor: 'Surya', 
    Model: 'Hector', 
    Variant: 'Manual', 
    Interior_Trim: 'High', 
    Colour: 'White', 
    Transmission: 'Manual', 
    Fuel_Type: 'Diesel', 
    Status: true 
  },
  { 
    ref: 'H2022192', 
    Date: '12-11-2021', 
    VIN: 'KA05CD5678', 
    AuditType: 'Door Alignment Issue', 
    Checkpoints: 'Gap measurement, flushness', 
    Demerits: 'Door not closing properly', 
    Location: 'Bangalore', 
    Auditor: 'Siva', 
    Model: 'Astor', 
    Variant: 'Automatic', 
    Interior_Trim: 'Low', 
    Colour: 'Black', 
    Transmission: 'AMT', 
    Fuel_Type: 'Petrol', 
    Status: true 
  },
  { 
    ref: 'H2022193', 
    Date: '15-11-2021', 
    VIN: 'MH01EF9012', 
    AuditType: 'Paint Bubbling on Hood', 
    Checkpoints: 'Surface inspection, adhesion test', 
    Demerits: 'Paint blistering observed', 
    Location: 'Mumbai', 
    Auditor: 'Navin', 
    Model: 'Gloster', 
    Variant: 'Manual', 
    Interior_Trim: 'High', 
    Colour: 'Blue', 
    Transmission: 'DCT', 
    Fuel_Type: 'Petrol', 
    Status: true 
  },
  { 
    ref: 'H2022194', 
    Date: '23-10-2021', 
    VIN: 'MH14GH3456', 
    AuditType: 'Interior Trim Defect', 
    Checkpoints: 'Dashboard fit, panel alignment', 
    Demerits: 'Loose trim panel', 
    Location: 'Pune', 
    Auditor: 'Ridhima', 
    Model: 'Astor', 
    Variant: 'Automatic', 
    Interior_Trim: 'Medium', 
    Colour: 'White', 
    Transmission: 'AMT', 
    Fuel_Type: 'Petrol', 
    Status: true 
  },
  { 
    ref: 'H2022195', 
    Date: '05-08-2021', 
    VIN: 'CG04IJ7890', 
    AuditType: 'Rust Formation on Chassis', 
    Checkpoints: 'Underbody inspection, corrosion test', 
    Demerits: 'Rust spots detected', 
    Location: 'Raipur', 
    Auditor: 'Siva', 
    Model: 'Hector', 
    Variant: 'Manual', 
    Interior_Trim: 'Low', 
    Colour: 'Orange', 
    Transmission: 'Manual', 
    Fuel_Type: 'Hybrid', 
    Status: true 
  }
];


  opendashboard() {
    window.open('/#/app/prtsonepager');
  }

  //parameterboard
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }
  public addchecklistaudit(auditdata:any) {
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
  public grid(auditdata:any) {
    // let dialogRef = this.dialog.open(GridColumnComponent, {
    //   data: auditdata,
    //   height: 'auto',
    //   width: '600px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }
  public onSelect(event:any) {
    // console.log(event);
  }


scrollGrid(direction: string) {
  const el = document.querySelector('.table-scroll') as HTMLElement; 
  if (!el) return;

  const scrollAmount = 200; // adjust as needed
  if (direction === 'right') {
    el.scrollLeft += scrollAmount;
  } else if (direction === 'left') {
    el.scrollLeft -= scrollAmount;
  }
}



}
