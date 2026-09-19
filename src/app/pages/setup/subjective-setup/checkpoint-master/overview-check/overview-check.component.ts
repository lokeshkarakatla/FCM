import { Router } from '@angular/router';
import { routes } from './../../../../radar/radar-parameter/radar-parameter.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-check',
  templateUrl: './overview-check.component.html',
  styleUrls: ['./overview-check.component.scss']
})
export class OverviewCheckComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  next() {
    this.router.navigate(['/app/setup/subjective/check']);
  }
  back() {
    this.router.navigate(['/app/new-audits/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints']);
  }
  goBack() {
    this.router.navigate(['/app/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints']);
  }

}
