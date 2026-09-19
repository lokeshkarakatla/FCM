import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;

  constructor() {
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.items = metricsData.variant();
      // this.container = metricsData.variantGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Rating Distribution by Variant',
          align: 'center'
        },
        xAxis: {
          categories: ['VDI', 'SXI', 'SXI(o)', 'LDI'],
          labels: {
      enabled: true
    }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Rating'
          }
        },
        tooltip: {
          valueSuffix: 'Rating'
        },
        series: [{
          type: 'column',
          name: '2020',
          data: [59, 83, 65, 88]
        }, {
          type: 'column',
          name: '2021',
          data: [24, 79, 72, 90]
        }, {
          type: 'column',
          name: '2022',
          data: [58, 88, 75, 90]
        },
        {
          type: 'spline',
          name: 'Average',
          data: [47, 83.33, 70.66, 89.33],
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

