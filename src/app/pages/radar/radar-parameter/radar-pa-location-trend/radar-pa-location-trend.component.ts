import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-pa-location-trend',
  templateUrl: './radar-pa-location-trend.component.html',
  styleUrls: ['./radar-pa-location-trend.component.scss']
})
export class RadarPaLocationTrendComponent implements OnInit {

  
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
        name: 'Hyderabad',
        value: 20
      },
      {
        name: 'Vadodara',
        value: 13
      },
      {
        name: 'Mumbai',
        value: 30
      },
      {
        name: 'Banglore',
        value: 117
      },
     
   
     
    ];
    const first = [
      {
        name: 'Hyderabad',
        value: 20
      },
      {
        name: 'Vadodara',
        value: 13
      },
      {
        name: 'Mumbai',
        value: 30
      },
      {
        name: 'Banglore',
        value: 117
      },
     
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {model:'Hyderabad',demerit:'23%',issues:20}, 
    {model:'Vadodara',demerit:'45%',issues:7},
    {model:'Mumbai',demerit:'65%',issues:32}, 
    {model:'Banglore',demerit:'70%',issues:17},
   
    
    
    ];



}
