import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsGantt from 'highcharts/modules/gantt';

// Initialize the Gantt module
HighchartsGantt(Highcharts);

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  // Gate Badges Array
  gates = [
    { label: 'G1', status: 'passed' },
    { label: 'G2', status: 'pending' },
    { label: 'G3', status: 'pending' },
    { label: 'G4', status: 'pending' },
    { label: 'G5', status: 'pending' }
  ];

  // Highcharts Gantt Configuration
  ganttChartOptions: Highcharts.Options = {
    chart: {
      backgroundColor: 'transparent',
      spacingTop: 20,
      style: { fontFamily: "'Inter', sans-serif" }
    },
    title: { text: undefined },
    credits: { enabled: false },
    xAxis: {
      currentDateIndicator: false,
      min: Date.UTC(2026, 0, 1),   // Jan 2026
      max: Date.UTC(2027, 7, 31),  // Aug 2027
      opposite: false,             // Moves the axis to the BOTTOM
      tickInterval: 1000 * 60 * 60 * 24 * 30, // Approximately 1 month
      units: [['month', [1]]],     // Forces ticks to strict calendar months
      labels: {
        format: '{value:%b %Y}', 
        step: 1,                   // Forces EVERY month label to show (no skipping)
        style: { color: '#6b7280', fontSize: '11px', fontWeight: '500' }
      },
      gridLineWidth: 1,
      gridLineColor: '#f3f4f6'
    },
    yAxis: {
      type: 'category',
      grid: { enabled: true, borderColor: '#f3f4f6' },
      labels: {
        style: { color: '#6b7280', fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px' }
      },
      categories: ['STAGE 1', 'STAGE 2', 'STAGE 3', 'STAGE 4', 'STAGE 5']
    },
    plotOptions: {
      gantt: {
        borderRadius: 4,
        pointWidth: 20,
        dataLabels: {
          enabled: true,
          format: '{point.custom.label}',
          style: { color: '#ffffff', textOutline: 'none', fontSize: '10px', fontWeight: '600' },
          align: 'left',
          padding: 8
        }
      }
    },
    series: [{
      type: 'gantt',
      name: 'Project Phases',
      data: [
        // STAGE 1
        {
          y: 0,
          start: Date.UTC(2026, 1, 1),
          end: Date.UTC(2026, 3, 15),
          color: '#10b981', // Green
          custom: { label: '100%' }
        },
        {
          y: 0,
          start: Date.UTC(2026, 3, 15),
          milestone: true,
          color: '#ef4444', // Red Gate
          marker: { symbol: 'diamond', radius: 6 }
        },

        // STAGE 2
        {
          y: 1,
          start: Date.UTC(2026, 4, 1),
          end: Date.UTC(2026, 7, 15),
          color: '#fef08a', // Light yellow remaining
          completed: { amount: 0.35, fill: '#10b981' }, 
          custom: { label: '60%' }
        },
        {
          y: 1,
          start: Date.UTC(2026, 7, 15),
          milestone: true,
          color: '#ef4444',
          marker: { symbol: 'diamond', radius: 6 }
        },

        // STAGE 3
        {
          y: 2,
          start: Date.UTC(2026, 6, 20),
          end: Date.UTC(2026, 10, 20),
          color: '#e5e7eb', // Gray planned
          custom: { label: '' }
        },
        {
          y: 2,
          start: Date.UTC(2026, 10, 20),
          milestone: true,
          color: '#ef4444',
          marker: { symbol: 'diamond', radius: 6 }
        },

        // STAGE 4
        {
          y: 3,
          start: Date.UTC(2026, 9, 15),
          end: Date.UTC(2027, 2, 25),
          color: '#e5e7eb',
          custom: { label: '' }
        },
        {
          y: 3,
          start: Date.UTC(2027, 2, 25),
          milestone: true,
          color: '#ef4444',
          marker: { symbol: 'diamond', radius: 6 }
        },

        // STAGE 5
        {
          y: 4,
          start: Date.UTC(2027, 2, 1),
          end: Date.UTC(2027, 6, 15),
          color: '#e5e7eb',
          custom: { label: '' }
        },
        {
          y: 4,
          start: Date.UTC(2027, 6, 15),
          milestone: true,
          color: '#ef4444',
          marker: { symbol: 'diamond', radius: 6 }
        }
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }
}