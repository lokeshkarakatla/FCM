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
        name: '2.8L 4x4 AT',
        value: 129
      },
      {
        name: '1.5L Turbo DCT',
        value: 75
      },
      {
        name: 'AX7L AWD Diesel',
        value: 119
      },
      {
        name: 'Empowered Plus LR',
        value: 32
      },
      {
        name: '2.5L Hybrid e-CVT',
        value: 45
      },
    ];
    const first = [
      {
        name: '2.8L 4x4 AT',
        value: 20
      },
      {
        name: '1.5L Turbo DCT',
        value: 7
      },
      {
        name: 'AX7L AWD Diesel',
        value: 11
      },
      {
        name: 'Empowered Plus LR',
        value: 9
      },
      {
        name: '2.5L Hybrid e-CVT',
        value: 6
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
