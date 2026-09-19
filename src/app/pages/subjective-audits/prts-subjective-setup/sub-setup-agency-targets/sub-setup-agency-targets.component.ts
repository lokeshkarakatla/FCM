import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddSubSetupAgencyTargetsComponent } from './add-sub-setup-agency-targets/add-sub-setup-agency-targets.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-sub-setup-agency-targets',
  templateUrl: './sub-setup-agency-targets.component.html',
  styleUrls: ['./sub-setup-agency-targets.component.scss']
})
export class SubSetupAgencyTargetsComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }


  values1 = [
  { Audit: 'Product Quality Audit', target: '100', month: 'Oct', year: "2021", model: "Hector", status: true },
  { Audit: 'Product Quality Audit', target: '75', month: 'Nov', year: "2021", model: "Astor", status: true },
  { Audit: 'Product Quality Audit', target: '90', month: 'Dec', year: "2021", model: "Gloster", status: false },
  { Audit: 'Product Quality Audit', target: '80', month: 'Jan', year: "2022", model: "ZSEV", status: true },
];


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
    this.dialog.open(AddSubSetupAgencyTargetsComponent, {
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
