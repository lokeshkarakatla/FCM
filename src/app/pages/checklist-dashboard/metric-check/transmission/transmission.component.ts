import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { checklistdata } from '../../checklistdata';

@Component({
  selector: 'app-transmission',
  templateUrl: './transmission.component.html',
  styleUrls: ['./transmission.component.scss']
})
export class TransmissionComponent implements OnInit {

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
        name: 'Manual',
        value: 129
      },
      {
        name: 'Semi-Automatic',
        value: 75
      },
      {
        name: 'Automatic',
        value: 119
      },


    ];
    const first = [
      {
        name: 'Manual',
        value: 20
      },
      {
        name: 'Semi-Automatic',
        value: 7
      },
      {
        name: 'Automatic',
        value: 11
      },


    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = checklistdata.transition();
    }
    else {

    }
  }

  items = [

  ];


}
