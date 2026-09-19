import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-bellcurve',
  templateUrl: './analytics-bellcurve.component.html',
  styleUrls: ['./analytics-bellcurve.component.scss']
})
export class AnalyticsBellcurveComponent implements OnInit {

  chartOptions = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Bell Curve for Process Audits",
      fontFamily: "Arial, sans-serif",
      fontWeight: "normal",
      fontSize: 24,
      margin: 30
    },
    axisX: {
      labelFontFamily: "Arial, sans-serif",
      labelFontColor: "#777",
      tickThickness: 0,
      lineThickness: 1,
      lineColor: "#d3d3d3"
    },
    axisY: {
      minimum: 0,
      maximum: 100,
      interval: 10,
      gridColor: "#e6e6e6",
      gridThickness: 1,
      lineThickness: 0,
      tickThickness: 0,
      labelFontFamily: "Arial, sans-serif",
      labelFontColor: "#777"
    },
    data: [{
      type: "column",
      color: "#8cd3ef", // Matches the light blue in the image
      dataPoints: [
        { label: "0-10", y: 16 },
        { label: "10-20", y: 3 },
        { label: "20-30", y: 1 },
        { label: "30-40", y: 5 },
        { label: "40-50", y: 1 },
        { label: "50-60", y: 60 },
        { label: "60-70", y: 76 },
        { label: "70-80", y: 93 },
        { label: "80-90", y: 79 },
        { label: "90-100", y: 35 }
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}