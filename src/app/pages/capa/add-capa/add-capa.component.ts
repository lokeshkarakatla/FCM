import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-capa',
  templateUrl: './add-capa.component.html',
  styleUrls: ['./add-capa.component.scss']
})
export class AddCapaComponent implements OnInit {

  title: string = '';
  role: string = '';
  department: string = '';
  issue: string = '';
  details: string = '';
  date: string = '';
  eta: string = '';
  completedDate: string = '';
  done: boolean = false;
  status: string = 'Open';

  complaintsList: string[] = [
    "(FIELD/2024/09/1) - Toyota Fortuner 4x4 - ADAS Front Radar Camera Calibration Error",
    "(FIELD/2024/09/2) - Hyundai Creta SX - 7-Speed Dual-Clutch Transmission Shudder",
    "(FIELD/2024/09/3) - Mahindra XUV700 AX7 - Infotainment Twin Screen Blackout",
    "(FIELD/2024/09/4) - Tata Nexon EV Max - High Voltage Traction Battery Slow Charging",
    "(FIELD/2024/09/5) - Toyota Camry Hybrid - e-CVT Power Split Inverter Error",
    "(FIELD/2024/09/6) - Tata Safari Dark Edition - Panoramic Sunroof Drain Water Ingress",
    "(FIELD/2024/09/7) - Hyundai Verna Turbo - Turbocharger Wastegate Actuator Rattle",
    "(FIELD/2024/09/8) - Honda Elevate ZX - Electronic Power Steering Assist Fluctuation"
  ];

  rolesList: string[] = [
    "Shop Head",
    "Shift Manager",
    "QA Lead",
    "Plant Quality Head",
    "Admin",
    "General Manager"
  ];

  departmentsList: string[] = [
    "QA-16949",
    "RND-EES",
    "RND-PWR",
    "MFG-TCF",
    "SQA-VND",
    "FES-DLR",
    "Production",
    "QA",
    "Maintenance",
    "R&D",
    "Quality"
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddCapaComponent>
  ) {}

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title || this.data.complaint || '';
      if (this.title && !this.complaintsList.includes(this.title)) {
        this.complaintsList.unshift(this.title);
      }
      this.role = this.data.role || '';
      if (this.role && !this.rolesList.includes(this.role)) {
        this.rolesList.unshift(this.role);
      }
      this.department = this.data.department || '';
      if (this.department && !this.departmentsList.includes(this.department)) {
        this.departmentsList.unshift(this.department);
      }
      this.issue = this.data.issue || this.data.subject || '';
      this.details = this.data.details || this.data.description || '';
      this.date = this.data.date || this.data.targetDate || '';
      this.eta = this.data.eta || this.data.etaDate || '';
      this.completedDate = (this.data.completedDate && this.data.completedDate !== '-') ? this.data.completedDate : '';
      this.done = !!this.data.done;
      this.status = this.data.status || (this.done ? 'Closed' : 'Open');
    } else {
      this.date = new Date().toISOString().split('T')[0];
      const future = new Date(Date.now() + 14 * 86400000);
      this.eta = future.toISOString().split('T')[0];
      this.done = false;
      this.completedDate = '';
      this.status = 'Open';
    }
  }

  onDoneChange(checked: boolean) {
    this.done = checked;
    if (checked) {
      if (!this.completedDate) {
        this.completedDate = new Date().toISOString().split('T')[0];
      }
      this.status = 'Closed';
    } else {
      this.completedDate = '';
      if (this.status === 'Closed') {
        this.status = 'WIP';
      }
    }
  }

  save() {
    const result = {
      title: this.title,
      role: this.role,
      department: this.department,
      issue: this.issue,
      details: this.details,
      date: this.date,
      eta: this.eta,
      completedDate: this.done ? (this.completedDate || new Date().toISOString().split('T')[0]) : (this.completedDate || '-'),
      done: this.done,
      status: this.done ? 'Closed' : (this.status === 'Closed' ? 'WIP' : this.status),
      meetingRef: this.data?.meetingRef || '(Meet/2025/10/01)'
    };
    this.dialogRef.close(result);
  }

  close() {
    this.dialogRef.close();
  }
}
