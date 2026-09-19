import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PartsData } from 'src/app/pages/prts/PartsData';
import { environment } from 'src/environments/environment';
import { ClientsData } from '../../prts-part/clientsdata';

@Component({
  selector: 'app-subjective-alerts',
  templateUrl: './subjective-alerts.component.html',
  styleUrls: ['./subjective-alerts.component.scss']
})
export class SubjectiveAlertsComponent implements OnInit {

   filterToggle: boolean = false;
  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = ClientsData.alert();
    }
    else {

    }
  }

  values = [
  ];



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
  addMeeting(item) {
    // this.dialog.open(AddMeetingComponent, {
    //   data: item,
    //   width: "850px",
    //   height: "auto"
    // })
  }


  
    scrollGrid() {
  const container = document.getElementById('grid-table-container');
  if (container) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
 
onPageChange() {
  const container = document.getElementById('grid-table-container');
  if (container) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
}
}
