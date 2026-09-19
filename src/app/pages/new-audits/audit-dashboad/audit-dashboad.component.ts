import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PieChartPopComponent } from './pie-chart-pop/pie-chart-pop.component';

@Component({
  selector: 'app-audit-dashboad',
  templateUrl: './audit-dashboad.component.html',
  styleUrls: ['./audit-dashboad.component.scss']
})
export class AuditDashboadComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  piechartpop(item) {
    this.dialog.open(PieChartPopComponent, {
      data: item,
      width: "1150px",
      height: "500px"
    })
  }
}