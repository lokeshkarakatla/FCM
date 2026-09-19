import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RadarData } from '../../../RadarData';

@Component({
  selector: 'app-parameter-location-trend',
  templateUrl: './parameter-location-trend.component.html',
  styleUrls: ['./parameter-location-trend.component.scss']
})
export class ParameterLocationTrendComponent implements OnInit {


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
      this.items = RadarData.ParameterLocationGrid();
      const three = RadarData.ParameterLocationPieChart2();
      const first = RadarData.ParameterLocationPieChart1();
      Object.assign(this, { first, three });

    }
  }




}
