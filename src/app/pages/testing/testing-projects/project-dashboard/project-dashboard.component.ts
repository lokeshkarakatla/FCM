import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  isNavOpen = true;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
