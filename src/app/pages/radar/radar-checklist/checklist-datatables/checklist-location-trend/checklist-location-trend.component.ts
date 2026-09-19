import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RadarData } from '../../../RadarData';

@Component({
  selector: 'app-checklist-location-trend',
  templateUrl: './checklist-location-trend.component.html',
  styleUrls: ['./checklist-location-trend.component.scss']
})
export class ChecklistLocationTrendComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
  public items: any[];
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
      this.items = RadarData.ChecklistLocationGrid();
      const three = RadarData.ChecklistLocationPieChart1();
      const first = RadarData.ChecklistLocationPieChart2();
      Object.assign(this, { first, three });

    }


  }

}
