import { Component, OnInit } from '@angular/core';
import { RadarData } from 'src/app/pages/radar/RadarData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sub-audit-type-trend',
  templateUrl: './sub-audit-type-trend.component.html',
  styleUrls: ['./sub-audit-type-trend.component.scss']
})
export class SubAuditTypeTrendComponent implements OnInit {

  public second: any[];
  yAxisLabel = 'No. of Clients';
  public analytics: any[];
  public POWostackchart: any[];
  public three: any[];
  public showLegends = false;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
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
      const second = RadarData.BarGraph();

      Object.assign(this, { first, three, second });

    }
  }



}
