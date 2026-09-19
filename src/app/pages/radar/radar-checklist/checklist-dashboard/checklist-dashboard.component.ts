import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RadarData } from '../../RadarData';

@Component({
  selector: 'app-checklist-dashboard',
  templateUrl: './checklist-dashboard.component.html',
  styleUrls: ['./checklist-dashboard.component.scss']
})
export class ChecklistDashboardComponent implements OnInit {


  // public Barview = [500, 400];
  // public showXAxis1 = true;
  // public showYAxis1 = true;
  // public gradient1 = false;
  // public showLegend1 = true;
  // public legendTitle = 'Legend';
  // public legendPosition = 'right';
  // public showXAxisLabel1 = true;
  // public xAxisLabel1 = 'Country';
  // public showYAxisLabel1 = true;
  // public yAxisLabel1 = 'xzr';
  // public showGridLines = true;
  // public innerPadding = '10%';
  // public animations1: boolean = true;
  // public barChart: any[];
  // public lineChartSeries: any[];
  // public lineChartScheme = {
  //   name: 'coolthree',
  //   selectable: true,
  //   group: 'Ordinal',
  //   domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
  // };

  // comboBarScheme1 = {
  //   name: 'singleLightBlue',
  //   selectable: true,
  //   group: 'Ordinal',
  //   domain: ['red']
  // };

  // showRightYAxisLabel: boolean = true;
  // yAxisLabelRight: string = 'Utilization';
  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = false;
  barPadding: number = 30;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Time Period';
  showYAxisLabel1 = true;
  yAxisLabel1 = 'Defecr Rate';




  public three: any[];
  public single: any[];
  public multi: any[];
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
  colorScheme1 = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  constructor() {
    if (environment.mode === 1) {
      const three = RadarData.distributionBarCahart();
      const single = RadarData.Barchart();
      Object.assign(this, {
        three, single,
      });
    }
  }

  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }



}
