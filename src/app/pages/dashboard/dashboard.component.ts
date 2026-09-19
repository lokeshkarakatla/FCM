import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopPieChartComponent } from './pop-pie-chart/pop-pie-chart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Bar chart
    public showLabels = true;
    public explodeSlices = false;
    public doughnut = false;

    // single: any[];
    view: any[] = [160, 120];
    view1: any[] = [160, 100];

    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    yAxisLabel: string = '';
    showYAxisLabel: boolean = true;
    xAxisLabel: string = '';

    colorScheme = {
      domain: ['red', 'green', 'blue']
    };

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    single = [
      {
        "name": "Process",
        "value": 50
      },
      {
        "name": "SQA",
        "value": 85
      },
      {
        "name": "PE",
        "value": 97
      },
      {
        "name": "Paint",
        "value": 50
      },
      {
        "name": "Body",
        "value": 97
      },

    ];

    multi = [
      {
        "name": "Interior",
        "value": 50
      },
      {
        "name": "Exterior",
        "value": 85
      },
      {
        "name": "Overall",
        "value": 97
      },


    ];

    piechartpop(item) {
      this.dialog.open(PopPieChartComponent, {
        data: item,
        width: "1150px",
        height: "550px"
      })
    }

  }

