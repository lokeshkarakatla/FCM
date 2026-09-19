import { AddObjSetupMonthlyTargetsComponent } from './add-obj-setup-monthly-targets/add-obj-setup-monthly-targets.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-obj-setup-montly-targets',
  templateUrl: './obj-setup-montly-targets.component.html',
  styleUrls: ['./obj-setup-montly-targets.component.scss']
})
export class ObjSetupMontlyTargetsComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }




  values1 = [
    { target: '100', month: 'Oct', year: "2021", model: "Hector", Audit: 'Product Quality Audit' },
    { target: '85', month: 'Nov', year: "2021", model: "Astor", status: true, Audit: 'Body Type' },
    { target: '90', month: 'Dec', year: "2021", model: "Gloster", status: true, Audit: 'Product Quality Audit' },
    { target: '95', month: 'Jan', year: "2022", model: "ZSEV", status: true, Audit: 'Paint Audit' },

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
    this.dialog.open(AddObjSetupMonthlyTargetsComponent, {
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
        Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }

  downloadSampleExcel() {

  }

}
