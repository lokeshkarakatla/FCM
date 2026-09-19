import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RadarData } from '../../../RadarData';

@Component({
  selector: 'app-checklist-time-series',
  templateUrl: './checklist-time-series.component.html',
  styleUrls: ['./checklist-time-series.component.scss']
})
export class ChecklistTimeSeriesComponent implements OnInit {

  public three: any[];
  public demerits: any[];
  public issues: any[];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public analytics: any[];

  public showLegends = false;

  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  // options
  animations: boolean = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public colorSchemee = {
    domain: ['rgb(255, 102, 0)', 'rgb(0, 128, 0)', 'rgb(255, 0, 0)']
  };
  constructor() {





  }

  ngOnInit() {
    if (environment.mode === 1) {

      const issues = RadarData.ChecklistTimeSeriesBar1();
      const demerits = RadarData.ChecklistTimeSeriesBar2();

      Object.assign(this, { issues, demerits });
    }
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}
