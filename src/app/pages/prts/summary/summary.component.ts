import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PartsData } from '../PartsData';
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  filterToggle = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.summary();
    }
    else {

    }
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/closure']);
  }
  values = []



}
