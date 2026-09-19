import { parameterdata } from './../../parameterdata';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-par-audit-type',
  templateUrl: './par-audit-type.component.html',
  styleUrls: ['./par-audit-type.component.scss']
})
export class ParAuditTypeComponent implements OnInit {

  public three: any[];
  public single: any[];
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
        name: 'C - Rating',
        value: 20
      },
      {
        name: 'D - Rating',
        value: 7
      },


    ];
    Object.assign(this, { three });
  }




  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = parameterdata.audittype();
    }
    else {

    }
  }

  items = [

  ];



}
