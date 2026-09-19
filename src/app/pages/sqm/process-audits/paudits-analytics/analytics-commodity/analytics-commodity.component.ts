import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-analytics-commodity',
  templateUrl: './analytics-commodity.component.html',
  styleUrls: ['./analytics-commodity.component.scss']
})
export class AnalyticsCommodityComponent {
  Highcharts: typeof Highcharts = Highcharts;

  // Table Data
commodityList = [
  {
    name: 'Casting',
    rating5: 12,
    rating4: 8,
    rating3: 5,
    rating2: 3,
    rating1: 1,
    ratingNA: 0
  },
  {
    name: 'Forging',
    rating5: 10,
    rating4: 7,
    rating3: 6,
    rating2: 2,
    rating1: 1,
    ratingNA: 1
  },
  {
    name: 'Machining',
    rating5: 15,
    rating4: 9,
    rating3: 4,
    rating2: 2,
    rating1: 0,
    ratingNA: 0
  },
  {
    name: 'Fasteners',
    rating5: 8,
    rating4: 10,
    rating3: 6,
    rating2: 3,
    rating1: 2,
    ratingNA: 1
  },
  {
    name: 'Non-Metallic',
    rating5: 11,
    rating4: 7,
    rating3: 5,
    rating2: 4,
    rating1: 1,
    ratingNA: 0
  },
  {
    name: 'Sheet Metal',
    rating5: 9,
    rating4: 8,
    rating3: 7,
    rating2: 3,
    rating1: 2,
    ratingNA: 1
  }
];

  statusList = [
    { rating: 'Pending', percent: '40%' },
    { rating: 'Process', percent: '40%' },
    { rating: 'Closed', percent: '40%' },
  ];

  // Commodity Chart Options
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
        { name: 'Critical', y: 30, color: '#ff0000' },
        { name: 'Important', y: 50, color: '#008000' },
        { name: 'Others', y: 20, color: '#87ceeb' }
      ]
    }]
  };

  // Status Chart Options
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
        { name: 'Pending', y: 30, color: '#87ceeb' },
        { name: 'Process', y: 50, color: '#008000' },
        { name: 'Closed', y: 20, color: '#ff0000' }
      ]
    }]
  };













  
}