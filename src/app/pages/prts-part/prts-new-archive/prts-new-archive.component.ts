import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-prts-new-archive',
  templateUrl: './prts-new-archive.component.html',
  styleUrls: ['./prts-new-archive.component.scss']
})
export class PrtsNewArchiveComponent implements OnInit {

  @ViewChild('tableContainer') tableContainer!: ElementRef;

  //Objective Audit
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage:string = 'Are you sure you want to send.?';
  public popoversendTitle: string = 'Confirm Delete';
  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

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
    ReportingDept: 'CED Paint Shop',
    ProjectCode: 'PRJ-FORTUNER-01',
    Model: 'Toyota Fortuner 4x4',
    Variant: 'ZX 4x4 AT',
    Criticality: 'High',
    Category: 'Appearance',
    WHandH: 'What: Paint sagging, Where: Rear door, Why: Incorrect spray pressure, Who: Paint Operator, When: During final coat, How: Improper gun calibration',
    AssignedTo: 'Ajay Patel',
    ContainmentAssignedTo: 'Suresh Nair',
    Location: 'Bidadi Auto Facility - Plant 1',
    Fuel_Type: 'Diesel BS-VI',
    Transmission: '6-Speed AT'
  },
  {
    ref: 'PSR-24002',
    Status: 'Closed',
    AuditType: 'Fitment Issue',
    Checkpoints: 'Door Alignment & Flushness',
    Description: 'Driver side door misaligned by 3mm causing wind noise during high-speed track test.',
    Date: '2025-09-28',
    Source: 'Customer Feedback',
    RequestedBy: 'Amit Gupta',
    ReportingDept: 'Trim, Chassis & Final',
    ProjectCode: 'PRJ-CRETA-02',
    Model: 'Hyundai Creta SX',
    Variant: 'SX(O) Turbo 7-DCT',
    Criticality: 'Medium',
    Category: 'Fitment',
    WHandH: 'What: Misalignment, Where: Driver door, Why: Jig deviation, Who: Assembly operator, When: Line 2 shift A, How: Loose fixture',
    AssignedTo: 'Pooja Mehta',
    ContainmentAssignedTo: 'Vikas Jain',
    Location: 'Sriperumbudur Car Assembly',
    Fuel_Type: 'Petrol TGDi',
    Transmission: '7-Speed DCT'
  },
  {
    ref: 'PSR-24003',
    Status: 'In Progress',
    AuditType: 'Welding Issue',
    Checkpoints: 'Spot Welding Consistency & Weld Nugget Size',
    Description: 'Weak weld spots identified on rear quarter panel during ultrasonic non-destructive testing.',
    Date: '2025-09-26',
    Source: 'In-house Quality',
    RequestedBy: 'Sunil Verma',
    ReportingDept: 'Body-in-White (BIW)',
    ProjectCode: 'PRJ-XUV700-03',
    Model: 'Mahindra XUV700 AX7',
    Variant: 'AX7 AWD Luxury Pack',
    Criticality: 'High',
    Category: 'Structural',
    WHandH: 'What: Weak welds, Where: Rear panel, Why: Electrode tip wear, Who: Robot 3, When: 2nd shift, How: Current too low',
    AssignedTo: 'Ankit Rawal',
    ContainmentAssignedTo: 'Manoj Sinha',
    Location: 'Chakan Auto Mega Facility',
    Fuel_Type: 'Diesel BS-VI',
    Transmission: '6-Speed AT'
  },
  {
    ref: 'PSR-24004',
    Status: 'Hold',
    AuditType: 'Electrical Fault',
    Checkpoints: 'Battery BMS High Voltage Harness',
    Description: 'BMS CAN bus communication timeout causing intermittent dashboard turtle mode alert.',
    Date: '2025-09-24',
    Source: 'End-of-Line Test',
    RequestedBy: 'Sneha Reddy',
    ReportingDept: 'EV High Voltage Assembly',
    ProjectCode: 'PRJ-NEXON-EV-04',
    Model: 'Tata Nexon EV Max',
    Variant: 'Empowered+ LR',
    Criticality: 'Critical',
    Category: 'Electrical',
    WHandH: 'What: CAN timeout, Where: BMS harness, Why: Terminal clip loose, Who: Vendor supply, When: Batch #EV0924, How: Missing CPA lock',
    AssignedTo: 'Deepak Chauhan',
    ContainmentAssignedTo: 'Vendor - AutoHarness Ltd',
    Location: 'Sanand Passenger Car Plant',
    Fuel_Type: 'BEV 400V Electric',
    Transmission: 'Single-Speed EV'
  },
  {
    ref: 'PSR-24005',
    Status: 'Open',
    AuditType: 'Interior Trim Issue',
    Checkpoints: 'Instrument Panel Fitment & Gap Tolerance',
    Description: 'Gap between dashboard and A-pillar trim exceeds 2.5mm drawing specification.',
    Date: '2025-09-21',
    Source: 'Customer Audit',
    RequestedBy: 'Arjun Rao',
    ReportingDept: 'Interior Trim',
    ProjectCode: 'PRJ-CAMRY-05',
    Model: 'Toyota Camry Hybrid',
    Variant: 'Dynamic Hybrid e-CVT',
    Criticality: 'Low',
    Category: 'Interior',
    WHandH: 'What: Gap issue, Where: Dashboard corner, Why: Trim clip deformation, Who: Vendor part, When: After shipment, How: Poor packaging',
    AssignedTo: 'Priya Sharma',
    ContainmentAssignedTo: 'Vendor - Premier Interiors',
    Location: 'Bidadi Auto Facility - Plant 1',
    Fuel_Type: 'Strong Hybrid SHEV',
    Transmission: 'e-CVT'
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
    // let dialogRef = this.dialog.open(AddintiativeComponent, {
    //   data: auditdata,
    //   height: 'auto',
    //   width: '900px'
    // });
    // dialogRef.afterClosed().subscribe(data => {
    // });
  }
 scrollGrid(direction: string) {
  const container = this.tableContainer.nativeElement;

  const scrollAmount = 200;

  if (direction === 'right') {
    container.scrollLeft += scrollAmount;
  } else {
    container.scrollLeft -= scrollAmount;
  }
}

}
