import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'; 

@Component({
  selector: 'app-process-all',
  templateUrl: './process-all.component.html',
  styleUrls: ['./process-all.component.scss']
})
export class ProcessAllComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; 

  // Table Data 1
  commodityList = [
    { name: 'Casting', rating5: 12, rating4: 8, rating3: 5, rating2: 3, rating1: 1, ratingNA: 0 },
    { name: 'Forging', rating5: 10, rating4: 7, rating3: 6, rating2: 2, rating1: 1, ratingNA: 1 },
    { name: 'Machining', rating5: 15, rating4: 9, rating3: 4, rating2: 2, rating1: 0, ratingNA: 0 },
    { name: 'Fasteners', rating5: 8, rating4: 10, rating3: 6, rating2: 3, rating1: 2, ratingNA: 1 },
    { name: 'Non-Metallic', rating5: 11, rating4: 7, rating3: 5, rating2: 4, rating1: 1, ratingNA: 0 },
    { name: 'Sheet Metal', rating5: 9, rating4: 8, rating3: 7, rating2: 3, rating1: 2, ratingNA: 1 }
  ];

  // Table Data 2 
  statusList = [
    { rating: 'Excellent', percent: '15.8%' }, 
    { rating: 'Good', percent: '26.3%' },      
    { rating: 'Satisfied', percent: '10.5%' }, 
    { rating: 'Major', percent: '26.3%' },     
    { rating: 'Critical', percent: '10.5%' },  
    { rating: 'NA', percent: '10.5%' },        
  ];

  // Commodity Chart Options 
  commodityPieOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        size: '75%', // <-- Added to lock the size
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.1f}%' },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Casting', y: 29 },      
        { name: 'Forging', y: 27 },      
        { name: 'Machining', y: 30 },    
        { name: 'Fasteners', y: 30 },    
        { name: 'Non-Metallic', y: 28 }, 
        { name: 'Sheet Metal', y: 30 }   
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
        size: '75%', // <-- Added to lock the size
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.1f}%' },
        showInLegend: false
      }
    },
  series: [{
  type: 'pie',
  data: [
    { name: 'Excellent', y: 30, color: '#4c9a2a' }, // green
    { name: 'Good', y: 50, color: '#3b82f6' },      // blue
    { name: 'Satisfied', y: 20, color: '#fcd34d' }, // yellow
    { name: 'Major', y: 50, color: '#f8a000' },     // orange
    { name: 'Critical', y: 20, color: '#dc2626' },  // red
    { name: 'NA', y: 20, color: '#9ca3af' }         // gray
  ]
}]
  };

  constructor() { }

  ngOnInit(): void {
  }
}