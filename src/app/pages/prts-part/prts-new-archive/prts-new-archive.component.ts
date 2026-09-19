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
    Transmission: 'Manual'
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
    Transmission: 'CVT'
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
    Transmission: 'Automatic'
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
    Transmission: '-'
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
    Transmission: 'Manual'
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
