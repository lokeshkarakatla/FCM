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
    AuditType: 'ADAS Sensor Fault',
    Checkpoints: 'Radar Camera Alignment',
    Description: 'Front millimeter-wave radar sensor clip deformed during bumper mounting.',
    Date: '2025-10-01',
    Source: 'End-of-Line Quality Audit',
    RequestedBy: 'Rohit Sharma',
    ReportingDept: 'Automotive Quality Assurance & IATF 16949',
    ProjectCode: 'PRJ-FORTUNER-01',
    Model: 'Toyota Fortuner 4x4',
    Variant: 'ZX 4x4 AT (2.8L Diesel)',
    Criticality: 'Critical',
    Category: 'ADAS, Radar & Safety Vision Sensors',
    WHandH: 'What: Radar calibration offset, Where: Front fascia, Why: Misaligned bracket clip, Who: TCF Line Operator, When: Final bumper docking, How: Torque tool clearance',
    AssignedTo: 'Dr. K. Patel (Powertrain R&D)',
    ContainmentAssignedTo: 'Vikram Singh (Field Service)',
    Location: 'Bidadi Auto Facility - Plant 1',
    Fuel_Type: 'Diesel (BS-VI SCR)',
    Transmission: '6-Speed AT',
    Info: 'Front radar sensor clip deformation during front fascia mounting.'
  },
  {
    ref: 'PSR-24002',
    Status: 'Closed',
    AuditType: 'Transmission Shudder',
    Checkpoints: '7-DCT Clutch Pressure',
    Description: '7-Speed Dual-Clutch Transmission shudder on low-speed city acceleration.',
    Date: '2025-09-28',
    Source: 'Field Complaint Monitoring',
    RequestedBy: 'Amit Gupta',
    ReportingDept: 'Trim, Chassis & Final Assembly (TCF)',
    ProjectCode: 'PRJ-CRETA-05',
    Model: 'Hyundai Creta SX',
    Variant: 'SX(O) Turbo 7-DCT',
    Criticality: 'High',
    Category: 'Automatic Transmission & Dual-Clutch (DCT)',
    WHandH: 'What: Clutch micro-slip, Where: Dry dual-clutch pack, Why: TCM shift logic map, Who: Calibration Team, When: Low-speed crawl, How: Software update required',
    AssignedTo: 'Amitabh Sen (EE/SW)',
    ContainmentAssignedTo: 'Gurpreet Singh (Assembly)',
    Location: 'Sriperumbudur Car Assembly',
    Fuel_Type: 'Petrol (Turbo GDi)',
    Transmission: '7-Speed Dual-Clutch (DCT)',
    Info: 'TCM transmission firmware re-flashed at dealership networks.'
  },
  {
    ref: 'PSR-24003',
    Status: 'In Progress',
    AuditType: 'Infotainment Reset',
    Checkpoints: 'LVDS Display Harness',
    Description: 'Twin digital cockpit display resets intermittently during cold engine crank.',
    Date: '2025-09-26',
    Source: 'PDI Pre-Delivery Inspection',
    RequestedBy: 'Sunil Verma',
    ReportingDept: 'Electrical, Electronics & ADAS Software',
    ProjectCode: 'PRJ-XUV700-07',
    Model: 'Mahindra XUV700 AX7',
    Variant: 'AX7 Luxury Pack AWD',
    Criticality: 'Medium',
    Category: 'Infotainment, Digital Cluster & Telematics',
    WHandH: 'What: Intermittent reboot, Where: Instrument cluster, Why: Ground loop voltage drop, Who: Wiring harness supplier, When: Cold cranking, How: Pin crimping looseness',
    AssignedTo: 'Rajesh Sharma (QA)',
    ContainmentAssignedTo: 'Sunil Verma (SQM)',
    Location: 'Chakan Auto Mega Facility',
    Fuel_Type: 'Diesel (2.2L mHawk)',
    Transmission: '6-Speed AT with AWD Lock',
    Info: 'Pin crimping tension verified and secondary lock latch added.'
  },
  {
    ref: 'PSR-24004',
    Status: 'Hold',
    AuditType: 'High Voltage EV Battery',
    Checkpoints: 'BMS Fast-Charging Handshake',
    Description: 'DC fast-charging session aborts after 15 minutes due to temperature sensor drift.',
    Date: '2025-09-24',
    Source: 'Fleet Customer Audit',
    RequestedBy: 'Sneha Reddy',
    ReportingDept: 'Powertrain R&D & Calibration',
    ProjectCode: 'PRJ-NEXON-03',
    Model: 'Tata Nexon EV Max',
    Variant: 'Empowered+ LR (40.5 kWh EV)',
    Criticality: 'Critical',
    Category: 'High Voltage Battery & BMS (EV)',
    WHandH: 'What: Fast-charging abort, Where: Battery module 3, Why: Thermistor calibration curve, Who: Battery supplier lot #BMS-90, When: Ambient > 42C, How: Software timeout',
    AssignedTo: 'Dr. K. Patel (Powertrain R&D)',
    ContainmentAssignedTo: 'Vendor - EV Battery Tech Ltd',
    Location: 'Sanand Passenger Car Plant',
    Fuel_Type: 'Battery Electric (BEV 400V)',
    Transmission: 'Single-Speed EV Reduction',
    Info: 'BMS thermal throttling table adjusted and firmware patch released.'
  },
  {
    ref: 'PSR-24005',
    Status: 'Open',
    AuditType: 'Hybrid Inverter Leak',
    Checkpoints: 'e-CVT Coolant Loop',
    Description: 'Inverter secondary cooling loop vacuum fill air pocket detected during PDI road test.',
    Date: '2025-09-21',
    Source: 'Pre-Delivery Inspection (PDI)',
    RequestedBy: 'Arjun Rao',
    ReportingDept: 'Automotive Quality Assurance & IATF 16949',
    ProjectCode: 'PRJ-CAMRY-02',
    Model: 'Toyota Camry Hybrid',
    Variant: 'Dynamic Hybrid e-CVT (2.5L)',
    Criticality: 'High',
    Category: 'Engine, Turbocharger & Fuel Injection',
    WHandH: 'What: Inverter high temp warning, Where: Power control unit (PCU), Why: Trapped air bubble, Who: Vacuum fill station operator, When: Coolant filling, How: Incomplete evacuation',
    AssignedTo: 'Rajesh Sharma (QA)',
    ContainmentAssignedTo: 'Manoj Kumar (Homologation)',
    Location: 'Bidadi Auto Facility - Plant 1',
    Fuel_Type: 'Strong Hybrid (SHEV)',
    Transmission: 'e-CVT Dynamic Hybrid',
    Info: 'Automatic vacuum purge cycle duration increased by 45 seconds on TCF line.'
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
