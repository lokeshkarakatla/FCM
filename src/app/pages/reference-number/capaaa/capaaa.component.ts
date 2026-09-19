import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCapaComponent } from '../../capa/add-capa/add-capa.component';

@Component({
  selector: 'app-capaaa',
  templateUrl: './capaaa.component.html',
  styleUrls: ['./capaaa.component.scss']
})
export class CapaaaComponent  {

 totalSize = 0;
   filterToggle: boolean = false;
   constructor(private router: Router, private dialog: MatDialog) { }
 
   data = [
     {
       title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
       role: "Shop Head",
       department: "QA",
       issue: "Engine Overheating",
       details: "enginee getting sound",
       date: "2024-09-20",
       status: "Open",
       eta:"024-09-20",
       meetingRef:"(Meet/2025/10/02)",
       actions: { edit: true, delete: true }
     },
     {
       title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
       role: "Shift Manager",
       department: "Quality",
       issue: "Brakes Squeaking not working",
       details: "Brakes Squeaking not working",
       date: "2024-09-24",
       status: "Pending",
       eta:"024-09-20",
        meetingRef:"(Meet/2025/10/03)",
       actions: { edit: true, delete: true }
     },
     {
       title: "This road hazard service is part of Bosch’s connected map issue (FIELD/2024/09/8)",
       role: "Shop Head",
       department: "QA",
       issue: "Transmission Slipping",
       details: "Transmission Slipping is not good",
       date: "2024-09-24",
       status: "WIP",
        meetingRef:"(Meet/2025/10/03)",
       actions: { edit: true, delete: true }
     },
     {
       title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
       role: "Shop Head",
       department: "Account",
       issue: "Transmission Slipping",
       details: "Transmission Slipping",
       date: "2024-09-24",
       status: "WIP",
        meetingRef:"(Meet/2025/10/04)",
       actions: { edit: true, delete: true }
     },
     {
       title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
       role: "Shift Manager",
       department: "Developer",
       issue: "Battery Draining",
       details: "Battery Draining",
       date: "2024-09-24",
       status: "Pending",
        meetingRef:"(Meet/2025/10/05)",
       actions: { edit: true, delete: true }
     },
     {
       title: "Global fleet of connected vehicles (FIELD/2024/09/3)",
       role: "Shift Manager",
       department: "QA",
       issue: "Unusual Vibrations",
       details: "Unusual Vibrations",
       date: "2024-09-24",
       status: "Open",
        meetingRef:"(Meet/2025/10/06)",
       actions: { edit: true, delete: true }
     },
     {
       title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
       role: "Shift Manager",
       department: "Quality",
       issue: "Brakes Squeaking not working",
       details: "Brakes Squeaking not working",
       date: "2024-09-24",
       status: "Open",
        meetingRef:"(Meet/2025/10/07)",
       actions: { edit: true, delete: true }
     },
     {
       title: "High-Performance Nissan Ariya NISMO Debuts on World EV (FIELD/2024/09/6)",
       role: "Shift Manager",
       department: "Quality",
       issue: "Brakes Squeaking not getting",
       details: "Brakes Squeaking not working",
        meetingRef:"(Meet/2025/10/08)",
       date: "2024-09-24",
       status: "Pending",
       actions: { edit: true, delete: true }
     }
   ];
 
   goBack() {
     this.router.navigate(['/app/complaints']);
   }
 
    public openCAPA(id: any) {
       console.log('jkhksbdjk');
       let dialogRef = this.dialog.open(AddCapaComponent, {
         data: id,
         height: 'auto',
         width: '800px',
       });
       dialogRef.afterClosed().subscribe((data: any) => {});
     }
 }
 