import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sqm-dashboard',
  templateUrl: './sqm-dashboard.component.html',
  styleUrls: ['./sqm-dashboard.component.scss'] // Or .css depending on your setup
})
export class SqmDashboardComponent implements OnInit {
  
  Highcharts: typeof Highcharts = Highcharts;

  // Base configuration shared across all 3 charts
  chartOptionsBase: Highcharts.Options = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: undefined }, // Title handled in HTML
    colors: ['#6b69a6', '#55c898'], // Purple (Plan), Green (Actual)
    xAxis: { 
      categories: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
      lineColor: '#ccc',
      tickColor: 'transparent'
    },
    yAxis: { 
      min: 0, 
      max: 100, 
      tickInterval: 50, 
      title: { text: undefined },
      gridLineColor: '#f0f0f0'
    },
    legend: { 
      layout: 'vertical', 
      align: 'right', 
      verticalAlign: 'middle',
      itemStyle: { fontSize: '11px', color: '#555', fontWeight: 'bold' },
      symbolRadius: 0 // Makes the legend markers square
    },
    credits: { 
      enabled: true, 
      text: 'CanvasJS.com', 
      position: { align: 'right', verticalAlign: 'bottom', y: -5 },
      style: { color: '#aaa', fontSize: '10px' }
    },
    plotOptions: { 
      column: { pointPadding: 0.1, borderWidth: 0, groupPadding: 0.2 } 
    }
  };

  // 1. Parts Audits Chart
  partsAuditOptions: Highcharts.Options = {
    ...this.chartOptionsBase,
    series: [
      // { type: 'column', name: 'Plan', data: [85, 80, 68, 70] },
      { type: 'column', name: 'Actual', data: [40, 35, 92, 78] }
    ]
  };

  // 2. Process Audits Chart
  processAuditOptions: Highcharts.Options = {
    ...this.chartOptionsBase,
    series: [
      // { type: 'column', name: 'Plan', data: [85, 80, 68, 70] },
      { type: 'column', name: 'Actual', data: [40, 35, 92, 78] }
    ]
  };

  // 3. Monthly Trend Chart
  monthlyTrendOptions: Highcharts.Options = {
    ...this.chartOptionsBase,
    series: [
      { type: 'column', name: 'Process Audits', data: [85, 80, 68, 70] },
      { type: 'column', name: 'Parts Audit', data: [40, 35, 92, 78] }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}