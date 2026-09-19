import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddInitiativeComponent } from './add-initiative/add-initiative.component';

@Component({
  selector: 'app-prts',
  templateUrl: './prts.component.html',
  styleUrls: ['./prts.component.scss']
})


export class PrtsComponent implements OnInit {
  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  values = []
  
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle: boolean = false;

  values1 = [];

  public addmodule(item:any) {
    this.dialog.open(AddInitiativeComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  isNavOpen = true;

toggleNav() {
  this.isNavOpen = !this.isNavOpen;
}



}
