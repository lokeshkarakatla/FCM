import { AddSubSetupMonthlyTargetsComponent } from './add-sub-setup-monthly-targets/add-sub-setup-monthly-targets.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-sub-setup-montly-targets',
  templateUrl: './sub-setup-montly-targets.component.html',
  styleUrls: ['./sub-setup-montly-targets.component.scss']
})
export class SubSetupMontlyTargetsComponent implements OnInit {
  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }

  values1 = [
    { Audit: 'Product Quality Audit (PQA)', target: '94%', month: 'Aug', year: "2025", model: "Toyota Fortuner 4x4", status: true },
    { Audit: 'Customer Sensory Audit', target: '93%', month: 'Aug', year: "2025", model: "Hyundai Creta SX", status: true },
    { Audit: 'NVH Dynamic Track Audit', target: '95%', month: 'Sep', year: "2025", model: "Mahindra XUV700 AX7", status: true },
    { Audit: 'EV High Voltage Ride Audit', target: '96%', month: 'Sep', year: "2025", model: "Tata Nexon EV Max", status: true },
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
    this.dialog.open(AddSubSetupMonthlyTargetsComponent, {
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
    Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { StatusId: item.model, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }

}
