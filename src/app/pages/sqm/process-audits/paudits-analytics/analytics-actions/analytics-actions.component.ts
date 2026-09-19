import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analytics-actions',
  templateUrl: './analytics-actions.component.html',
  styleUrls: ['./analytics-actions.component.scss']
})
export class AnalyticsActionsComponent {
  Highcharts: typeof Highcharts = Highcharts;

  private months = [
    'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December', 'January', 'February'
  ];

  // Aging Analysis table data
  agingList = [
    { period: '0-10',   action: '20%' },
    { period: '10-20',  action: '30%' },
    { period: '20-30',  action: '40%' },
    { period: '30-40',  action: '50%' },
    { period: '40-50',  action: '60%' },
    { period: '50-100', action: '70%' },
    { period: '100+',   action: '80%' },
  ];

  // ── Charts ──────────────────────────────────────────────────────────────

  criticalOptions: Highcharts.Options = this.buildMonthlyBar(
    [82, 75, 65, 70, 90, 85, 75, 65, 60, 80, 75, 60]
  );

  importantOptions: Highcharts.Options = this.buildMonthlyBar(
    [65, 75, 65, 70, 85, 80, 65, 60, 60, 55, 80, 57]
  );

  logVsResolvedOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'transparent',
      spacingRight: 15,
      spacingBottom: 15,
      events: {
        load: function(this: any) {
          const c = this;
          setTimeout(() => c.reflow(), 0);
        }
      }
    },
    title: { text: '' },
    credits: { enabled: false },
    exporting: { enabled: false },
    xAxis: {
      categories: this.months,
      labels: { style: { fontSize: '11px' } }
    },
    yAxis: {
      min: 0,
      max: 100,
      title: { text: '' },
      gridLineColor: '#e0e0e0'
    },
    legend: { enabled: true },
    plotOptions: {
      column: { borderWidth: 0, pointPadding: 0.1, groupPadding: 0.2 }
    },
    series: [
      {
        type: 'column',
        name: 'Resolved',
        color: '#4C9CA0',
        data: [37, 35, 48, 50, 42, 30, 44, 47, 52, 44, 55, 38]
      },
      {
        type: 'column',
        name: 'Log',
        color: '#6b6bb0',
        data: [75, 73, 65, 75, 60, 83, 65, 66, 55, 73, 60, 57]
      }
    ]
  };

  agingPieOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.y:.1f}%',
          style: { fontSize: '11px', fontWeight: 'bold' }
        },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      name: 'Status',
      data: [
        { name: '0-10',   y: 5.7,  color: 'red'    },
        { name: '10-20',  y: 8.6,  color: 'green'  },
        { name: '20-30',  y: 11.4, color: 'skyblue' },
        { name: '30-40',  y: 14.3, color: 'orange'  },
        { name: '40-50',  y: 17.1, color: 'purple'  },
        { name: '50-100', y: 20.0, color: 'yellow'  },
        { name: '100+',   y: 22.9, color: 'blue'    }
      ]
    }]
  };

  private buildMonthlyBar(data: number[]): Highcharts.Options {
    return {
      chart: {
        type: 'column',
        backgroundColor: 'transparent',
        spacingRight: 15,
        spacingBottom: 15,
        events: {
          load: function(this: any) {
            const c = this;
            setTimeout(() => c.reflow(), 0);
          }
        }
      },
      title: { text: '' },
      credits: { enabled: false },
      exporting: { enabled: false },
      xAxis: {
        categories: this.months,
        labels: { style: { fontSize: '11px' } }
      },
      yAxis: {
        min: 0,
        max: 100,
        title: { text: '' },
        gridLineColor: '#e0e0e0'
      },
      legend: { enabled: false },
      plotOptions: {
        column: {
          colorByPoint: true,
          borderWidth: 0,
          pointPadding: 0.05,
          groupPadding: 0.05
        }
      },
      series: [{
        type: 'column',
        name: 'Distribution',
        data
      }]
    };
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

