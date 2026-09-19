import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Highcharts from 'highcharts';
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);

@Component({
  selector: 'app-pop-pie-chart',
  templateUrl: './pop-pie-chart.component.html',
  styleUrls: ['./pop-pie-chart.component.scss']
})
export class PopPieChartComponent implements OnInit {

  // Bar chart
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  // single: any[];
  view: any[] = [160, 120];
  view1: any[] = [160, 100];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['red', 'green', 'blue']
  };

  highcharts: any;
  chartOptions: any;

  @ViewChild("container", { read: ElementRef }) container: ElementRef;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PopPieChartComponent>) {
  }

  ngOnInit(): void {
    this.highcharts = Highcharts;
    // Highcharts.chart(this.container.nativeElement,
    this.chartOptions =
    {
      title: {
        text: ''
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },

      // Created pie chart using Highchart
      chart: {
        type: 'column',

      },
      xAxis: {
        type: 'category',
      },

      series: [{
        name: 'Agency',
        data: [
          //   {
          //   name: 'Agency',
          //   y: 85,
          //   drilldown: 'Severity',
          // },
          {
            name: 'GA',
            y: 92,
            drilldown: 'Severity',
          },
          {
            name: 'Body',
            y: 30,
            drilldown: 'Severity',
          },
          {
            name: 'Press',
            y: 52,
            drilldown: 'Severity',
          },
          {
            name: 'Paint',
            y: 72,
            drilldown: 'Severity',
          },
          {
            name: 'SQE',
            y: 22,
            drilldown: 'Severity',
          },
          {
            name: 'PE',
            y: 92,
            drilldown: 'Severity',
          }
        ],

      }],
      drilldown: {
        series: [{
          name: 'Demerit',
          id: 'Severity',
          data: [
            ['1-Minor', 80],
            ['5-Small', 82],
            ['10-Moderate', 91],
            ['20 - Major', 24],
            ['50-Critical', 41]
          ]
        }]
      }
    }
  }

  single = [
    {
      "name": "Process",
      "value": 50
    },
    {
      "name": "SQA",
      "value": 85
    },
    {
      "name": "PE",
      "value": 97
    },
    {
      "name": "Paint",
      "value": 50
    },
    {
      "name": "Body",
      "value": 97
    },

  ];

  close() {
    this.dialogRef.close();
  }

}
