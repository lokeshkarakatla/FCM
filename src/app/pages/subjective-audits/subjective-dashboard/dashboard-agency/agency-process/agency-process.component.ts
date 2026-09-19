import { Component, OnInit } from '@angular/core';
import { RadarData } from 'src/app/pages/radar/RadarData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-agency-process',
  templateUrl: './agency-process.component.html',
  styleUrls: ['./agency-process.component.scss']
})
export class AgencyProcessComponent implements OnInit {

  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = false;
  barPadding: number = 30;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Time Period';
  showYAxisLabel1 = true;
  yAxisLabel1 = 'Defect Rate';

  public three: any[];
  public single: any[];
  public multi: any[];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public analytics: any[];
  view: any[] = [440, 220];
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

  fnYearChange(event) {
    event.value == '0' ? this.single = RadarData.Barchart1() : this.single = RadarData.Barchart2();

  }
  values = [
    { measurement: 'Astor', value: '20' },
    { measurement: 'Gloster', value: '30' },
    { measurement: 'Hector', value: '55' },
    { measurement: 'ZESV', value: '20' },
  ]
  values1 = [
    { measurement: 'Aesthetics', value: '20' },
    { measurement: 'Mutilation', value: '30' },
  ]
  values2 = [
    { measurement: 'Thin Paint', value: '20' },
    { measurement: 'Tool / Scuff Marks', value: '30' },
    { measurement: 'Scratch', value: '20' },
    { measurement: 'Mutilation', value: '30' },
  ]
  function = [
    { 'name': "Aesthetics", 'value': 1 },
    { 'name': "Mutilation", 'value': 2 },
  ];
  model = [
    { 'name': "Astor", 'value': 1 },
    { 'name': "Gloster", 'value': 2 },
    { 'name': "Hector", 'value': 1 },
    { 'name': "ZESV", 'value': 2 },
  ];
  defect = [
    { 'name': "Thin Paint", 'value': 1 },
    { 'name': "Tool / Scuff Marks", 'value': 2 },
    { 'name': "Scratch", 'value': 1 },
    { 'name': "Mutilation", 'value': 2 },
  ]

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}

