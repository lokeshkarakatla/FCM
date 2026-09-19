import { AddAlertEscalationComponent } from './add-alert-escalation/add-alert-escalation.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { admindata } from '../admindata';

@Component({
  selector: 'app-escalation',
  templateUrl: './escalation.component.html',
  styleUrls: ['./escalation.component.scss']
})
export class EscalationComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) { }

 values: any[] = [];

  ngOnInit(): void {
    // directly assign filled data
    this.values = [
      {
        name: "Urgent",
        description: "Remaining days before due date when a referral gets flagged.",
        old_value: "0"
      },
      {
        name: "Overdue",
        description: "Overdue period after which the referral is flagged as overdue.",
        old_value: "1"
      },
      {
        name: "Escalate",
        description: "Overdue period after which the referral is flagged as escalated.",
        old_value: "5"
      },
      
    ];
  }


  addchecklistaudit() {
    let dialogRef = this.dialog.open(AddAlertEscalationComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });

  }
}
