import { Component, OnInit } from '@angular/core';
import { RadarData } from 'src/app/pages/radar/RadarData';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-model-gloster',
  templateUrl: './model-gloster.component.html',
  styleUrls: ['./model-gloster.component.scss']
})
export class ModelGlosterComponent implements OnInit {

  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = false;
  barPadding: number = 30;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Time Period';
  showYAxisLabel1 = true;
  yAxisLabel1 = 'Demerit Rate';

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
      const three = RadarData.distributionBarCahart2();
      const single = RadarData.Barchart1();
      Object.assign(this, {
        three, single,
      });
    }
  }
  ngOnInit(): void {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  fnYearChange(event) {
    event.value == '0' ? this.single = RadarData.Barchart1() : this.single = RadarData.Barchart2();

  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  single1 = [
    { 'name': "1-Minor", 'value': 1 },
    { 'name': "5-Small", 'value': 2 },
    { 'name': "10-Moderate", 'value': 1 },
    { 'name': "20-Major", 'value': 1 },
    { 'name': "50-Critical", 'value': 1 },
  ];

  values = [
    { name: 'GA', min: '12', Avg: '47', max: '100' },
    { name: 'Body', min: '35', Avg: '65', max: '100' },
    { name: 'Paint', min: '45', Avg: '76', max: '100' },
    { name: 'SQE', min: '54', Avg: '87', max: '100' },
    { name: 'PE', min: '54', Avg: '97', max: '100' },
    { name: 'PQA', min: '54', Avg: '87', max: '100' },
  ]
  values1 = [
    { measurement: '1-Minor', value: '20%' },
    { measurement: '5-Small', value: '30%' },
    { measurement: '10-Moderate', value: '55%' },
    { measurement: '20-Major', value: '20%' },
    { measurement: '50-Critical', value: '40%' },
  ]

}

