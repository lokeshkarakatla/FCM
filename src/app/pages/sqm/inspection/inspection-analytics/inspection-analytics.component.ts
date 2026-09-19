import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-inspection-analytics',
  templateUrl: './inspection-analytics.component.html',
  styleUrls: ['./inspection-analytics.component.scss']
})
export class InspectionAnalyticsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  Highcharts: typeof Highcharts = Highcharts;
  
  // 1. ADD THIS VARIABLE FOR THE HARD RESET
  chartsReady = true; 

  // ADD THE MISSING UPDATE FLAG HERE
  updateFlag = false;

  // Toggle states
  isDailyView = false;
  showFilter = false;

  // --- Active Data Variables ---
  activeIncoming = '';
  activeStartUp = '';
  activeProcess = '';
  activeFinal = '';

  activeAnnualPpmOptions: Highcharts.Options = {};
  activeMonthlyPpmOptions: Highcharts.Options = {};
  activeAnnualCopqOptions: Highcharts.Options = {};
  activeMonthlyCopqOptions: Highcharts.Options = {};
  activeDefectsPieOptions: Highcharts.Options = {};
  activeProductsPieOptions: Highcharts.Options = {};

  topDefectsLeft: any[] = [];
  topDefectsRight: any[] = [];
  activeInspectorActivities: any[] = [];
  paginatedInspectorActivities: any[] = [];

  // Reusable color palette for charts
  pieColors = ['#2caffe', '#544fc5', '#00e272', '#fe6a35', '#6b8abc', '#d568fb', '#2ee0ca', '#fa4b42', '#feb56a', '#91e8e1'];
 

  constructor() { }

  ngOnInit(): void {
    this.setMonthlyData();
  }

  switchToDaily(): void {
    if (!this.isDailyView) {
      this.chartsReady = false; // Destroy charts
      this.isDailyView = true;
      this.setDailyData();
      if (this.paginator) this.paginator.firstPage();
      
      // Recreate charts immediately after data is set
      setTimeout(() => { this.chartsReady = true; }, 0); 
    }
  }

  switchToMonthly(): void {
    if (this.isDailyView) {
      this.chartsReady = false; // Destroy charts
      this.isDailyView = false;
      this.setMonthlyData();
      if (this.paginator) this.paginator.firstPage();
      
      // Recreate charts immediately after data is set
      setTimeout(() => { this.chartsReady = true; }, 0); 
    }
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }

  setMonthlyData(): void {
    this.activeIncoming = '1.12%';
    this.activeStartUp = '2.62%';
    this.activeProcess = '3.22%';
    this.activeFinal = '1.12%';

    this.activeAnnualPpmOptions = this.createColumnChart('Annual Defect Rate PPM Trend', 'PPM', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [50, 75, 100, 120, 140, 160, 130, 148.5, 180, 200, 150, 110]);
    this.activeMonthlyPpmOptions = this.createSplineChart('Monthly Defect Rate PPM Trend', 'PPM', Array.from({length: 31}, (_, i) => (i + 1).toString()), [50, 70, 60, 50, 80, 75, 100, 95, 120, 110, 80, 60, 50, 90, 85, 75, 100, 130, 140, 120, 90, 85, 70, 60, 110, 250, 260, 240, 230, 220, 210]);

    // Define table data first
    const allDefects = [
      { defect: 'Pin Mark', qty: 4000 },
      { defect: 'Patch Mark', qty: 7000 },
      { defect: 'Oil Mark', qty: 12455 },
      { defect: 'Gate Cut NG', qty: 8676 },
      { defect: 'Flash', qty: 3538 },
      { defect: 'Damage', qty: 3100 },
      { defect: 'Short Fill', qty: 2500 },
      { defect: 'Burn Mark', qty: 1800 },
      { defect: 'Scratch', qty: 1200 },
      { defect: 'Deformation', qty: 900 }
    ];

    // Dynamically map table data to pie chart
    this.activeDefectsPieOptions = this.createPieChart(
      allDefects.map((item, index) => ({
        name: item.defect,
        y: item.qty,
        color: this.pieColors[index % this.pieColors.length]
      }))
    );

    this.topDefectsLeft = allDefects.slice(0, 5);
    this.topDefectsRight = allDefects.slice(5, 10);

    this.activeProductsPieOptions = this.createPieChart([
      { name: 'Engine Components', y: 12, color: '#2caffe' },
      { name: 'Transmission Systems', y: 8, color: '#544fc5' },
      { name: 'Chassis and Frame', y: 0, color: '#00e272' },
      { name: 'Suspension Parts', y: 15, color: '#fe6a35' },
      { name: 'Electrical Systems', y: 0, color: '#6b8abc' },
      { name: 'Braking Systems', y: 10, color: '#d568fb' },
      { name: 'Body and Cabin', y: 20, color: '#2ee0ca' },
      { name: 'Fuel Systems', y: 0, color: '#fa4b42' },
      { name: 'Cooling Systems', y: 12, color: '#feb56a' },
      { name: 'Steering Systems', y: 8, color: '#91e8e1' }
    ]);

    this.activeInspectorActivities = [
      { inspector: 'Sai', qty: 4000, records: 120, ppm: '30,000' },
      { inspector: 'Satya', qty: 12455, records: 340, ppm: '27,298' },
      { inspector: 'Surya', qty: 8676, records: 210, ppm: '24,205' },
      { inspector: 'Vamshi', qty: 45345, records: 850, ppm: '18,745' },
      { inspector: 'Kiran', qty: 10200, records: 190, ppm: '18,627' },
      { inspector: 'Ravi', qty: 8900, records: 145, ppm: '16,292' },
      { inspector: 'Anil', qty: 5400, records: 80, ppm: '14,815' }
    ];
    this.updatePaginatedData({ pageIndex: 0, pageSize: 5, length: this.activeInspectorActivities.length });

    // Trigger chart update
    this.updateFlag = true;
  }

  setDailyData(): void {
    this.activeIncoming = '0.45%';
    this.activeStartUp = '1.02%';
    this.activeProcess = '1.80%';
    this.activeFinal = '0.50%';

    let hours = Array.from({length: 24}, (_, i) => `${i}:00`);
    this.activeAnnualPpmOptions = this.createColumnChart('Hourly PPM Trend', 'PPM', hours, [10, 15, 12, 8, 20, 25, 30, 40, 50, 45, 60, 55, 65, 70, 80, 85, 90, 75, 60, 50, 40, 30, 20, 15]);
    this.activeMonthlyPpmOptions = this.createSplineChart('Shift PPM Trend', 'PPM', ['Shift 1', 'Shift 2', 'Shift 3'], [45, 80, 30]);

    // Define table data first
    const allDefects = [
      { defect: 'Damage', qty: 250 },
      { defect: 'Flash', qty: 150 },
      { defect: 'Gate Cut NG', qty: 100 },
      { defect: 'Oil Mark', qty: 80 },
      { defect: 'Scratch', qty: 60 },
      { defect: 'Pin Mark', qty: 40 },
      { defect: 'Burn Mark', qty: 30 },
      { defect: 'Short Fill', qty: 20 },
      { defect: 'Patch Mark', qty: 10 },
      { defect: 'Deformation', qty: 5 }
    ];

    // Dynamically map table data to pie chart
    this.activeDefectsPieOptions = this.createPieChart(
      allDefects.map((item, index) => ({
        name: item.defect,
        y: item.qty,
        color: this.pieColors[index % this.pieColors.length]
      }))
    );

    this.topDefectsLeft = allDefects.slice(0, 5);
    this.topDefectsRight = allDefects.slice(5, 10);

    this.activeProductsPieOptions = this.createPieChart([
      { name: 'Engine Components', y: 12, color: '#2caffe' },
      { name: 'Transmission Systems', y: 8, color: '#544fc5' },
      { name: 'Suspension Parts', y: 15, color: '#fe6a35' },
      { name: 'Braking Systems', y: 10, color: '#d568fb' },
      { name: 'Body and Cabin', y: 20, color: '#2ee0ca' },
      { name: 'Cooling Systems', y: 12, color: '#feb56a' },
      { name: 'Steering Systems', y: 8, color: '#91e8e1' }
    ]);

    this.activeInspectorActivities = [
      { inspector: 'Sai', qty: 250, records: 12, ppm: '48,000' },
      { inspector: 'Surya', qty: 250, records: 15, ppm: '60,000' },
      { inspector: 'Vamshi', qty: 100, records: 8, ppm: '80,000' }
    ];
    this.updatePaginatedData({ pageIndex: 0, pageSize: 5, length: this.activeInspectorActivities.length });

    // Trigger chart update
    this.updateFlag = true;
  }

  handlePageEvent(event: PageEvent) {
    this.updatePaginatedData(event);
  }

  updatePaginatedData(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.activeInspectorActivities.length) {
      endIndex = this.activeInspectorActivities.length;
    }
    this.paginatedInspectorActivities = this.activeInspectorActivities.slice(startIndex, endIndex);
  }

  createColumnChart(title: string, yTitle: string, categories: string[], data: number[]): Highcharts.Options {
    return {
      chart: { type: 'column' },
      title: { text: title },
      xAxis: { categories: categories },
      yAxis: { title: { text: yTitle }, min: 0 },
      series: [{ type: 'column', name: yTitle, data: data, color: '#2caffe' }],
      credits: { enabled: false },
      legend: { enabled: false },
      accessibility: { enabled: false } 
    };
  }

  createSplineChart(title: string, yTitle: string, categories: string[], data: number[]): Highcharts.Options {
    return {
      chart: { type: 'spline' },
      title: { text: title },
      xAxis: { categories: categories },
      yAxis: { title: { text: yTitle }, min: 0 },
      series: [{ type: 'spline', name: yTitle, data: data, color: '#2caffe' }],
      credits: { enabled: false },
      legend: { enabled: false },
      accessibility: { enabled: false } 
    };
  }

  createPieChart(data: any[]): Highcharts.Options {
    return {
      chart: { type: 'pie' },
      title: { text: '' },
      series: [{ type: 'pie', innerSize: '50%', data: data }],
      credits: { enabled: false },
      accessibility: { enabled: false } 
    };
  }
}