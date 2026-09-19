import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-type-trend',
  templateUrl: './audit-type-trend.component.html',
  styleUrls: ['./audit-type-trend.component.scss']
})
export class AuditTypeTrendComponent implements OnInit {

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
        name: 'Product Quality Audit',
        value: 1290
      },
      {
        name: 'Body Audit',
        value: 320
      },
      {
        name: 'Paint Audit',
        value: 751
      },
     
   
     
    ];
    const first = [
      {
        name: 'Product Quality Audit',
        value: 20
      },
      {
        name: 'Body Audit',
        value: 13
      },
      {
        name: 'Paint Audit',
        value: 7
      },
     
     
    ];
    Object.assign(this, {first,three}); 
   }

  ngOnInit() {
  }

  items = [
    {model:'Product Quality Audit',demerit:1290,issues:20}, 
    {model:'Body Audit',demerit:751,issues:7},
    {model:'Paint Audit',demerit:1190,issues:11},
   
    
    
    ];

}
