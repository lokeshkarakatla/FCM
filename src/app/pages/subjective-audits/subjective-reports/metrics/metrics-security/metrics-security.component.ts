import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';

@Component({
  selector: 'app-metrics-security',
  templateUrl: './metrics-security.component.html',
  styleUrls: ['./metrics-security.component.scss']
})
export class MetricsSecurityComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;

  constructor() {
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.items = metricsData.sevierty();
      // this.container = metricsData.seviertyGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Averge Demerit Distribution by Severity',
          align: 'center'
        },
        xAxis: {
          categories: ['1-Minor', '5-Small', '10-Moderate', '20-Major', '50-Critical']
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
          data: [59, 83, 65, 228, 100]
        }, {
          type: 'column',
          name: '2021',
          data: [24, 79, 72, 240, 110]
        }, {
          type: 'column',
          name: '2022',
          data: [58, 88, 75, 250, 120]
        },
        {
          type: 'spline',
          name: 'Average',
          data: [47, 83.33, 70.66, 239.33, 102.21],
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
          }
        },
       ]
      };
    }
    else {
    }
  }


}
