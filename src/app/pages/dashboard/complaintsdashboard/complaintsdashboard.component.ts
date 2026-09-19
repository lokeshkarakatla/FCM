import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { FiletrCurrentStatusComponent } from 'src/app/filetr-current-status/filetr-current-status.component';

// Interfaces for type safety
interface DataRow {
  name: string;
  pending: number;
  design: number;
  implement: number;
  others: number;
  total?: number;
}
interface AgeingRow {
  period: string;
  issues: number;
}

@Component({
  selector: 'app-complaintsdashboard',
  templateUrl: './complaintsdashboard.component.html',
  styleUrls: ['./complaintsdashboard.component.scss']
})
export class ComplaintsdashboardComponent implements OnInit, AfterViewInit {
  // --- STATE MANAGEMENT ---
  activeDistribution: 'model' | 'country' | 'ageing' = 'model';
  currentView: 'graph' | 'grid' = 'graph';
  selectedModelCategory: string = 'Distribution';
  selectedCountryCategory: string = 'Distribution';

  dashboards = [
    { key: 'model', title: 'Model Wise Distribution', color: '#ffeadb' },
    { key: 'country', title: 'Country Wise Distribution', color: '#e2f6d3' },
    { key: 'ageing', title: 'Ageing Analysis', color: '#d7f3ff' }
  ];

  // --- COMPONENT DATA ---
  modelData: DataRow[] = [
    { name: 'SOLIS 26 4WD', pending: 2, design: 0, implement: 5, others: 0 },
    { name: 'SOLIS NT 90 4WD', pending: 13, design: 5, implement: 8, others: 3 },
    { name: 'SOLIS NT 60 4WD 12+12', pending: 16, design: 1, implement: 0, others: 7 },
    { name: 'Others', pending: 10, design: 8, implement: 0, others: 23 }
  ];
  countryData: DataRow[] = [
    { name: 'THAILAND', pending: 11, design: 9, implement: 3, others: 16 },
    { name: 'ISRAEL', pending: 0, design: 3, implement: 2, others: 3 },
    { name: 'NEPAL', pending: 2, design: 1, implement: 5, others: 5 },
    { name: 'Others', pending: 4, design: 1, implement: 3, others: 1 }
  ];
  ageingData: AgeingRow[] = [
    { period: '0-10', issues: 15 }, { period: '11-20', issues: 12 },
    { period: '90+ Days', issues: 30 }
  ];

