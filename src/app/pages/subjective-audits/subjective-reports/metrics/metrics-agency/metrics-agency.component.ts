import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';
@Component({
  selector: 'app-metrics-agency',
  templateUrl: './metrics-agency.component.html',
  styleUrls: ['./metrics-agency.component.scss']
})
export class MetricsAgencyComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;
  constructor() {
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.items = metricsData.agency();
      // this.container = metricsData.agencyGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Averge Demerit Distribution by Agency',
          align: 'center'
        },
        xAxis: {
          categories: ['GA', 'Body', 'paint', 'Press', 'SQE',]
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
          data: [59, 83, 65, 228, 120]
        }, {
          type: 'column',
          name: '2021',
          data: [24, 79, 72, 240, 110]
        }, {
          type: 'column',
          name: '2022',
          data: [58, 88, 75, 250, 150]
        },
        {
          type: 'spline',
          name: 'Average',
          data: [47, 83.33, 70.66, 239.33, 121.32],
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

