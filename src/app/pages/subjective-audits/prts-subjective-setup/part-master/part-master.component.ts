import { AddPartComponent } from './add-part/add-part.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-part-master',
  templateUrl: './part-master.component.html',
  styleUrls: ['./part-master.component.scss']
})
export class PartMasterComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle: boolean = false;
  gridCmp: any;
  values = [];
  Status = [{ name: 'Active', value: true },
  { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  values1 = [
    { des: 'Something', part: 'Door Outer Handle', Audit: 'Product Quality Audit', modulename: "BSO", status: true },
    { des: 'Hold', part: 'Door Inner Handle', Audit: 'Product Quality Audit', modulename: "Door", status: true },
    { des: '-', part: 'Door Pull Handle', Audit: 'Product Quality Audit', modulename: "Rear bumper", },
    { des: 'Nothing', part: 'Door Outer Belt', Audit: 'Product Quality Audit', modulename: "Fuel Flap", status: true },
    { des: '-', part: 'Door Inner Belt', Audit: 'Product Quality Audit', modulename: "Upper trim", status: true },
    { des: '-', part: 'Door Inner Trim', Audit: 'Product Quality Audit', modulename: "Rear bumper", status: true },
    { des: 'Progress', part: 'Door Cladding', Audit: 'Product Quality Audit', modulename: "Fuel Flap", status: true },


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

  public addmodule(item) {
    this.dialog.open(AddPartComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
    Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }
    openUploadCSV() {

  }

  downloadSampleExcel() {

  }

}
