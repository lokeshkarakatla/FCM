import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { checklistdata } from '../../checklistdata';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
  // view: any[] = [290, 220];
  public showLegend = false;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  
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
        name: 'GA',
        value: 1290
      },
      {
        name: 'Body',
        value: 751
      },
      {
        name: 'Paint',
        value: 1190
      },
      {
        name: 'Press',
        value: 32
      },
      {
        name: 'SQE',
        value: 78
      }

    ];
    const first = [
      {
        name: 'GA',
        value: 20
      },
      {
        name: 'Body',
        value: 7
      },
      {
        name: 'Paint',
        value: 11
      },
      {
        name: 'Press',
        value: 9
      },
      {
        name: 'SQE',
        value: 5
      }

    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = checklistdata.agency();
    }
    else {

    }

  }

  items = [


  ];
}
