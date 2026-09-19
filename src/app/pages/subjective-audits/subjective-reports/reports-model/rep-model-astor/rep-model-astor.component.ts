import { Component, OnInit } from '@angular/core';
import { RadarData } from 'src/app/pages/radar/RadarData';
import { environment } from 'src/environments/environment';
// declare var require: any;
// import * as Highcharts from "highcharts";
// let Boost = require("highcharts/modules/boost");
// let noData = require("highcharts/modules/no-data-to-display");
// let More = require("highcharts/highcharts-more");

// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
// noData(Highcharts);
// require("highcharts/modules/networkgraph")(Highcharts);

@Component({
  selector: 'app-rep-model-astor',
  templateUrl: './rep-model-astor.component.html',
  styleUrls: ['./rep-model-astor.component.scss']
})
export class RepModelAstorComponent implements OnInit {
  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = false;
  barPadding: number = 30;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Time Period';
  showYAxisLabel1 = true;
  yAxisLabel1 = 'Demerit';
  single: any[] = [];
  public three: any[];
  public multi: any[];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public analytics: any[];
  view: any[] = [440, 220];
  public showLegends = false;
  // High Chart VAriables
  title = "HighChartNetworkGraph";
  chart: any;

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
        three, single
      });
    }
  }
  ngOnInit(): void {
    // this.chart = Highcharts.chart("container", this.options);
  }

  
  // High Charts Data
  // options: any = {
  //   chart: {
  //     type: "bar"
  //   },
  //   title: {
  //     text: "Audit Score Over Time Series Table"
  //   },
  //   xAxis: {
  //     categories: ["2018-19", "2019-20", "2020-21"],
  //     title: {
  //       text: null
  //     }
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: "In Thousand of Rupees",
  //       align: "high"
  //     },
  //     labels: {
  //       overflow: "justify"
  //     }
  //   },
  //   tooltip: {
  //     valuePrefix: "Rs. "
  //   },
  //   plotOptions: {
  //     bar: {
  //       dataLabels: {
  //         enabled: true
  //       }
  //     }
  //   },
  //   legend: {
  //     layout: "horizontal",
  //     align: "right",
  //     horizontalAlign: "top",
  //     x: -40,
  //     y: 80,
  //     floating: true,
  //     borderWidth: 1,
  //     backgroundColor:
  //       Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  //     shadow: true
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [
  //     {
  //       name: 'Population',
  //       data: [
  //         ['Shanghai', 21.2],
  //         ['Beijing', 19.8],
  //         ['Karachi', 14.9],
  //         ['Shenzhen', 13.7],
  //         ['Guangzhou', 13.1],
  //         ['Istanbul', 12.7],
  //         ['Mumbai', 12.4],
  //         ['Moscow', 12.2],
  //         ['São Paulo', 12.0],
  //         ['Delhi', 11.7],
  //         ['Kinshasa', 11.5],
  //         ['Tianjin', 11.2],
  //         ['Lahore', 11.1],
  //         ['Jakarta', 10.6],
  //         ['Dongguan', 10.6],
  //         ['Lagos', 10.6],
  //         ['Bengaluru', 10.3],
  //         ['Seoul', 9.8],
  //         ['Foshan', 9.3],
  //         ['Tokyo', 9.3]
  //       ],
  //     }
  //   ]
  // };
  fnYearChange(event) {
    event.value == '0' ? this.single = RadarData.Barchart1() : this.single = RadarData.Barchart2();

  }
    filterToggle: boolean = false;


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
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
    { name: 'GA', count: '65%' },
    { name: 'Body', count: '73%' },
    { name: 'Paint', count: '76%' },
    { name: 'SQE', count: '87%' },
    { name: 'PE', count: '63%' },
    { name: 'PQA', count: '77%' },

    // { name: 'PE', min: '54', Avg: '97', max: '100' },
    // { name: 'PQA', min: '54', Avg: '87', max: '100' },
  ]
  values1 = [
    { measurement: '1-Minor', value: '90%' },
    { measurement: '5-Small', value: '80%' },
    { measurement: '10-Moderate', value: '85%' },
    { measurement: '20-Major', value: '80%' },
    { measurement: '50-Critical', value: '98%' },
  ]
}
