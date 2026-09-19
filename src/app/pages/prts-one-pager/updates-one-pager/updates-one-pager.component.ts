import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUpdateComponent } from './add-update/add-update.component';

@Component({
  selector: 'app-updates-one-pager',
  templateUrl: './updates-one-pager.component.html',
  styleUrls: ['./updates-one-pager.component.scss']
})
export class UpdatesOnePagerComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  close() {

  }

  addMeeting(item) {
    this.dialog.open(AddUpdateComponent, {
      data: item,
      width: "850px",
      height: "auto"
    })
  }

}
