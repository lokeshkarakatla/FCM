import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';

@Component({
  selector: 'app-metrics-module',
  templateUrl: './metrics-module.component.html',
  styleUrls: ['./metrics-module.component.scss']
})
export class MetricsModuleComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;

  constructor() {
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.items = metricsData.module();
      // this.container = metricsData.moduleGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Averge Demerit Distribution by Module',
          align: 'center'
        },
        xAxis: {
          categories: ['BSO', 'Door', 'Rear Bumper', 'Fuel Flap', 'Upper Trim']
        },
        yAxis: {
          title: {
            text: 'Averge Demerit'
          }
        },
        tooltip: {
          valueSuffix: 'Averge Demerit'
        },
        series: [{
          type: 'column',
          name: '2020',
          data: [59, 83, 65, 228, 345]
        }, {
          type: 'column',
          name: '2021',
          data: [24, 79, 72, 240, 300]
        }, {
          type: 'column',
          name: '2022',
          data: [58, 88, 75, 250, 400]
        },
        {
          type: 'spline',
          name: 'Average',
          data: [47, 83.33, 70.66, 239.33, 321.21],
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
          }
        },]
      };
    }
    else {
    }
  }
}

