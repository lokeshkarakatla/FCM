import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectiveReports } from 'src/app/pages/subjective-audits/subjective-reports/subjective-reports.data';

@Component({
  selector: 'app-fragile',
  templateUrl: './fragile.component.html',
  styleUrls: ['./fragile.component.scss']
})
export class FragileComponent implements OnInit {

  data = new SubjectiveReports();
  filterToggle: boolean = false;
  public single: any[];
  public multi: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = false;
  public showXAxisLabel = true;
  public xAxisLabel = 'Months';
  public showYAxisLabel = true;
  public yAxisLabel = '';
  public colorScheme = {
    domain: ['#9B870C', '#002366', '#378D3B', '#0096A6', '#DE1738', '#654321', 'purple']
  };
  // public settings: Settings;

  constructor(public dialog: MatDialog,) {
    //this.settings = this.appSettings.settings; 
    // Object.assign(this, { single, multi });    
    this.multi = this.data.BarChart2();
  }

  fragileSystems = [
    { quality: '23', prod: '41', process: '15', data: '25', comp: '12', others: '12', press: '128' },
  ];

  colorCode = [
    { ColorCode: '#9B870C', ColorCode1: '#002366', ColorCode2: '#378D3B', ColorCode3: '#0096A6', ColorCode4: '#DE1738', ColorCode5: '#654321', ColorCode6: 'purple', },
  ]

  ngOnInit(): void {
  }


  // openDialog(id) {
  //   let dialogRef = this.dialog.open(AddReportDialogComponent, {
  //     data: id,
  //     height: 'auto',
  //     width: '600px'
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //   });
  // }

  public onSelect(event) {

  }
}


