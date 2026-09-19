import { AddIssueMasterComponent } from './add-issue-master/add-issue-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-issue-master',
  templateUrl: './issue-master.component.html',
  styleUrls: ['./issue-master.component.scss']
})
export class IssueMasterComponent implements OnInit {

  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
   values=[]
  ngOnInit() {
    if (environment.mode == 1){
      this.values= this.values1
    }
    else {
      return;
    }
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

 
           

  values1 = [
    { Audit: 'Product Quality Audit', status:true,modulename:"BSO",functioname:"Aesthetics",defectname:"Thin Paint",issuename:"Fuel filler hinge area/Fuel flap edge - Thin Paint & Paint Run down"},
    { Audit: 'Product Quality Audit', status:true,modulename:"Door",functioname:"Mutilation",defectname:"Ding",issuename:"RHR BSO Ding"},
    { Audit: 'Product Quality Audit', status:true,modulename:"Rear bumper",functioname:"Mutilation",defectname:"Scratch",issuename:"LHR Door outer scratch"},
    { Audit: 'Product Quality Audit', status:true,modulename:"Fuel Flap",functioname:"Aesthetics",defectname:"Sink / flow marks",issuename:"Roof rail - Sink marks / Waviness"},
    { Audit: 'Product Quality Audit', status:true,modulename:"Upper trim",functioname:"Mutilation",defectname:"Contamination",issuename:"Rear bumper contamination"},
     ]
  statusOptions = [
    {value:1, name: 'Prepared Quote', colorCode: '#00ff0040'},
    {value:2, name: 'PM Quote Review', colorCode: '#C0C0C0'},
    {value:3, name: 'Quote Send', colorCode: '#87CEFA'},
    {value:4, name: 'Awarded', colorCode: '#FFA50069'},
    {value:5, name: 'Rejected', colorCode: '#FFFF00'},
    {value:6, name: 'Document Taker Only', colorCode: '#FF00FF'},
  ]
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
}

  public addissue(item){
    this.dialog.open(AddIssueMasterComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }


}
