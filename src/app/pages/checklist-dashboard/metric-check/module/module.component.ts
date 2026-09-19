import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { checklistdata } from '../../checklistdata';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {


  public three: any[];
  public single: any[];
  public first: any[];
  // view: any[] = [250,300];
  public showLegend = true;
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
        name: 'BSO',
        value: 1290
      },
      {
        name: 'Door',
        value: 751
      },
      {
        name: 'Rear Bumper',
        value: 1190
      },
      {
        name: 'Fuel Flap',
        value: 320
      },
      {
        name: 'Upper Trim ',
        value: 78
      }

    ];
    const first = [
      {
        name: 'BSO',
        value: 2
      },
      {
        name: 'Door',
        value: 7
      },
      {
        name: 'Rear Bumper',
        value: 11
      },
      {
        name: 'Fuel Flap',
        value: 9
      },
      {
        name: 'Upper Trim ',
        value: 5
      }

    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = checklistdata.module();
    }
    else {

    }
  }

  items = [

  ];


}
