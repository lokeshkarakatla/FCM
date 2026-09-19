import { Router } from '@angular/router';
import { routes } from './../setup/subjective-setup/subjective-setup.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-dashboard',
  templateUrl: './parameter-dashboard.component.html',
  styleUrls: ['./parameter-dashboard.component.scss']
})
export class ParameterDashboardComponent implements OnInit {

  filterToggle = false;

  constructor(public routes: Router) { }

  ngOnInit() {
  }

  back() {
    this.routes.navigate(['/app/new-audits/objective-audits/objective-audits-issues-status']);
  }

}
