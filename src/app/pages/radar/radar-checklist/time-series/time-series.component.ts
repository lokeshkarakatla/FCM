import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-series',
  templateUrl: './time-series.component.html',
  styleUrls: ['./time-series.component.scss']
})
export class TimeSeriesComponent implements OnInit {

  public three: any[];
  public demerits: any[];
  public issues: any[];
  public showLegend = true;
  public explodeSlices = false;
  public showLabels = true;
  public doughnut = false;
  public gradient = true;
  public analytics: any[];

public showLegends = false;

public showXAxis = true;
public showYAxis = true;
public showXAxisLabel = false;
public xAxisLabel = 'Year';
public showYAxisLabel = false;
public yAxisLabel = 'Population';
// options
animations: boolean = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  };
  public colorSchemee  = {
    domain: ['rgb(255, 102, 0)','rgb(0, 128, 0)','rgb(255, 0, 0)']
    };
  constructor() {
    
    const issues = [
    {
      "name": "HR07 BP0721",
      "series": [
        {
          "name": "No of Audits",
          "value": 75
        },
      ]
    },
  
    {
      "name": "HR02 BP0421",
      "series": [
        {
          "name": "No of Audits",
          "value": 80
        },
      ]
    },
  
    {
      "name": "HR07 EP0021",
      "series": [
        {
          "name": "No of Audits",
          "value": 72
        },
      ]
    },
    {
      "name": "HR07 RG7218",
      "series": [
        {
          "name": "No of Audits",
          "value": 86
        },
      ]
    },
    {
      "name": "HR07 FK0770",
      "series": [
        {
          "name": "No of Audits",
          "value": 91
        },
      ]
    },
    
  
  ];
  const demerits = [
    {
      "name": "HR07 BP0721",
      "series": [
        {
          "name": "No of Audits",
          "value": 35
        },
      ]
    },
  
    {
      "name": "HR02 BP0421",
      "series": [
        {
          "name": "No of Audits",
          "value": 24
        },
      ]
    },
  
    {
      "name": "HR07 EP0021",
      "series": [
        {
          "name": "No of Audits",
          "value": 41
        },
      ]
    },
    {
      "name": "HR07 RG7218",
      "series": [
        {
          "name": "No of Audits",
          "value": 26
        },
      ]
    },
    {
      "name": "HR07 FK0770",
      "series": [
        {
          "name": "No of Audits",
          "value": 38
        },
      ]
    },
    
  
  ];

  Object.assign(this, {issues,demerits});  }

  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

}
