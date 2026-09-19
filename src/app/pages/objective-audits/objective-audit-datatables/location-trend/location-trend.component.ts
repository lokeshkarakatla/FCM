import { Component, OnInit } from '@angular/core';
import { auditdata } from 'src/app/pages/new-audits/auditdata';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-location-trend',
  templateUrl: './location-trend.component.html',
  styleUrls: ['./location-trend.component.scss']
})
export class LocationTrendComponent implements OnInit {
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
        name: 'Hyderabad',
        value: 1290
      },
      {
        name: 'Vadodara',
        value: 320
      },
      {
        name: 'Mumbai',
        value: 751
      },
      {
        name: 'Banglore',
        value: 1190
      },



    ];
    const first = [
      {
        name: 'Hyderabad',
        value: 20
      },
      {
        name: 'Vadodara',
        value: 13
      },
      {
        name: 'Mumbai',
        value: 7
      },
      {
        name: 'Banglore',
        value: 11
      },


    ];
    Object.assign(this, { first, three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = auditdata.objectiveLoction();
    }
    else {

    }
  }

  items = [


  ];


}
