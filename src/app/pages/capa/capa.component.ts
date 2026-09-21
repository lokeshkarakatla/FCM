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

  private rawData = [
    {
      title: "(FIELD/2024/09/6) - High-Performance Nissan Ariya NISMO Debuts on World EV ",
      role: "Shop Head",
      department: "QA",
      issue: "Engine Overheating",
      details: "enginee getting sound",
      date: "2024-09-20",
      eta: "0000-00-00",
      status: "Open",
      meetingRef:'(Meet/2025/10/02)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) -  High-Performance Nissan Ariya NISMO Debuts on World EV ",
      role: "Shift Manager",
      department: "Quality",
      issue: "Brakes Squeaking not working",
      details: "Brakes Squeaking not working",
      date: "2024-09-24",
      eta: "2024-09-24",
      status: "Pending",
      meetingRef:'(Meet/2025/10/03)',
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - This road hazard service is part of Bosch’s connected map issue ",
      role: "Shop Head",
      department: "QA",
      issue: "Transmission Slipping",
      details: "Transmission Slipping is not good",
      date: "2024-09-24",
      meetingRef:'(Meet/2025/10/03)',
      status: "WIP",
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - High-Performance Nissan Ariya NISMO Debuts on World EV",
      role: "Shop Head",
      department: "Account",
      issue: "Transmission Slipping",
      details: "Transmission Slipping",
      date: "2024-09-24",
      meetingRef:'(Meet/2025/10/04)',
      status: "WIP",
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - High-Performance Nissan Ariya NISMO Debuts on World EV ",
      role: "Shift Manager",
      department: "Developer",
      issue: "Battery Draining",
      details: "Battery Draining",
      date: "2024-09-24",
      meetingRef:'(Meet/2025/10/05)',
      status: "Closed",
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - Global fleet of connected vehicles ",
      role: "Shift Manager",
      department: "QA",
      issue: "Unusual Vibrations",
      details: "Unusual Vibrations",
      meetingRef:'(Meet/2025/10/06)',
      date: "2024-09-24",
      status: "",
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - High-Performance Nissan Ariya NISMO Debuts on World EV ",
      role: "Shift Manager",
      department: "Quality",
      issue: "Brakes Squeaking not working",
      details: "Brakes Squeaking not working",
      meetingRef:'(Meet/2025/10/07)',
      date: "2024-09-24",
      status: "Open",
      actions: { edit: true, delete: true }
    },
    {
      title: "(FIELD/2024/09/6) - High-Performance Nissan Ariya NISMO Debuts on World EV ",
      role: "Shift Manager",
      department: "Quality",
      issue: "Brakes Squeaking not getting",
      details: "Brakes Squeaking not working",
      meetingRef:'(Meet/2025/10/09)',
      date: "2024-09-24",
      status: "Pending",
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

  // goBack() {
  //   this.router.navigate(['/app/complaints']);
  // }
  goBack() {
    if (this.fromPage === 'meeting') {
      this.router.navigate(['/app/complaints/meeting']);
    } else {
      this.router.navigate(['/app/complaints']);
    }
  }

  public openCAPA(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddCapaComponent, {
      data: id,
      height: 'auto',
      width: '800px',
    });
    // dialogRef.afterClosed().subscribe((data: any) => {});
  }

  deleteConfirmation() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
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
