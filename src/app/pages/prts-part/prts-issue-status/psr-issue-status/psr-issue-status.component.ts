import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Settings } from 'src/app/app.settings.model';
import { environment } from 'src/environments/environment';
import { ClientsData } from '../../clientsdata';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';


interface PsrIssue {
  ref: string;
  Status: string;
  AuditType: string;
  Checkpoints: string;
  Description: string;
  Date: string;
  Source: string;
  RequestedBy: string;
  ReportingDept: string;
  ProjectCode: string;
  Model: string;
  Variant: string;
  Criticality: string;
  Category: string;
  WHandH: string;
  AssignedTo: string;
  ContainmentAssignedTo: string;
  Location: string;
  Fuel_Type: string;
  Transmission: string;
  Info: string;
}

@Component({
  selector: 'app-psr-issue-status',
  templateUrl: './psr-issue-status.component.html',
  styleUrls: ['./psr-issue-status.component.scss']
})



export class PsrIssueStatusComponent implements OnInit {

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
    public single: any[] = [];
    public multi: any[] = [];
  public triple: any[] = [];
  public showLegend = false;
  public gradient = false;
  allClients?: any[];
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  color = 'accent';
  checked = true;
  public first: any[] = [];
      deleteConfirmation() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
   Confirmation(item: any) {
       let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
         width: 'auto',
         data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
       });

     }

  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings?: Settings;
  public setting = [];
  sortedData: any;
  pageEvent?: PageEvent;
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

  public popoversendMessage?: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
 values: PsrIssue[] = [];
ngOnInit() {
    if (environment.mode == 1) {
      // 1. Set the totalSize for the paginator
      this.totalSize = this.values1.length;
      
      // 2. Call getData() to load the first page of data
      this.getData();
    } else {
      // API logic would go here
      return;
    }
    
    // This part for the charts is fine
    const first = ClientsData.PiechartData1();
    const multi = ClientsData.PieChartData2();
    const triple = ClientsData.PieChartData3();
    Object.assign(this, { first, multi, triple });
  }


  // No changes needed here, but shown for context
  getData() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.values = this.values1.slice(start, end);
  }

  // No changes needed here
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getData();
  }
  breadcrumb = "Time Sheet"

  

