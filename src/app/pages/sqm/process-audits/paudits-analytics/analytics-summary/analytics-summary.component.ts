import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analytics-summary',
  templateUrl: './analytics-summary.component.html',
  styleUrls: ['./analytics-summary.component.scss']
})
export class AnalyticsSummaryComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  // ✅ Filter model for ngModel bindings
  filters = {
    vertical: '',
    engineer: '',
    year: '',
    month: ''
  };

  onSearch(): void {
    console.log('Filters applied:', this.filters);
    // call your API / filter logic here
  }

  tableData = {
    checked: 250,
    nc: 80,
    parameters: 7702,
    safety: 19,
    critical: 1,
    important: 5,
    fitment: 146,
    awaitingReports: 175
  };

  // ✅ FIX: Added 'size' and 'distance' to force a uniform, large chart size
  private piePlotOptions: Highcharts.Options['plotOptions'] = {
    pie: {
      size: '80%', // Locks the pie size so it doesn't shrink
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f}%',
        distance: 15 // Brings labels slightly closer to the pie to prevent clipping
      },
      showInLegend: false
    }
  };

  // Chart 1: Distribution by Class
  distributionByClassOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: 'Distribution by Class' },
    credits: { enabled: false },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: this.piePlotOptions,
    series: [{
      type: 'pie',
      name: 'Percentage',
      data: [
        { name: 'Regular', y: 50, color: '#27ae60' },     // Green
        { name: 'Important', y: 30, color: '#f39c12' },   // Orange
        { name: 'Critical', y: 20, color: '#e74c3c' }     // Red
      ]
    }]
  };

  // Chart 2: Issues Corrected
  issuesCorrectedOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: 'Issues Corrected' },
    credits: { enabled: false },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: this.piePlotOptions,
    series: [{
      type: 'pie',
      name: 'Percentage',
      data: [
        { name: 'Corrected', y: 11, color: '#87CEEB' },
        { name: 'Pending', y: 77, color: '#27ae60' },
        { name: 'Overdue', y: 11, color: '#e74c3c' }
      ]
    }]
  };

  // Chart 3: PDCA Distribution
  pdcaDistributionOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: 'PDCA Distribution' },
    credits: { enabled: false },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: this.piePlotOptions,
    series: [{
      type: 'pie',
      name: 'Percentage',
      data: [
        { name: 'Plan', y: 25, color: '#3498db' },   // Blue
        { name: 'Do', y: 35, color: '#e67e22' },     // Orange
        { name: 'Check', y: 20, color: '#9b59b6' },  // Purple
        { name: 'Act', y: 20, color: '#2ecc71' }     // Green
      ]
    }]
  };

  constructor() { }
  ngOnInit(): void { }
}