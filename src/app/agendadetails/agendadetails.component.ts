import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agendadetails',
  templateUrl: './agendadetails.component.html',
  styleUrls: ['./agendadetails.component.scss']
})
export class AgendadetailsComponent implements OnInit {

 constructor(public dialogRef: MatDialogRef<AgendadetailsComponent>) { }
  
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
 
 

}
