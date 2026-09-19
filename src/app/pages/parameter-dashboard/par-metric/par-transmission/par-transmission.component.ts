import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { parameterdata } from '../../parameterdata';

@Component({
  selector: 'app-par-transmission',
  templateUrl: './par-transmission.component.html',
  styleUrls: ['./par-transmission.component.scss']
})
export class ParTransmissionComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
  // view: any[] = [250,300];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
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
        value: 90
      },
      {
        name: 'Semi-Automatic',
        value: 87
      },
      {
        name: 'Automatic',
        value: 99
      },


    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = parameterdata.transmision();
    }
    else {

    }
  }

  items = [

  ];


}
