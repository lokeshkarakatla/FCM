import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-pa-model-trend',
  templateUrl: './radar-pa-model-trend.component.html',
  styleUrls: ['./radar-pa-model-trend.component.scss']
})
export class RadarPaModelTrendComponent implements OnInit {

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
        name: 'Hector',
        value: 1290
      },
      {
        name: 'Ev',
        value: 320
      },
      {
        name: 'Astor',
        value: 751
      },
      {
        name: 'Gloster',
        value: 1190
      },
     
   
     
    ];
    const first = [
      {
        name: 'Hector',
        value: 20
      },
      {
        name: 'Ev',
        value: 13
      },
      {
        name: 'Astor',
        value: 7
      },
      {
        name: 'Gloster',
        value: 11
      },
     
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {model:'Hector',demerit:'10%',issues:20}, 
    {model:'Astor',demerit:'9%',issues:7},
    {model:'Gloster',demerit:'22%',issues:11},
    {model:'EV',demerit:'15',issues:13},
   
    
    
    ];

}
