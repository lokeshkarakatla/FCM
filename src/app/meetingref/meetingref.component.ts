import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-meetingref',
  templateUrl: './meetingref.component.html',
  styleUrls: ['./meetingref.component.scss'],
 
})
export class MeetingrefComponent implements OnInit {

 constructor(public dialogRef: MatDialogRef<MeetingrefComponent>) { }
 
     ngOnInit(): void {
     }
      close() {
       this.dialogRef.close();
     }

     agenda = [
  "Project kickoff and milestone review",
  "Design sign-off and stakeholder notes",
  "Risk review, blockers, and next actions"
];

attended = [
  { initials: "PK", name: "Pavan Kalyan", role: "Project Manager" },
  { initials: "NM", name: "Navin Malik", role: "UI/UX Designer" },
  { initials: "AY", name: "Ayush", role: "Product Owner" },
  { initials: "HA", name: "Harsha", role: "Scrum Master" },
  { initials: "GV", name: "Gaurav", role: "Business Analyst" },
  { initials: "ST", name: "Santosh", role: "DevOps Engineer" }
];
 

}
