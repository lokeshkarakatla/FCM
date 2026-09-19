import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { checklistdata } from '../../checklistdata';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit {

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
        name: 'VDI',
        value: 129
      },
      {
        name: 'SXI',
        value: 75
      },
      {
        name: 'SXI(o)',
        value: 119
      },
      {
        name: 'LDI',
        value: 32
      },


    ];
    const first = [
      {
        name: 'VDI',
        value: 20
      },
      {
        name: 'SXI',
        value: 7
      },
      {
        name: 'SXI(o)',
        value: 11
      },
      {
        name: 'LDI',
        value: 9
      },

    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = checklistdata.variant();
    }
    else {

    }
  }

  items = [




  ];

}
