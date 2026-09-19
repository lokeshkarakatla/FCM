import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pie-chart-pop',
  templateUrl: './pie-chart-pop.component.html',
  styleUrls: ['./pie-chart-pop.component.scss']
})
export class PieChartPopComponent implements OnInit {
  multi: any[];
  view: any[] = [650, 300];
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Agency';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Issuse';
  legendTitle: string = 'Target';
  colorScheme = {
    domain: ['red', 'blue']
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PieChartPopComponent>) {
    this.multi = [
      {
        "name": "Process",
        "series": [
          {
            "name": " Avg Day",
            "value": 50
          },
          {
            "name": "Avg Month",
            "value": 60
          }
        ]
      },

      {
        "name": "GA",
        "series": [
          {
            "name": "Avg Day",
            "value": 65
          },
          {
            "name": "Avg Month",
            "value": 100
          }
        ]
      },

      {
        "name": "Body",
        "series": [
          {
            "name": "Avg Day",
            "value": 33
          },
          {
            "name": "Avg Month",
            "value": 44
          }
        ]
      },
      {
        "name": "Press",
        "series": [
          {
            "name": "Avg Day",
            "value": 42
          },
          {
            "name": "Avg Month",
            "value": 59
          }
        ]
      },
      {
        "name": "Paint",
        "series": [
          {
            "name": "Avg Day",
            "value": 60
          },
          {
            "name": "Avg Month",
            "value": 100
          }
        ]
      },
      {
        "name": "SQE",
        "series": [
          {
            "name": "Avg Day",
            "value": 90
          },
          {
            "name": "Avg Month",
            "value": 58
          }
        ]
      },
      {
        "name": "PE",
        "series": [
          {
            "name": "Avg Day",
            "value": 15
          },
          {
            "name": "Avg Month",
            "value": 40
          }
        ]
      },

    ];
  }

  ngOnInit(): void {
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

  close() {
    this.dialogRef.close();
  }
}
