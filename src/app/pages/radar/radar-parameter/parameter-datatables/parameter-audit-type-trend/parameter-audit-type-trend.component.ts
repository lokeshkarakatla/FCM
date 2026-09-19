import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RadarData } from '../../../RadarData';

@Component({
  selector: 'app-parameter-audit-type-trend',
  templateUrl: './parameter-audit-type-trend.component.html',
  styleUrls: ['./parameter-audit-type-trend.component.scss']
})
export class ParameterAuditTypeTrendComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
  items: any[];
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
  }

  ngOnInit() {
    if (environment.mode === 1) {
      this.items = RadarData.ParameterAuditGrid();
      const three = RadarData.ParameterAuditPiechart2();
      const first = RadarData.ParameterAuditPiechart1();
      Object.assign(this, { first, three });

    }
  }



}
