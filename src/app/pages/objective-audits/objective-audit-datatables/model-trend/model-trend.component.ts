import { Component, OnInit } from '@angular/core';
import { auditdata } from 'src/app/pages/new-audits/auditdata';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-model-trend',
  templateUrl: './model-trend.component.html',
  styleUrls: ['./model-trend.component.scss']
})
export class ModelTrendComponent implements OnInit {

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
        name: 'Hector',
        value: 1290
      },
      {
        name: 'Ev',
        value: 320
      },
      {
        name: 'Astor',
        value: 751
      },
      {
        name: 'Gloster',
        value: 1190
      },



    ];
    const first = [
      {
        name: 'Hector',
        value: 20
      },
      {
        name: 'Ev',
        value: 13
      },
      {
        name: 'Astor',
        value: 7
      },
      {
        name: 'Gloster',
        value: 11
      },


    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = auditdata.objectiveModel();
    }
    else {

    }
  }

  items = [

  ];

}
