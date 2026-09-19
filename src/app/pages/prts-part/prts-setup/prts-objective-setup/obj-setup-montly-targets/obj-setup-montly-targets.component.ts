import { AddObjSetupMonthlyTargetsComponent } from './add-obj-setup-monthly-targets/add-obj-setup-monthly-targets.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-obj-setup-montly-targets',
  templateUrl: './obj-setup-montly-targets.component.html',
  styleUrls: ['./obj-setup-montly-targets.component.scss']
})
export class ObjSetupMontlyTargetsComponent implements OnInit {

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

  downloadSampleExcel() {

  }
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
}
