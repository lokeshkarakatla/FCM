import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from 'src/environments/environment';
import { metricsData } from '../metrics.data';

@Component({
  selector: 'app-audit-type',
  templateUrl: './audit-type.component.html',
  styleUrls: ['./audit-type.component.scss']
})
export class AuditTypeComponent implements OnInit {

  items: any = [];
  container: any = [];
  highcharts: any;
  chartOptions: any;

  constructor(private cdr: ChangeDetectorRef) {
  }


  ngOnInit() {
      setTimeout(() => {
      window.dispatchEvent(new Event('resize')); // triggers scroll recalculation
      this.cdr.detectChanges(); // ensure Angular checks the DOM again
    }, 200); // 100–200ms is usually enough for Highcharts


    if (environment.mode == 1) {
      this.items = metricsData.audittype();
      // this.container = metricsData.auditGraph();
      this.highcharts = Highcharts;
      this.chartOptions = {
        title: {
          text: 'Rating Distribution by Audit Type'
        },
        xAxis: {
          categories: ['Product Quality Audit', 'Paint Audit', 'Body Audit', 'Others']
        },
        // labels: {
        //   items: [{
        //     html: 'Total Audit Type consumption',
        //     style: {
        //       left: '50px',
        //       top: '18px',
        //       color: 'black'
        //     }
        //   }]
        // },
        series: [{
          type: 'column',
          name: '2020',
          data: [59, 83, 65, 88]
        }, {
          type: 'column',
          name: '2021',
          data: [24, 79, 72, 80]
        }, {
          type: 'column',
          name: '2022',
          data: [58, 88, 75, 88]
        },
        {
          type: 'spline',
          name: 'Average',
          data: [47, 83.33, 70.66, 89.33],
        },
          // {
          //   type: 'pie',
          //   name: 'Total consumption',
          //   data: [
          //     {
          //       name: 'Jane',
          //       y: 13,
          //       color: Highcharts.getOptions().colors[0] // Jane's color
          //     },
          //     {
          //       name: 'John',
          //       y: 23,
          //       color: Highcharts.getOptions().colors[1] // John's color
          //     },
          //     {
          //       name: 'Joe',
          //       y: 19,
          //       color: Highcharts.getOptions().colors[2] // Joe's color
          //     }
          //   ],
          //   center: [100, 80],
          //   size: 100,
          //   showInLegend: false,
          //   dataLabels: {
          //     enabled: false
          //   }
          // },
        ]
      };

    }
    else {
    }
  }


}

