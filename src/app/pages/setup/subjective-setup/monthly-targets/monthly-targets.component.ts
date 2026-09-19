import { AddMesurmentComponent } from './../measurement-master/add-mesurment/add-mesurment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddMonthlyComponent } from './add-monthly/add-monthly.component';

@Component({
  selector: 'app-monthly-targets',
  templateUrl: './monthly-targets.component.html',
  styleUrls: ['./monthly-targets.component.scss']
})
export class MonthlyTargetsComponent implements OnInit {

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



  values1 = [
    { target: '150', month: 'Oct', year: "2021", model: "Hector", status: true,Audit:'Product Quality Audit' },
    { target: '175', month: 'Nov', year: "2021", model: "Astor", status: true, Audit: 'Body Type' },
    { target: '90', month: 'Dec', year: "2021", model: "Gloster", status: true, Audit: 'Product Quality Audit' },
    { target: '100', month: 'Jan', year: "2022", model: "ZSEV", status: true, Audit: 'Paint Audit' },

  ]
  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  addtarget(item) {
    this.dialog.open(AddMonthlyComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  openUploadCSV() {

  }

  downloadSampleExcel() {

  }


}
