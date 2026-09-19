import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-parameter-dashboard',
  templateUrl: './radar-parameter-dashboard.component.html',
  styleUrls: ['./radar-parameter-dashboard.component.scss']
})
export class RadarParameterDashboardComponent implements OnInit {

  public three: any[];
  public single: any[];
  public multi: any[];
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
  public colorSchemee = {
    domain: ['rgb(255, 102, 0)', 'rgb(0, 128, 0)', 'rgb(255, 0, 0)']
  };
  constructor() {
    const three = [
      {
        name: '1',
        value: 20
      },
      {
        name: '5',
        value: 7
      },
      {
        name: '10',
        value: 11
      },
      {
        name: '15',
        value: 9
      },
      {
        name: '19',
        value: 5
      },
      {
        name: '6',
        value: 1
      }

    ];
    const multi = [
      {
        "name": "Jan",
        "series": [
          {
            "name": "No of Audits",
            "value": 5
          },
        ]
      },

      {
        "name": "Feb",
        "series": [
          {
            "name": "No of Audits",
            "value": 24
          },
        ]
      },

      {
        "name": "Mar",
        "series": [
          {
            "name": "No of Audits",
            "value": 15
          },
        ]
      },
      {
        "name": "Apr",
        "series": [
          {
            "name": "No of Audits",
            "value": 26
          },
        ]
      },
      {
        "name": "May",
        "series": [
          {
            "name": "No of Audits",
            "value": 38
          },
        ]
      },
      {
        "name": "Jun",
        "series": [
          {
            "name": "No of Audits",
            "value": 26
          },

        ]
      },
      {
        "name": "Jul",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Aug",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Sep",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Oct",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Nov",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },
      {
        "name": "Dec",
        "series": [
          {
            "name": "No of Audits",
            "value": 0
          },
        ]
      },

    ];
    Object.assign(this, { three, multi });
  }

  ngOnInit() {
  }

  items = [
    { severity: 1, issues: 20 },
    { severity: 5, issues: 7 },
    { severity: 10, issues: 11 },
    { severity: 15, issues: 9 },
    { severity: 19, issues: 5 },
    { severity: 6, issues: 1 },

  ];
  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }


}
