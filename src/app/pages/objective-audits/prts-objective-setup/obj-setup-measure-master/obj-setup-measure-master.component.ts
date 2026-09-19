import { AddObjSetupMeasureMasterComponent } from './add-obj-setup-measure-master/add-obj-setup-measure-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-obj-setup-measure-master',
  templateUrl: './obj-setup-measure-master.component.html',
  styleUrls: ['./obj-setup-measure-master.component.scss']
})
export class ObjSetupMeasureMasterComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }

  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  values1 = [
    { ColorCode: 'Red', category: 'Exterior', measurement: 'Gap', status: true, Audit: 'Product Quality Audit' },
    { ColorCode: 'Blue', category: 'Interior', measurement: 'Alignment', Audit: 'Body Audit' },
    { ColorCode: 'Green', category: 'Exterior', measurement: 'Flush', status: true, Audit: 'Product Quality Audit' },
    { ColorCode: 'Yellow', category: 'Interior', measurement: 'Parallelism', status: true, Audit: 'Paint Audit' },
    { ColorCode: 'Black', category: 'Matching', measurement: 'Color Shade', status: false, Audit: 'Product Quality Audit' },
    { ColorCode: 'Pink', category: 'Exterior', measurement: 'Consistency', status: true, Audit: 'Product Quality Audit' },
  ]
  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addmeasurement(item) {
    this.dialog.open(AddObjSetupMeasureMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
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
