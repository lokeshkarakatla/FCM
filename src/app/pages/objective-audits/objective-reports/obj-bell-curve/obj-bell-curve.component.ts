import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

import Histogram from 'highcharts/modules/histogram-bellcurve';
Histogram(Highcharts);

const Exporting = require('highcharts/modules/exporting');
Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-obj-bell-curve',
  templateUrl: './obj-bell-curve.component.html',
  styleUrls: ['./obj-bell-curve.component.scss']
})
export class ObjBellCurveComponent implements OnInit {
  public activity;
  public xData;
  public label;
  options: any;
  constructor() {
    var data = [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3];

    this.options = {
      title: {
        text: 'Highcharts Histogram'
      },

      xAxis: [{
        title: { text: 'Rating' },
        alignTicks: false
      }, {
        // title: { text: 'Histogram' },
        // alignTicks: false,
        // opposite: true
      }],

      yAxis: [{
        title: { text: 'Rating' }
      }, {
        title: { text: 'Histogram' },
        opposite: true
      }],

      plotOptions: {
        histogram: {
          accessibility: {
            pointDescriptionFormatter: function (point) {
              var ix = point.index + 1,
                x1 = point.x.toFixed(3),
                x2 = point.x2.toFixed(3),
                val = point.y;
              return ix + '. ' + x1 + ' to ' + x2 + ', ' + val + '.';
            }
          }
        }
      },

      series: [{
        name: 'Histogram',
        type: 'histogram',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 's1',
        zIndex: -1
      }, {
        name: 'Rating',
        type: 'scatter',
        data: data,
        id: 's1',
        marker: {
          radius: 1.5
        }
      }]
    };
  }

  ngOnInit(): void {
    Highcharts.chart('containers', this.options);

  }

}
