import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { checklistdata } from '../../checklistdata';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.scss']
})
export class SeverityComponent implements OnInit {

  public three: any[];
  public single: any[];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  view: any[] = [440, 220];
  showXAxis = true;
showYAxis = true;
showXAxisLabel = true;
showYAxisLabel = true;


  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  constructor() {
    const three = [
      {
        name: '1',
        value: 20
      },
      {
        name: '5',
        value: 7
      },
      {
        name: '10',
        value: 11
      },
      {
        name: '15',
        value: 9
      },
      {
        name: '19',
        value: 5
      },
      {
        name: '6',
        value: 1
      }

    ];
    Object.assign(this, { three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = checklistdata.sevierty();
    }
    else {

    }
  }

  items = [
    { severity: 1, issues: 20 },
    { severity: 5, issues: 7 },
    { severity: 10, issues: 11 },
    { severity: 15, issues: 9 },
    { severity: 19, issues: 5 },
    { severity: 6, issues: 1 },

  ];

}
