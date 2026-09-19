import { AddSubSetupIssuesMasterComponent } from './add-sub-setup-issues-master/add-sub-setup-issues-master.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ModulePopComponent } from '../sub-setup-defect-master/module-pop/module-pop.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-sub-setup-issues-master',
  templateUrl: './sub-setup-issues-master.component.html',
  styleUrls: ['./sub-setup-issues-master.component.scss']
})
export class SubSetupIssuesMasterComponent implements OnInit {

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




  values1 = [
    { Audit: 'Product Quality Audit', status: true, modulename: "4/8", functioname: "Aesthetics", defectname: "Thin Paint", issuename: "Fuel filler hinge area/Fuel flap edge - Thin Paint & Paint Run down" },
    { Audit: 'Product Quality Audit', status: true, modulename: "4/8", functioname: "Mutilation", defectname: "Ding", issuename: "RHR BSO Ding" },
    { Audit: 'Product Quality Audit', status: true, modulename: "4/8", functioname: "Mutilation", defectname: "Scratch", issuename: "LHR Door outer scratch" },
    { Audit: 'Product Quality Audit', status: true, modulename: "4/8", functioname: "Aesthetics", defectname: "Sink / flow marks", issuename: "Roof rail - Sink marks / Waviness" },
    { Audit: 'Product Quality Audit', modulename: "4/8", functioname: "Mutilation", defectname: "Contamination", issuename: "Rear bumper contamination" },
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
    //this.alertService.createAlert('Successfully saved.', 1);
  }

  public addissue(item) {
    this.dialog.open(AddSubSetupIssuesMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
   Modulecount() {
        this.dialog.open(ModulePopComponent, {
          height: '300px',
          width: '600px'
        });
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

}
