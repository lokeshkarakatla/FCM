import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { checklistdata } from '../../checklistdata';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

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
        name: 'Toyota Fortuner',
        value: 1290
      },
      {
        name: 'Hyundai Creta',
        value: 751
      },
      {
        name: 'Mahindra XUV700',
        value: 1190
      },
      {
        name: 'Tata Nexon EV',
        value: 320
      },
      {
        name: 'Camry Hybrid',
        value: 450
      },
    ];
    const first = [
      {
        name: 'Toyota Fortuner',
        value: 20
      },
      {
        name: 'Hyundai Creta',
        value: 7
      },
      {
        name: 'Mahindra XUV700',
        value: 11
      },
      {
        name: 'Tata Nexon EV',
        value: 13
      },
      {
        name: 'Camry Hybrid',
        value: 6
      },
    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = checklistdata.model();
    }
    else {

    }
  }

  items = [



  ];

}
