import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';

@Component({
  selector: 'app-metrics-fuel-type',
  templateUrl: './metrics-fuel-type.component.html',
  styleUrls: ['./metrics-fuel-type.component.scss']
})
export class MetricsFuelTypeComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;

  constructor() {
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.items = metricsData.fuel();
      // this.container = metricsData.fuelGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Averge Demerit Distribution by Fuel Type',
          align: 'center'
        },
        xAxis: {
          categories: ['Petrol', 'Diesel', 'EV', 'Others']
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
          data: [59, 83, 65, 228]
        }, {
          type: 'column',
          name: '2021',
          data: [24, 79, 72, 240]
        }, {
          type: 'column',
          name: '2022',
          data: [58, 88, 75, 250]
        },
        {
          type: 'spline',
          name: 'Average',
          data: [47, 83.33, 70.66, 239.33],
          marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
          }
        }, ]
      };
    }
    else {
    }
  }
}
