import { ClientsData } from 'src/app/pages/prts-part/clientsdata';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prts-new-alerts',
  templateUrl: './prts-new-alerts.component.html',
  styleUrls: ['./prts-new-alerts.component.scss']
})
export class PrtsNewAlertsComponent implements OnInit {

  filterToggle: boolean = false;
  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = ClientsData.alert();
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
