import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-pa-category-trend',
  templateUrl: './radar-pa-category-trend.component.html',
  styleUrls: ['./radar-pa-category-trend.component.scss']
})
export class RadarPaCategoryTrendComponent implements OnInit {

  public three: any[];
  public single: any[];
  public first: any[];
  // view: any[] = [250,300];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  constructor() {
    const three = [
      {
        name: 'Interior',
        value: 50
      },
      {
        name: 'Exterior',
        value: 25
      },
     
   
     
    ];
    const first = [
      {
        name: 'Interior',
        value: 120
      },
      {
        name: 'Exterior',
        value: 17
      },
     
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {model:'Interior',demerit:'50%',issues:120}, 
    {model:'Exterior',demerit:'25%',issues:17},
   
    
    
    ];



}
