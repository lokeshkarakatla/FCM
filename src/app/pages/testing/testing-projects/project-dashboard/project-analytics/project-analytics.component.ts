import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsGantt from 'highcharts/modules/gantt'; 

HighchartsGantt(Highcharts); 

interface Task {
  name: string;
  assignee: string;
  status: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  slipDays: string;
}

@Component({
  selector: 'app-project-analytics',
  templateUrl: './project-analytics.component.html',
  styleUrls: ['./project-analytics.component.scss']
})
export class ProjectAnalyticsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag: boolean = false; 

  // --- Task Data (Manufacturing Focus) ---
  overdueTasks: Task[] = [
    { name: 'Hydraulic press calibration', assignee: 'Rajesh V.', status: 'CRITICAL', slipDays: '+8d' },
    { name: 'Raw material delay (Aluminium)', assignee: 'Priya S.', status: 'CRITICAL', slipDays: '+5d' },
    { name: 'Injection mold rework', assignee: 'Vikram K.', status: 'HIGH', slipDays: '+4d' },
    { name: 'Robotic welding arm setup', assignee: 'Neha R.', status: 'HIGH', slipDays: '+3d' },
    { name: 'Safety compliance audit', assignee: 'Arjun M.', status: 'MEDIUM', slipDays: '+2d' },
    { name: 'Packaging spec sign-off', assignee: 'Kiran P.', status: 'MEDIUM', slipDays: '+1d' }
  ];

  selectedTimeframe: string = 'Month';
  timeframes: string[] = ['Today', 'Week', 'Month', 'Quarter'];

  // --- Highcharts Configurations ---

  // 1. Gantt Chart Options
  ganttChartOptions: Highcharts.Options = {
    // Increased marginLeft to 200 to give the labels plenty of space
    chart: { backgroundColor: 'transparent', marginLeft: 200 }, 
    title: { text: '' },
    credits: { enabled: false },
    xAxis: {
      min: Date.UTC(2026, 5, 1),  
      max: Date.UTC(2026, 8, 30), 
      tickInterval: 1000 * 60 * 60 * 24 * 30, 
      labels: { format: '{value:%b}' }, 
      gridLineWidth: 1
    },
    yAxis: {
      type: 'category', 
      reversed: true,   
      title: { text: undefined }, 
      grid: { enabled: true, borderColor: '#f3f4f6' },
      labels: { 
        align: 'right', 
        // Increased x padding to -40 to ensure text does not touch the bars
        x: -40, 
        style: { fontSize: '12px', color: '#1f2937', fontWeight: '500' } 
      },
      categories: [
        'Component Sourcing', 'Tooling & Dies', 'Assembly Line Setup', 'PLC Programming', 
        'Dry Run Testing', 'First Article Inspection', 'Quality Certification', 'Mass Production Ramp'
      ]
    },
    plotOptions: {
      gantt: { borderRadius: 12, pointWidth: 16 }
    },
    series: [{
      type: 'gantt',
      name: 'Production Timeline',
      dataLabels: {
        enabled: true,
        format: '{point.custom.label}', 
        style: { color: '#ffffff', textOutline: 'none', fontWeight: 'bold', fontSize: '10px' }
      },
      data: [
        { y: 0, start: Date.UTC(2026, 5, 1), end: Date.UTC(2026, 5, 17), color: '#10b981', custom: { label: '16d' } },
        { y: 1, start: Date.UTC(2026, 5, 14), end: Date.UTC(2026, 6, 8), color: '#10b981', custom: { label: '24d' } },
        { y: 2, start: Date.UTC(2026, 5, 28), end: Date.UTC(2026, 6, 26), color: '#3b82f6', custom: { label: '28d' } },
        { y: 3, start: Date.UTC(2026, 6, 15), end: Date.UTC(2026, 6, 27), color: '#ef4444', custom: { label: '12d' } },
        { y: 4, start: Date.UTC(2026, 6, 25), end: Date.UTC(2026, 7, 10), color: '#9ca3af', custom: { label: '16d' } },
        { y: 5, start: Date.UTC(2026, 7, 5), end: Date.UTC(2026, 7, 27), color: '#9ca3af', custom: { label: '22d' } },
        { y: 6, start: Date.UTC(2026, 7, 20), end: Date.UTC(2026, 8, 3), color: '#9ca3af', custom: { label: '14d' } },
        { y: 7, start: Date.UTC(2026, 8, 1), end: Date.UTC(2026, 8, 19), color: '#9ca3af', custom: { label: '18d' } }
      ]
    }]
  };

  // 2. Combo Bar/Line Chart Container (Production Yield vs Planned)
  velocityChartOptions: Highcharts.Options = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    legend: { itemMarginTop: 8, itemMarginBottom: 8 }, 
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] },
    yAxis: [
      { title: { text: '' }, labels: { format: '{value}%' }, max: 8 },
      { title: { text: '' }, labels: { format: '{value}%' }, opposite: true, max: 60 }
    ],
    series: [
      { type: 'column', name: 'Scrap Rate %', data: [6, 5, 4, 3, 2, 2, 1], color: '#ef4444', yAxis: 0 },
      { type: 'line', name: 'Overall Equipment Effectiveness (OEE)', data: [45, 50, 52, 55, 58, 60, 62], color: '#10b981', yAxis: 1, dashStyle: 'Dash', marker: { enabled: false } }
    ]
  };

  // 3. Bar Chart Container (Production Costs)
  costsChartOptions: Highcharts.Options = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    legend: { itemMarginTop: 8, itemMarginBottom: 8 }, 
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { title: { text: '' }, labels: { format: '{value}L' } },
    plotOptions: { column: { borderRadius: 2 } },
    series: [
      { type: 'column', name: 'Actual Cost', data: [11, 18, 22, 18, 24, 18], color: '#a855f7' },
      { type: 'column', name: 'Budgeted Cost', data: [10, 20, 26, 22, 28, 21], color: '#3b82f6' }
    ]
  };

  // 4. Line Chart Container (Supply Chain & Inventory Buffer)
  bufferChartOptions: Highcharts.Options = {
    chart: { type: 'line', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    legend: { itemMarginTop: 8, itemMarginBottom: 8 }, 
    xAxis: { categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'] },
    yAxis: { title: { text: '' }, labels: { format: '{value}%' }, max: 40 },
    series: [
      { type: 'line', name: 'Inventory Buffer Consumed %', data: [0, 4, 10, 18, 25, 30, 33, 35, 37, 38], color: '#f59e0b', dashStyle: 'ShortDash', marker: { symbol: 'circle' } },
      { type: 'line', name: 'Order Fulfillment %', data: [0, 5, 8, 12, 15, 20, 21, 23, 24, 26], color: '#10b981', dashStyle: 'ShortDash', marker: { symbol: 'circle' } }
    ]
  };

  // 5. Stacked Bar Chart (Factory Expenses)
  expensesChartOptions: Highcharts.Options = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    legend: { itemMarginTop: 10, itemMarginBottom: 10, itemDistance: 20 }, 
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { title: { text: '' }, labels: { format: '{value}L' } },
    plotOptions: { column: { stacking: 'normal', borderWidth: 0 } },
    series: [
      { type: 'column', name: 'Direct Labour', data: [5, 8, 12, 11, 14, 10], color: '#3b82f6' },
      { type: 'column', name: 'Raw Materials', data: [3, 6, 8, 7, 9, 7], color: '#10b981' },
      { type: 'column', name: 'Factory Overhead', data: [2, 3, 4, 3, 4, 3], color: '#f59e0b' },
      { type: 'column', name: 'Tooling & Machining', data: [1, 1, 2, 2, 2, 1], color: '#ef4444' }
    ]
  };

  // 6. Stacked Bar Chart (Man-Hours Logged)
  hoursChartOptions: Highcharts.Options = {
    chart: { type: 'column', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    legend: { itemMarginTop: 10, itemMarginBottom: 10, itemDistance: 20 }, 
    xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    yAxis: { title: { text: '' }, max: 800 },
    plotOptions: { column: { stacking: 'normal', borderWidth: 0 } },
    series: [
      { type: 'column', name: 'Production Staff', data: [280, 380, 420, 400, 480, 390], color: '#3b82f6' },
      { type: 'column', name: 'Quality Assurance', data: [40, 60, 100, 70, 110, 100], color: '#10b981' },
      { type: 'column', name: 'Maintenance & Setup', data: [10, 15, 60, 50, 50, 40], color: '#f59e0b' }
    ]
  };

  constructor() { }

  ngOnInit(): void { }

  setTimeframe(frame: string): void {
    this.selectedTimeframe = frame;

    switch (frame) {
      case 'Today':
        this.costsChartOptions.xAxis = { categories: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'] };
        this.costsChartOptions.series = [
          { type: 'column', name: 'Actual Cost', data: [1, 2, 3, 2, 4, 3], color: '#a855f7' },
          { type: 'column', name: 'Budgeted Cost', data: [2, 2, 2, 3, 3, 4], color: '#3b82f6' }
        ];

        this.expensesChartOptions.xAxis = { categories: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'] };
        this.expensesChartOptions.series = [
          { type: 'column', name: 'Direct Labour', data: [1, 1, 2, 1, 2, 1], color: '#3b82f6' },
          { type: 'column', name: 'Raw Materials', data: [0.5, 1, 1, 1, 1, 1], color: '#10b981' },
          { type: 'column', name: 'Factory Overhead', data: [0.3, 0.5, 0.5, 0.4, 0.5, 0.4], color: '#f59e0b' },
          { type: 'column', name: 'Tooling & Machining', data: [0.2, 0.2, 0.3, 0.2, 0.3, 0.2], color: '#ef4444' }
        ];

        this.hoursChartOptions.xAxis = { categories: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'] };
        this.hoursChartOptions.series = [
          { type: 'column', name: 'Production Staff', data: [40, 50, 60, 55, 70, 65], color: '#3b82f6' },
          { type: 'column', name: 'Quality Assurance', data: [10, 12, 15, 14, 18, 15], color: '#10b981' },
          { type: 'column', name: 'Maintenance & Setup', data: [5, 7, 8, 7, 10, 8], color: '#f59e0b' }
        ];
        break;

      case 'Week':
        this.costsChartOptions.xAxis = { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] };
        this.costsChartOptions.series = [
          { type: 'column', name: 'Actual Cost', data: [2, 4, 5, 3, 4, 6, 5], color: '#a855f7' },
          { type: 'column', name: 'Budgeted Cost', data: [2, 3, 4, 4, 5, 5, 6], color: '#3b82f6' }
        ];

        this.expensesChartOptions.xAxis = { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] };
        this.expensesChartOptions.series = [
          { type: 'column', name: 'Direct Labour', data: [1, 2, 2, 1, 2, 2, 1], color: '#3b82f6' },
          { type: 'column', name: 'Raw Materials', data: [1, 1, 2, 1, 1, 2, 1], color: '#10b981' },
          { type: 'column', name: 'Factory Overhead', data: [0.5, 0.5, 1, 0.5, 0.5, 1, 0.5], color: '#f59e0b' },
          { type: 'column', name: 'Tooling & Machining', data: [0.2, 0.2, 0.5, 0.2, 0.2, 0.5, 0.2], color: '#ef4444' }
        ];

        this.hoursChartOptions.xAxis = { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] };
        this.hoursChartOptions.series = [
          { type: 'column', name: 'Production Staff', data: [60, 70, 80, 75, 90, 85, 70], color: '#3b82f6' },
          { type: 'column', name: 'Quality Assurance', data: [20, 25, 30, 28, 35, 30, 25], color: '#10b981' },
          { type: 'column', name: 'Maintenance & Setup', data: [10, 12, 15, 14, 18, 16, 12], color: '#f59e0b' }
        ];
        break;

      case 'Quarter':
        this.costsChartOptions.xAxis = { categories: ['Q1', 'Q2', 'Q3', 'Q4'] };
        this.costsChartOptions.series = [
          { type: 'column', name: 'Actual Cost', data: [51, 60, 55, 68], color: '#a855f7' },
          { type: 'column', name: 'Budgeted Cost', data: [56, 71, 65, 80], color: '#3b82f6' }
        ];

        this.expensesChartOptions.xAxis = { categories: ['Q1', 'Q2', 'Q3', 'Q4'] };
        this.expensesChartOptions.series = [
          { type: 'column', name: 'Direct Labour', data: [25, 35, 28, 40], color: '#3b82f6' },
          { type: 'column', name: 'Raw Materials', data: [17, 23, 18, 30], color: '#10b981' },
          { type: 'column', name: 'Factory Overhead', data: [9, 10, 11, 12], color: '#f59e0b' },
          { type: 'column', name: 'Tooling & Machining', data: [4, 5, 6, 7], color: '#ef4444' }
        ];

        this.hoursChartOptions.xAxis = { categories: ['Q1', 'Q2', 'Q3', 'Q4'] };
        this.hoursChartOptions.series = [
          { type: 'column', name: 'Production Staff', data: [900, 1100, 1000, 1200], color: '#3b82f6' },
          { type: 'column', name: 'Quality Assurance', data: [250, 300, 280, 350], color: '#10b981' },
          { type: 'column', name: 'Maintenance & Setup', data: [120, 150, 140, 180], color: '#f59e0b' }
        ];
        break;

      default:
        this.costsChartOptions.xAxis = { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] };
        this.costsChartOptions.series = [
          { type: 'column', name: 'Actual Cost', data: [11, 18, 22, 18, 24, 18], color: '#a855f7' },
          { type: 'column', name: 'Budgeted Cost', data: [10, 20, 26, 22, 28, 21], color: '#3b82f6' }
        ];

        this.expensesChartOptions.xAxis = { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] };
        this.expensesChartOptions.series = [
          { type: 'column', name: 'Direct Labour', data: [5, 8, 12, 11, 14, 10], color: '#3b82f6' },
          { type: 'column', name: 'Raw Materials', data: [3, 6, 8, 7, 9, 7], color: '#10b981' },
          { type: 'column', name: 'Factory Overhead', data: [2, 3, 4, 3, 4, 3], color: '#f59e0b' },
          { type: 'column', name: 'Tooling & Machining', data: [1, 1, 2, 2, 2, 1], color: '#ef4444' }
        ];

        this.hoursChartOptions.xAxis = { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] };
        this.hoursChartOptions.series = [
          { type: 'column', name: 'Production Staff', data: [280, 380, 420, 400, 480, 390], color: '#3b82f6' },
          { type: 'column', name: 'Quality Assurance', data: [40, 60, 100, 70, 110, 100], color: '#10b981' },
          { type: 'column', name: 'Maintenance & Setup', data: [10, 15, 60, 50, 50, 40], color: '#f59e0b' }
        ];
    }

    this.updateFlag = false;
    setTimeout(() => {
      this.updateFlag = true;
    });
  }
}