import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


/* Importing the highcharts-more module. */
declare var require: any;
/* Importing the highcharts-more module. */
const More = require('highcharts/highcharts-more');
More(Highcharts);

/* Importing the exporting module. */
const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

/* Importing the export-data module. */
const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

/* Importing the accessibility module. */
const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);
@Component({
  selector: 'app-obj-scatter',
  templateUrl: './obj-scatter.component.html',
  styleUrls: ['./obj-scatter.component.scss']
})
export class ObjScatterComponent implements OnInit {

  filterToggle: boolean = false;


public options: any = {
  chart: {
    type: 'scatter',
    zoomType: 'xy'
  },
  accessibility: {
    description: '',
  },
  title: {
    text: 'Scatter plot in Objective Audit'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    title: {
      enabled: true,
      text: 'Days of Month'
    },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true,
    tickInterval: 1, // Shows 1,2,3,... on axis
    min: 1,
    max: 31
  },
  yAxis: {
    title: {
      text: 'Ratings'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 100,
    y: 70,
    floating: true,
    backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
    borderWidth: 1
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)'
          }
        }
      },
      states: {
        hover: {
          marker: {
            enabled: false
          }
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: 'Day: {point.x}, Rating: {point.y}'
      }
    }
  },
  series: [{
    name: 'Ratings',
    color: 'rgba(119, 152, 191, .5)',
    // Example: map x values (1–31) to your data
    data: [
      [1, 65.6], [2, 71.8], [3, 80.7], [4, 72.6], [5, 78.8],
      [6, 74.8], [7, 86.4], [8, 78.4], [9, 62.0], [10, 81.6],
      [11, 76.6], [12, 83.6], [13, 90.0], [14, 74.6], [15, 71.0],
      [16, 79.6], [17, 93.8], [18, 70.0], [19, 72.4], [20, 85.9],
      [21, 78.8], [22, 77.8], [23, 66.2], [24, 86.4], [25, 81.8],
      [26, 89.6], [27, 82.8], [28, 76.4], [29, 63.2], [30, 60.9],
      [31, 74.8]
    ]
  }]
};


  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container', this.options);

  }

}
