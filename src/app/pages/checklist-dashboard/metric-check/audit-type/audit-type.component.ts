import { checklistdata } from './../../checklistdata';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audit-type',
  templateUrl: './audit-type.component.html',
  styleUrls: ['./audit-type.component.scss']
})
export class AuditTypeComponent implements OnInit {

  public three: any[];
  public single: any[];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  showXAxis = true;
showYAxis = true;
showXAxisLabel = true;
showYAxisLabel = true;

  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  constructor() {
    const three = [
      {
        name: 'Produsct Quality Audit',
        value: 29
      },
      {
        name: 'Body',
        value: 12
      },
      {
        name: 'Paint Audit',
        value: 26
      }

    ];
    Object.assign(this, { three });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.items = checklistdata.audittype();
    }
    else {

    }
  }

  items: any = [
  ];
}
