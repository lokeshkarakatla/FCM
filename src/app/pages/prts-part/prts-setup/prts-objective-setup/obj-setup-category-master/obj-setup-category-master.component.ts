import { AddObjSetupCategoryMasterComponent } from './add-obj-setup-category-master/add-obj-setup-category-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-obj-setup-category-master',
  templateUrl: './obj-setup-category-master.component.html',
  styleUrls: ['./obj-setup-category-master.component.scss']
})
export class ObjSetupCategoryMasterComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  values = []
  hidden = false;
  url = "/assets/carrear.jpeg"
  
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  values1 = [
    { category: 'Exterior', status: true,Audit:'Product Quality Audit' },
    { category: 'Interior', status: true,Audit:'Body Audit' },
  ]



  addcategory(item) {
    this.dialog.open(AddObjSetupCategoryMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  openimg() {

  }

  imageSource1() {
    window.open("/assets/carrear.jpeg");
  }

  imageSource() {
    this.hidden = !this.hidden;
  }

}
