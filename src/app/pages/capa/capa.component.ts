import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCapaComponent } from './add-capa/add-capa.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddComplaintComponent } from '../complaints/add-complaint/add-complaint.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss']
})
export class CapaComponent implements OnInit {
  totalSize = 0;
  filterToggle: boolean = false;
  fromPage: string | null = null;
  maskInactive: boolean = false;

  isOverdueFilterActive: boolean = false;
  allData: any[] = [];
  data: any[] = [];

  filterKeyword: string = '';
  filterRole: string = '';
  filterDepartment: string = '';
  filterStatus: string = '';

  private rawData = [
    {
      title: "(FIELD/2024/09/1) - Toyota Fortuner 4x4 - ADAS Front Radar Camera Calibration Error",
      role: "Shop Head",
      department: "QA-16949",
      issue: "Radar Misalignment During Bumper Assembly",
      details: "Front millimeter-wave radar sensor clip deformed during front fascia mounting",
      date: "2025-09-20",
      eta: "2025-10-05",
      status: "Open",
      meetingRef: '(Meet/2025/10/01)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/2) - Hyundai Creta SX - 7-Speed Dual-Clutch Transmission Shudder",
      role: "Shift Manager",
      department: "QA-16949",
      issue: "Clutch Pack Thermal Glazing",
      details: "Dry clutch friction plate micro-slipping in stop-and-go city traffic",
      date: "2025-09-22",
      eta: "2025-10-08",
      status: "Pending",
      meetingRef: '(Meet/2025/10/02)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/3) - Mahindra XUV700 AX7 - Infotainment Twin Screen Blackout",
      role: "Shop Head",
      department: "RND-EES",
      issue: "Display LVDS Wiring Harness Pin Loose",
      details: "Vehicle instrument cluster resets during cold start sequence",
      date: "2025-09-24",
      eta: "2025-10-10",
      status: "WIP",
      meetingRef: '(Meet/2025/10/03)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/4) - Tata Nexon EV Max - High Voltage Traction Battery Slow Charging",
      role: "Shift Manager",
      department: "RND-PWR",
      issue: "Battery Management System BMS Firmware Timeout",
      details: "DC fast-charging current throttles at 45kW due to temperature sensor drift",
      date: "2025-09-25",
      eta: "2025-10-12",
      status: "WIP",
      meetingRef: '(Meet/2025/10/04)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/5) - Toyota Camry Hybrid - e-CVT Power Split Inverter Error",
      role: "QA Lead",
      department: "QA-16949",
      issue: "Coolant Air Lock in Hybrid Inverter Loop",
      details: "Bleeder valve vacuum filling incomplete on assembly line TCF-2",
      date: "2025-09-26",
      eta: "2025-10-15",
      status: "Closed",
      meetingRef: '(Meet/2025/10/05)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - Tata Safari Dark Edition - Panoramic Sunroof Drain Water Ingress",
      role: "Shift Manager",
      department: "MFG-TCF",
      issue: "A-Pillar Drain Hose Kinked",
      details: "Drain tube pinched behind curtain airbag bracket during cabin trimming",
      date: "2025-09-27",
      eta: "2025-10-18",
      status: "Open",
      meetingRef: '(Meet/2025/10/06)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/7) - Hyundai Verna Turbo - Turbocharger Wastegate Actuator Rattle",
      role: "Plant Quality Head",
      department: "SQA-VND",
      issue: "Actuator Linkage Bushing Clearance",
      details: "Excessive axial play on wastegate arm causing acoustic resonance at 2200 RPM",
      date: "2025-09-28",
      eta: "2025-10-20",
      status: "Pending",
      meetingRef: '(Meet/2025/10/07)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/8) - Honda Elevate ZX - Electronic Power Steering Assist Fluctuation",
      role: "Shift Manager",
      department: "FES-DLR",
      issue: "Torque Angle Sensor Calibration Offset",
      details: "Zero-point steering angle sensor calibration required after wheel alignment",
      date: "2025-09-29",
      eta: "2025-10-22",
      status: "WIP",
      meetingRef: '(Meet/2025/10/08)',
      actions: { edit: true, delete: true }
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit() {
    this.allData = [...this.rawData];
    this.route.queryParams.subscribe(params => {
      this.fromPage = params['from'] || null;
      if (params['filter'] === 'overdue') {
        this.isOverdueFilterActive = true;
        this.data = this.allData.filter(item => item.status === 'Open' || item.status === 'Pending');
      } else {
        this.isOverdueFilterActive = false;
        this.data = [...this.allData];
      }
    });
  }

  clearOverdueFilter() {
    this.isOverdueFilterActive = false;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter: null },
      queryParamsHandling: 'merge'
    });
  }

  clearFilter() {
    this.filterKeyword = '';
    this.filterRole = '';
    this.filterDepartment = '';
    this.filterStatus = '';
    this.isOverdueFilterActive = false;
    this.data = [...this.allData];
  }

  applyFilter() {
    this.data = this.allData.filter(item => {
      const kw = this.filterKeyword ? this.filterKeyword.toLowerCase() : '';
      const matchesKeyword = !kw ||
        (item.title && item.title.toLowerCase().includes(kw)) ||
        (item.issue && item.issue.toLowerCase().includes(kw)) ||
        (item.details && item.details.toLowerCase().includes(kw));
      const matchesRole = !this.filterRole || item.role === this.filterRole;
      const matchesDept = !this.filterDepartment || item.department === this.filterDepartment;
      const matchesStatus = !this.filterStatus || item.status === this.filterStatus;
      return matchesKeyword && matchesRole && matchesDept && matchesStatus;
    });
  }

  goBack() {
    if (this.fromPage === 'meeting') {
      this.router.navigate(['/app/complaints/meeting']);
    } else {
      this.router.navigate(['/app/complaints']);
    }
  }

  public openCAPA(id: any) {
    let dialogRef = this.dialog.open(AddCapaComponent, {
      data: id,
      height: 'auto',
      width: '800px',
    });
  }

  deleteConfirmation(item?: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to delete this CAPA?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (confirmed: any) => {
        if (confirmed && item) {
          this.data = this.data.filter(d => d !== item);
          this.allData = this.allData.filter(d => d !== item);
        }
      }
    );
  }

  goToAddComplaint() {
    // this.router.navigate(['/app/complaints/add-complaints']);
    let dialogRef = this.dialog.open(AddComplaintComponent, {
      data: null,
      height: 'auto',
      width: '850px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {

      console.log(data, "data")
      if (data === "SAVE") {

        // this.getallusers();
      }
    });
  }




}
