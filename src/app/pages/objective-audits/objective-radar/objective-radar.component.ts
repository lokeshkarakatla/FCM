import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopPieChartComponent } from 'src/app/pages/dashboard/pop-pie-chart/pop-pie-chart.component';

@Component({
  selector: 'app-objective-radar',
  templateUrl: './objective-radar.component.html',
  styleUrls: ['./objective-radar.component.scss']
})
export class ObjectiveRadarComponent implements OnInit {

  selectedYear: string = '--Select Year--';
  selectedMonth: string = '--Select Month--';

  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  view: any[] = [150, 105];
  view1: any[] = [145, 75];
  barPadding: number = 12;
  roundEdges: boolean = true;

  showXAxis: boolean = false;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = false;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = false;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['red', 'green', 'blue']
  };

  single = [
    { "name": "Process", "value": 50 },
    { "name": "SQA", "value": 85 },
    { "name": "PE", "value": 97 },
    { "name": "Paint", "value": 50 },
    { "name": "Body", "value": 97 }
  ];

  multi = [
    { "name": "Interior", "value": 50 },
    { "name": "Exterior", "value": 85 },
    { "name": "Overall", "value": 97 }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  piechartpop(item: any) {
    this.dialog.open(PopPieChartComponent, {
      data: item,
      width: "1150px",
      height: "550px"
    });
  }
}
