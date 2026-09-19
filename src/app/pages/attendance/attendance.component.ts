import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  totalSize=0;
  constructor(private router: Router, private dialog: MatDialog) { }

  goBack() {
    this.router.navigate(['/app/complaints']);
  }
  data = [
    {
      name: "Pavan Kalyan",
      department: "Developer",
      role: "Group Leader",
      present: 0,
      absent: 6,
      late: 0,
      onTime: 0,
      participation: "0%"
    },
    {
      name: "Gaurav",
      department: "Test",
      role: "Shop Head",
      present: 0,
      absent: 6,
      late: 0,
      onTime: 0,
      participation: "0%"
    },
    {
      name: "Ayush",
      department: "QA",
      role: "General Manager",
      present: 0,
      absent: 6,
      late: 0,
      onTime: 0,
      participation: "0%"
    },
    {
      name: "Test1",
      department: "QA",
      role: "General Manager",
      present: 4,
      absent: 2,
      late: 4,
      onTime: 0,
      participation: "67%"
    },
    {
      name: "Contact OM",
      department: "Account",
      role: "Junior Engineer",
      present: 2,
      absent: 4,
      late: 2,
      onTime: 0,
      participation: "33%"
    },
    {
      name: "Santosh",
      department: "Account",
      role: "Group Leader",
      present: 0,
      absent: 6,
      late: 0,
      onTime: 0,
      participation: "0%"
    },
    {
      name: "Navin Malik",
      department: "Account",
      role: "Group Leader",
      present: 4,
      absent: 2,
      late: 0,
      onTime: 4,
      participation: "67%"
    }
  ];


}
