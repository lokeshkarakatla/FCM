import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parts-pareto',
  templateUrl: './parts-pareto.component.html',
  styleUrls: ['./parts-pareto.component.scss']
})
export class PartsParetoComponent implements OnInit, AfterViewInit {

  Highcharts: typeof Highcharts = Highcharts;

  // Parts Audit Categories (Critical NCs)
  pareto = [
    { name: 'Dimensional Clock', action: '12' },
    { name: 'Surface Finish', action: '17' },
    { name: 'Performance', action: '15' },
    { name: 'Metallurgical', action: '8'  },
    { name: 'Mechanical', action: '5'  },
  ];

  // Parts Audit Categories (Important NCs)
  statusList = [
    { name: 'Dimensional Clock', action: '14' },
    { name: 'Surface Finish', action: '10' },
    { name: 'Performance', action: '19' },
    { name: 'Metallurgical', action: '6'  },
    { name: 'Mechanical', action: '9'  },
  ];

  // Commodities List
  criticalList = [
    { name: 'Casting', action: '22' },
    { name: 'Forging', action: '14' },
    { name: 'Machining', action: '18' },
    { name: 'Fasteners', action: '9'  },
    { name: 'Sheet Metal', action: '11' },
  ];

  commodityPieOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y:.0f}%' },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Dimensional', y: 21, color: '#87ceeb' },
        { name: 'Surface', y: 30, color: '#008000' },
        { name: 'Performance', y: 26, color: '#ff0000' },
        { name: 'Metallurgical', y: 14, color: '#ffff00' },
        { name: 'Mechanical', y: 9, color: '#0000ff' },
      ]
    }]
  };

  statusPieOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y:.0f}%' },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Dimensional', y: 24, color: '#87ceeb' },
        { name: 'Surface', y: 17, color: '#008000' },
        { name: 'Performance', y: 32, color: '#ff0000' },
        { name: 'Metallurgical', y: 11, color: '#ffff00' },
        { name: 'Mechanical', y: 16, color: '#0000ff' },
      ]
    }]
  };

  criticalPieOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y:.0f}%' },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Casting', y: 30, color: '#87ceeb' },
        { name: 'Forging', y: 19, color: '#008000' },
        { name: 'Machining', y: 24, color: '#ff0000' },
        { name: 'Fasteners', y: 12, color: '#ffff00' },
        { name: 'Sheet Metal', y: 15, color: '#0000ff' },
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }
}