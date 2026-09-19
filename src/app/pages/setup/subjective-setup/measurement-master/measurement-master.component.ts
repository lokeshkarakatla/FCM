import { AddMesurmentComponent } from './add-mesurment/add-mesurment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-measurement-master',
  templateUrl: './measurement-master.component.html',
  styleUrls: ['./measurement-master.component.scss']
})
export class MeasurementMasterComponent implements OnInit {

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
  values=[]
  ngOnInit() {
    if (environment.mode == 1){
      this.values= this.values1
    }
    else {
      return;
    }
  }
  Gap
  Alignment
  Flush
  Consistency
  Parallelism


  values1 = [
    {category:'Exterior',measurement:'Gap',status:true,Audit:'Product Quality Audit'},
    { category: 'Interior', measurement: 'Alignment', status: true, Audit: 'Body Audit' },
    { category: 'Exterior', measurement: 'Flush', status: true, Audit: 'Product Quality Audit' },
    { category: 'Interior', measurement: 'Parallelism', status: true, Audit: 'Paint Audit' },
    { category: 'Exterior', measurement: 'Consistency', status: true, Audit: 'Product Quality Audit' },
    ]
  opendashboard(){
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addmeasurement(item){
    this.dialog.open(AddMesurmentComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
}
}
