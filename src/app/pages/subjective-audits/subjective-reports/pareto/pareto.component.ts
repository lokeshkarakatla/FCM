import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareto',
  templateUrl: './pareto.component.html',
  styleUrls: ['./pareto.component.scss']
})
export class ParetoComponent implements OnInit {

  // Bar chart
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  // single: any[];
  view: any[] = [1000, 1500];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Top 50 Defects';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';

  colorScheme = {
    domain: ['#5AA454', '#A10A28']
  };

  constructor() {
  }

  monthlyDistributionData = [
    {
      name: 'Top 50 Defects',
      value: 50
    },
    {
      name: 'All Others Defects',
      value: 150
    },
  ];

 
single = [
  { "name": "Process Parameters - Pass", "value": 60 },
  { "name": "Process Parameters - Fail", "value": 40 },
  { "name": "Temperature and Pressure - Pass", "value": 70 },
  { "name": "Temperature and Pressure - Fail", "value": 30 },
  { "name": "Flow Rate and Speed - Pass", "value": 80 },
  { "name": "Flow Rate and Speed - Fail", "value": 20 },
  { "name": "Time (Cycle, Processing, Curing) - Pass", "value": 65 },
  { "name": "Time (Cycle, Processing, Curing) - Fail", "value": 35 },
  { "name": "Concentration and Mixing Ratios - Pass", "value": 55 },
  { "name": "Concentration and Mixing Ratios - Fail", "value": 45 },
  { "name": "Product Parameters - Pass", "value": 70 },
  { "name": "Product Parameters - Fail", "value": 30 },
  { "name": "Physical Dimensions and Weight - Pass", "value": 75 },
  { "name": "Physical Dimensions and Weight - Fail", "value": 25 },
  { "name": "Material Properties (e.g., hardness, tensile strength) - Pass", "value": 60 },
  { "name": "Material Properties (e.g., hardness, tensile strength) - Fail", "value": 40 },
  { "name": "Functionality and Performance - Pass", "value": 85 },
  { "name": "Functionality and Performance - Fail", "value": 15 },
  { "name": "Aesthetics and Surface Finish - Pass", "value": 50 },
  { "name": "Aesthetics and Surface Finish - Fail", "value": 50 },
  { "name": "Safety and Reliability - Pass", "value": 90 },
  { "name": "Safety and Reliability - Fail", "value": 10 },
  { "name": "Machine Parameters - Pass", "value": 65 },
  { "name": "Machine Parameters - Fail", "value": 35 },
  { "name": "Speed and Feed Rate - Pass", "value": 70 },
  { "name": "Speed and Feed Rate - Fail", "value": 30 },
  { "name": "Depth of Cut - Pass", "value": 80 },
  { "name": "Depth of Cut - Fail", "value": 20 },
  { "name": "Temperature and Pressure Settings - Pass", "value": 60 },
  { "name": "Temperature and Pressure Settings - Fail", "value": 40 },
  { "name": "Tooling and Equipment Calibration - Pass", "value": 55 },
  { "name": "Tooling and Equipment Calibration - Fail", "value": 45 },
  { "name": "Key Performance Indicators (KPIs) - Pass", "value": 70 },
  { "name": "Key Performance Indicators (KPIs) - Fail", "value": 30 },
  { "name": "Overall Equipment Effectiveness (OEE) - Pass", "value": 75 },
  { "name": "Overall Equipment Effectiveness (OEE) - Fail", "value": 25 },
  { "name": "Throughput - Pass", "value": 80 },
  { "name": "Throughput - Fail", "value": 20 },
  { "name": "Cycle Time - Pass", "value": 60 },
  { "name": "Cycle Time - Fail", "value": 40 },
  { "name": "Scrap Rate - Pass", "value": 55 },
  { "name": "Scrap Rate - Fail", "value": 45 },
  { "name": "On-Time Delivery (OTD) - Pass", "value": 65 },
  { "name": "On-Time Delivery (OTD) - Fail", "value": 35 },
  { "name": "Machine Downtime - Pass", "value": 70 },
  { "name": "Machine Downtime - Fail", "value": 30 },
  { "name": "First Pass Yield (FPY) - Pass", "value": 85 },
  { "name": "First Pass Yield (FPY) - Fail", "value": 15 }
];

  ngOnInit() {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
