import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { PartsData } from '../PartsData';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {


  filterToggle: boolean = false;
  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.alert();
    }
    else {

    }
  }

  values = [

  ];


  addMeeting(item) {
    // this.dialog.open(AddMeetingComponent, {
    //   data: item,
    //   width: "850px",
    //   height: "auto"
    // })
  }
}