values1 = [
  {
    ref: 'PSR-24001',
    Status: 'Open',
    AuditType: 'Paint Defect',
    Checkpoints: 'Paint Sagging on Rear Door',
    Description: 'Excess paint flow observed on rear left door during inspection.',
    Date: '2025-10-01',
    Source: 'Quality Audit',
    RequestedBy: 'Rohit Sharma',
    ReportingDept: 'Paint Shop',
    ProjectCode: 'PRJ-HECTOR-01',
    Model: 'Hector',
    Variant: 'Smart MT',
    Criticality: 'High',
    Category: 'Appearance',
    WHandH: 'What: Paint sagging, Where: Rear door, Why: Incorrect spray pressure, Who: Paint Operator, When: During final coat, How: Improper gun calibration',
    AssignedTo: 'Ajay Patel',
    ContainmentAssignedTo: 'Suresh Nair',
    Location: 'Plant 1 - Halol',
    Fuel_Type: 'Petrol',
    Transmission: 'Manual',
    Info: 'Paint sagging due to improper gun calibration on rear left door.'
  },
  {
    ref: 'PSR-24002',
    Status: 'Closed',
    AuditType: 'Fitment Issue',
    Checkpoints: 'Door Alignment',
    Description: 'Driver side door misaligned by 3mm causing noise during road test.',
    Date: '2025-09-28',
    Source: 'Customer Feedback',
    RequestedBy: 'Amit Gupta',
    ReportingDept: 'Assembly',
    ProjectCode: 'PRJ-ASTOR-05',
    Model: 'Astor',
    Variant: 'Sharp CVT',
    Criticality: 'Medium',
    Category: 'Fitment',
    WHandH: 'What: Misalignment, Where: Driver door, Why: Jig deviation, Who: Assembly operator, When: Line 2 shift A, How: Loose fixture',
    AssignedTo: 'Pooja Mehta',
    ContainmentAssignedTo: 'Vikas Jain',
    Location: 'Plant 2 - Pune',
    Fuel_Type: 'Petrol',
    Transmission: 'CVT',
    Info: 'Door misalignment fixed after jig calibration in Assembly line.'
  },
  {
    ref: 'PSR-24003',
    Status: 'In Progress',
    AuditType: 'Welding Issue',
    Checkpoints: 'Spot Welding Consistency',
    Description: 'Weak weld spots identified on rear quarter panel.',
    Date: '2025-09-26',
    Source: 'In-house Quality',
    RequestedBy: 'Sunil Verma',
    ReportingDept: 'Body Shop',
    ProjectCode: 'PRJ-GLOSTER-07',
    Model: 'Gloster',
    Variant: 'Sharp 4x4',
    Criticality: 'High',
    Category: 'Structural',
    WHandH: 'What: Weak welds, Where: Rear panel, Why: Electrode wear, Who: Robot 3, When: 2nd shift, How: Current too low',
    AssignedTo: 'Ankit Rawal',
    ContainmentAssignedTo: 'Manoj Sinha',
    Location: 'Plant 3 - Chennai',
    Fuel_Type: 'Diesel',
    Transmission: 'Automatic',
    Info: 'Weak rear panel welds caused by worn electrode and low current.'
  },
  {
    ref: 'PSR-24004',
    Status: 'Hold',
    AuditType: 'Electrical Fault',
    Checkpoints: 'Battery Harness',
    Description: 'Battery harness connector found loosely attached leading to intermittent power loss.',
    Date: '2025-09-24',
    Source: 'End-of-Line Test',
    RequestedBy: 'Sneha Reddy',
    ReportingDept: 'Electrical Assembly',
    ProjectCode: 'PRJ-EV-03',
    Model: 'ZS EV',
    Variant: 'Exclusive',
    Criticality: 'Critical',
    Category: 'Electrical',
    WHandH: 'What: Loose connector, Where: Battery harness, Why: Clip defect, Who: Vendor supply, When: Batch #EV0924, How: Missing locking tab',
    AssignedTo: 'Deepak Chauhan',
    ContainmentAssignedTo: 'Vendor - ABC Harness Ltd',
    Location: 'Plant 4 - Ahmedabad',
    Fuel_Type: 'Electric',
    Transmission: '-',
    Info: 'Loose battery harness connector due to vendor clip defect.'
  },
  {
    ref: 'PSR-24005',
    Status: 'Open',
    AuditType: 'Interior Trim Issue',
    Checkpoints: 'Dashboard Fitment',
    Description: 'Gap between dashboard and A-pillar trim exceeds tolerance by 1.5mm.',
    Date: '2025-09-21',
    Source: 'Customer Audit',
    RequestedBy: 'Arjun Rao',
    ReportingDept: 'Interior Trim',
    ProjectCode: 'PRJ-HECTOR-02',
    Model: 'Hector Plus',
    Variant: 'Smart Pro',
    Criticality: 'Low',
    Category: 'Interior',
    WHandH: 'What: Gap issue, Where: Dashboard corner, Why: Trim clip deformation, Who: Vendor part, When: After shipment, How: Poor packaging',
    AssignedTo: 'Priya Sharma',
    ContainmentAssignedTo: 'Vendor - XYZ Interiors',
    Location: 'Plant 1 - Halol',
    Fuel_Type: 'Petrol',
    Transmission: 'Manual',
    Info: 'Dashboard trim gap due to deformed clip in vendor-supplied part.'
  }
];


  opendashboard() {
    window.open('/#/app/prtsnavbar/base-info');
  }

 
  
  //parameterboard
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }
  public addchecklistaudit(auditdata: any) {
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
  public grid(auditdata: any) {
    // let dialogRef = this.dialog.open(GridColumnComponent, {
    //   data: auditdata,
    //   height: 'auto',
    //   width: '600px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }
  public onSelect(event?: any) {
    // console.log(event);
  }

   scrollGrid(direction: string) {
  const container = document.getElementById('grid-table-container');

  if (!container) return;

  const scrollAmount = 200; // adjust as needed

  if (direction === 'right') {
    container.scrollLeft += scrollAmount;
  } else {
    container.scrollLeft -= scrollAmount;
  }
}

}
