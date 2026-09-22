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
      title: "(FIELD/2024/09/1) - SOLIS 26 4WD - Hydraulic Lift Pressure Drop",
      role: "Shop Head",
      department: "Production",
      issue: "Hydraulic Pressure Drop",
      details: "Hydraulic pump pressure drops under load after 2 hours continuous work",
      date: "2025-09-20",
      eta: "2025-10-05",
      status: "Open",
      meetingRef: '(Meet/2025/10/01)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/2) - SOLIS NT 90 4WD - Engine Overheating Under Heavy Draft Load",
      role: "Shift Manager",
      department: "QA",
      issue: "Radiator Airflow Restriction",
      details: "Coolant temperature exceeds 105C during deep tillage draft",
      date: "2025-09-22",
      eta: "2025-10-08",
      status: "Pending",
      meetingRef: '(Meet/2025/10/02)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/3) - SOLIS NT 60 4WD - Transmission Gear Slipping in 3rd High",
      role: "Shop Head",
      department: "Production",
      issue: "Synchronizer Ring Wear",
      details: "Gear pop-out under reverse load torque in field trials",
      date: "2025-09-24",
      eta: "2025-10-10",
      status: "WIP",
      meetingRef: '(Meet/2025/10/03)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/4) - SOLIS 26 4WD - Steering Cylinder Oil Leakage",
      role: "Shift Manager",
      department: "Maintenance",
      issue: "Cylinder Seal Failure",
      details: "Steering cylinder gland nut seal damaged during assembly",
      date: "2025-09-25",
      eta: "2025-10-12",
      status: "WIP",
      meetingRef: '(Meet/2025/10/04)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/5) - SOLIS NT 90 4WD - Clutch Plate Premature Wear",
      role: "QA Lead",
      department: "QA",
      issue: "Clutch Freeplay Misalignment",
      details: "Release bearing binding causing continuous slip and heat",
      date: "2025-09-26",
      eta: "2025-10-15",
      status: "Closed",
      meetingRef: '(Meet/2025/10/05)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - SOLIS NT 60 4WD - Brake Squeal and Uneven Braking",
      role: "Shift Manager",
      department: "Production",
      issue: "Brake Lining Contamination",
      details: "Oil seepage from axle housing contaminating dry brake discs",
      date: "2025-09-27",
      eta: "2025-10-18",
      status: "Open",
      meetingRef: '(Meet/2025/10/06)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/7) - SOLIS 26 4WD - Alternator Not Charging Battery",
      role: "Plant Quality Head",
      department: "Incoming Inspection",
      issue: "Alternator Diode Trio Failure",
      details: "Batch defect in diode bridge from vendor supplier lot",
      date: "2025-09-28",
      eta: "2025-10-20",
      status: "Pending",
      meetingRef: '(Meet/2025/10/07)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/8) - SOLIS NT 90 4WD - Fuel Injector Nozzle Clogging",
      role: "Shift Manager",
      department: "R&D",
      issue: "Fuel Filter Microns Inadequacy",
      details: "Fine particulate passing through primary strainer in dusty regions",
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
