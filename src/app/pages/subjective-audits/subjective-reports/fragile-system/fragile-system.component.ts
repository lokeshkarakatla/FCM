import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SubjectiveReports } from '../subjective-reports.data';

@Component({
  selector: 'app-fragile-system',
  templateUrl: './fragile-system.component.html',
  styleUrls: ['./fragile-system.component.scss']
})
export class FragileSystemComponent implements OnInit {

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
    { quality: '12', prod: '24', process: '45', data: '67', comp: '34', others: '37', press: '76' },
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

