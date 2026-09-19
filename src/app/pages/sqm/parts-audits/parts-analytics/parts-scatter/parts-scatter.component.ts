import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parts-scatter',
  templateUrl: './parts-scatter.component.html',
  styleUrls: ['./parts-scatter.component.scss']
})
export class PartsScatterComponent implements OnInit {

  
    Highcharts: typeof Highcharts = Highcharts;
    chartOptions: Highcharts.Options = {};
  
    // Recreating the data points visually extracted from the image
    auditData: [number, number][] = [
      [1, 72], [2, 78], [3, 80], [4, 85], [5, 88], 
      [6, 76], [7, 83], [8, 90], [9, 82], [10, 86], 
      [11, 79], [12, 84], [13, 91], [14, 75], [15, 89], 
      [16, 77], [17, 81], [18, 93], [19, 85], [20, 88], 
      [21, 74], [22, 79], [23, 87], [24, 82], [25, 90], 
      [26, 80], [27, 84], [28, 76], [29, 83], [30, 92], 
      [31, 86]
    ];
  
    constructor() { }
  
    ngOnInit(): void {
      this.initChart();
    }
  
    initChart(): void {
      this.chartOptions = {
        chart: {
          type: 'scatter',
          // zoomType: 'xy',
          backgroundColor: '#ffffff'
        },
        title: {
          text: 'Scatter plot for Process Audits',
          style: {
            fontSize: '24px',
            fontWeight: 'normal',
            color: '#333333'
          },
          margin: 40
        },
        xAxis: {
          title: {
            text: 'Day of the Month'
          },
          min: 1,
          max: 31,
          tickInterval: 1,
          gridLineWidth: 0,
          lineColor: '#ccd6eb',
          tickColor: '#ccd6eb'
        },
        yAxis: {
          title: {
            text: 'Score'
          },
          min: 70,
          max: 95,
          tickInterval: 5,
          gridLineColor: '#e6e6e6',
          gridLineWidth: 1
        },
        legend: {
          layout: 'horizontal',
          align: 'left',
          verticalAlign: 'top',
          x: 60,
          y: 60,
          floating: true,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#cccccc',
          padding: 10,
          itemStyle: {
            fontWeight: 'normal'
          }
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              symbol: 'circle',
              states: {
                hover: {
                  enabled: true,
                  lineColor: 'rgb(100,100,100)'
                }
              }
            },
            states: {
              hover: {
                // marker: {
                //   enabled: false
                // }
              }
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormat: 'Day: {point.x}, Score: {point.y}'
            }
          }
        },
        series: [{
          type: 'scatter',
          name: 'Score',
          color: '#b0c4de', // Light blue matching the image
          data: this.auditData
        }],
        exporting: {
          enabled: true,
          buttons: {
            contextButton: {
              symbolStroke: '#666',
              theme: {
                fill: 'transparent'
              }
            }
          }
        },
        credits: {
          enabled: true,
          text: 'Highcharts.com',
          position: {
            align: 'right',
            verticalAlign: 'bottom',
            x: -10,
            y: -5
          }
        }
      };
    }
}
