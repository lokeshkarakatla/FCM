import { AddDefectComponent } from './add-defect/add-defect.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ZonePopComponent } from './zone-pop/zone-pop.component';
import { IssuePopComponent } from './issue-pop/issue-pop.component';

@Component({
  selector: 'app-defect-master',
  templateUrl: './defect-master.component.html',
  styleUrls: ['./defect-master.component.scss']
})
export class DefectMasterComponent implements OnInit {

  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  values = []
  hidden = false;
  url = '/assets/zones.png'
  Sno: any;

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

  Image: any = '/assets/zones.png';


  values1 = [
    { sqno: 1, Audit: 'Product Quality Audit', status: true, modulename: "BSO", functioname: "Aesthetics", defectname: "Thin Paint", zone: " 1", issue: "4" },
    { sqno: 2, Audit: 'Product Quality Audit', status: true, modulename: "Door", functioname: "Mutilation", defectname: "Tool / Scuff Marks", zone: " 3", issue: " 2" },
    { sqno: 3, Audit: 'Product Quality Audit', status: true, modulename: "Rear bumper", functioname: "Mutilation", defectname: "Scratch", zone: " 2", issue: " 1" },
    { sqno: 4, Audit: 'Product Quality Audit', status: true, modulename: "Fuel Flap", functioname: "Aesthetics", defectname: "Sink / flow marks", zone: " 1", issue: "3" },
    // {status:true,modulename:"Upper trim",functioname:"Mutilation",defectname:"Contamination"},
    // {status:true,modulename:"Tailgate",functioname:"Aesthetics",defectname:"Uneven/Excess Gap/ Flushness"},
    // {status:true,modulename:"Central Console",functioname:"Mutilation",defectname:"Improper assembly"},
    // {status:true,modulename:"C pillar",functioname:"Aesthetics",defectname:"Dent/ Ding / Bump"},
    // {status:true,modulename:"REAR SEAT",functioname:"Mutilation",defectname:"Color / Shade Mismatch"},
  ]
  statusOptions = [
    { value: 1, name: 'Prepared Quote', colorCode: '#00ff0040' },
    { value: 2, name: 'PM Quote Review', colorCode: '#C0C0C0' },
    { value: 3, name: 'Quote Send', colorCode: '#87CEFA' },
    { value: 4, name: 'Awarded', colorCode: '#FFA50069' },
    { value: 5, name: 'Rejected', colorCode: '#FFFF00' },
    { value: 6, name: 'Document Taker Only', colorCode: '#FF00FF' },
  ]
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  public adddefect(item) {
    this.dialog.open(AddDefectComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  imageSource(val) {
    this.Image = val;
    this.hidden = true;
    this.Sno = val;

  }

  openzone(item) {
    this.dialog.open(ZonePopComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })

  }

  openissue(item) {
    this.dialog.open(IssuePopComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }



}
