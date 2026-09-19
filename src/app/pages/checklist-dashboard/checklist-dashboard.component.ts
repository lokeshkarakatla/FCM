import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist-dashboard',
  templateUrl: './checklist-dashboard.component.html',
  styleUrls: ['./checklist-dashboard.component.scss']
})
export class ChecklistDashboardComponent implements OnInit {

  constructor(public routes: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.routes.navigate(['/app/new-audits/subjective-audits/subjective-audits-issues-status']);
  }


}
