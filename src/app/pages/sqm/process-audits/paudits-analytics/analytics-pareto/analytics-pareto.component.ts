import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analytics-pareto',
  templateUrl: './analytics-pareto.component.html',
  styleUrls: ['./analytics-pareto.component.scss']
})
export class AnalyticsParetoComponent implements OnInit, AfterViewInit {

  Highcharts: typeof Highcharts = Highcharts;

  // Real Process Categories (Critical)
  pareto = [
    { name: 'QMS (Quality Management System)', action: '12' },
    { name: 'MM (Material Management)', action: '17' },
    { name: 'PPC (Production Planning & Control)', action: '15' },
    { name: 'CAPA (Corrective & Preventive Actions)', action: '8' },
    { name: '5S (Workplace Organization)', action: '5' },
  ];

  // Real Process Categories (Important)
  statusList = [
    { name: 'QMS (Quality Management System)', action: '14' },
    { name: 'MM (Material Management)', action: '10' },
    { name: 'PPC (Production Planning & Control)', action: '19' },
    { name: 'IME (Inspection Engineering)', action: '11' },
    { name: '5S (Workplace Organization)', action: '7' },
  ];

  // Real Commodity Names
  criticalList = [
    { name: 'Casting', action: '22' },
    { name: 'Forging', action: '14' },
    { name: 'Machining', action: '18' },
    { name: 'Fasteners', action: '9' },
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
        { name: 'QMS', y: 21, color: '#87ceeb' },
        { name: 'MM', y: 30, color: '#008000' },
        { name: 'PPC', y: 26, color: '#ff0000' },
        { name: 'CAPA', y: 14, color: '#ffff00' },
        { name: '5S', y: 9, color: '#0000ff' },
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
        { name: 'QMS', y: 23, color: '#87ceeb' },
        { name: 'MM', y: 16, color: '#008000' },
        { name: 'PPC', y: 31, color: '#ff0000' },
        { name: 'IME', y: 18, color: '#ffff00' },
        { name: '5S', y: 12, color: '#0000ff' },
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