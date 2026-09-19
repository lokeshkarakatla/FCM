import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';

@Component({
  selector: 'app-metrics-audit-type',
  templateUrl: './metrics-audit-type.component.html',
  styleUrls: ['./metrics-audit-type.component.scss']
})
export class MetricsAuditTypeComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;

  constructor() {
  }


  ngOnInit() {
    if (environment.mode == 1) {
      this.items = metricsData.audittype();
      // this.container = metricsData.auditGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Averge Demerit Distribution by Audit Type'
        },
        xAxis: {
          categories: ['Product Quality Audit', 'Paint Audit', 'Body Audit', 'Others']
        },
       
        series: [
          {
            type: 'column',
            name: '2020',
            data: [3, 2, 1, 3, 4]
          },
          {
            type: 'column',
            name: '2021',
            data: [2, 3, 5, 7, 6]
          },
          {
            type: 'column',
            name: '2022',
            data: [4, 3, 3, 9, 0]
          },
          {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33]
          },
        
        ]
      };

    }
    else {
    }
  }


}
