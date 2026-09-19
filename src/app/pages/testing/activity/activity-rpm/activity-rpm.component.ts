import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-rpm',
  templateUrl: './activity-rpm.component.html',
  styleUrls: ['./activity-rpm.component.scss']
})
export class ActivityRpmComponent implements OnInit {
  isNavOpen = true;

  constructor() { }

  ngOnInit(): void { }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