  // Calculated totals and mapped values for the template
  modelTotals: any;
  countryTotals: any;
  ageingTotal: number;
  values: any;
  values1: any;
  values2: any;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.processData();
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.renderChartsWithDelay();
  }

  processData(): void {
    this.modelData.forEach(row => row.total = row.pending + row.design + row.implement + row.others);
    this.countryData.forEach(row => row.total = row.pending + row.design + row.implement + row.others);

    const calculateTotals = (data: DataRow[]) => data.reduce((acc, row) => {
        acc.pending += row.pending;
        acc.design += row.design;
        acc.implement += row.implement;
        acc.others += row.others;
        acc.total += row.total;
        return acc;
    }, { pending: 0, design: 0, implement: 0, others: 0, total: 0 });

    this.modelTotals = calculateTotals(this.modelData);
    this.countryTotals = calculateTotals(this.countryData);
    this.ageingTotal = this.ageingData.reduce((acc, row) => acc + row.issues, 0);

    this.values = this.modelData.map(item => ({ category: item.name, c: item.pending, r2: item.design, r1: item.implement, o: item.others, total: item.total }));
    this.values1 = this.countryData.map(item => ({ category: item.name, c: item.pending, r2: item.design, r1: item.implement, o: item.others, total: item.total }));
    this.values2 = this.ageingData.map(item => ({ period: item.period, issues: item.issues }));
  }

  // --- VIEW & FILTER CONTROLS ---
  setActiveDistribution(key: 'model' | 'country' | 'ageing'): void {
    this.activeDistribution = key;
    this.renderChartsWithDelay();
  }
  setView(view: 'graph' | 'grid'): void {
    this.currentView = view;
    this.renderChartsWithDelay();
  }
  setModelCategory(category: string): void {
    this.selectedModelCategory = category;
    this.renderChartsWithDelay();
  }
  setCountryCategory(category: string): void {
    this.selectedCountryCategory = category;
    this.renderChartsWithDelay();
  }
  isModelPieChartMode(): boolean {
    return this.selectedModelCategory !== 'Distribution';
  }
  isCountryPieChartMode(): boolean {
    return this.selectedCountryCategory !== 'Distribution';
  }

  // --- CHART RENDERING LOGIC ---
  renderChartsWithDelay(): void {
    if (this.currentView === 'graph') {
      setTimeout(() => this.renderAllActiveCharts(), 0);
    }
  }

  renderAllActiveCharts(): void {
    switch(this.activeDistribution) {
      case 'model': this.renderModelChart(); break;
      case 'country': this.renderCountryChart(); break;
      case 'ageing': this.renderAgeingChart(); break;
    }
  }

  renderModelChart(): void {
    if (this.isModelPieChartMode()) {
      const key = this.selectedModelCategory.toLowerCase();
      const data = this.modelData.map(d => ({ name: d.name, y: d[key] || 0 }));
      this.renderPieChart('modelPieContainer', data, `Model Wise - ${this.selectedModelCategory}`);
    } else {
      const series = ['pending', 'design', 'implement', 'others'].map(key => ({ name: key.charAt(0).toUpperCase() + key.slice(1), data: this.modelData.map(d => d[key]) }));
      const categories = this.modelData.map(d => d.name);
      this.renderBarChart('modelBarContainer', series, categories, 'Model Wise Distribution');
    }
  }
  renderCountryChart(): void {
    if (this.isCountryPieChartMode()) {
      const key = this.selectedCountryCategory.toLowerCase();
      const data = this.countryData.map(d => ({ name: d.name, y: d[key] || 0 }));
      this.renderPieChart('countryPieContainer', data, `Country Wise - ${this.selectedCountryCategory}`);
    } else {
      const series = ['pending', 'design', 'implement', 'others'].map(key => ({ name: key.charAt(0).toUpperCase() + key.slice(1), data: this.countryData.map(d => d[key]) }));
      const categories = this.countryData.map(d => d.name);
      this.renderBarChart('countryBarContainer', series, categories, 'Country Wise Distribution');
    }
  }
  renderAgeingChart(): void {
    const data = this.ageingData.map(d => ({ name: d.period, y: d.issues }));
    this.renderPieChart('ageingPieContainer', data, 'Ageing Analysis');
  }

  // --- GENERIC CHART GENERATORS ---
  renderPieChart(containerId: string, data: any[], title: string): void {
    Highcharts.chart(containerId, { chart: { type: 'pie' }, title: { text: title }, tooltip: { pointFormat: '{series.name}: <b>{point.y}</b>' }, plotOptions: { pie: { allowPointSelect: true, cursor: 'pointer', dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.1f} %' } } }, series: [{ type: 'pie', name: 'Count', colorByPoint: true, data: data }] });
  }
  renderBarChart(containerId: string, series: any[], categories: string[], title: string): void {
    Highcharts.chart(containerId, { chart: { type: 'column' }, title: { text: title }, xAxis: { categories: categories, crosshair: true }, yAxis: { min: 0, title: { text: 'Total Count' } }, tooltip: { headerFormat: '<b>{point.x}</b><br/>', pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}' }, plotOptions: { column: { stacking: 'normal' } }, series: series });
  }

  // --- UTILITY & NAVIGATION ---
  openGrid(): void {
    this.dialog.open(FiletrCurrentStatusComponent, { width: "600px", height: "auto" });
  }
  navigate(): void { /* Placeholder for navigation logic */ }
  goBack(): void { this.router.navigate(['/app/complaints']); }
}