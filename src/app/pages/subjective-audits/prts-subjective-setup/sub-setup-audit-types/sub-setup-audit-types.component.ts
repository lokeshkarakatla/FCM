import { AddSubSetupAuditTypesComponent } from './add-sub-setup-audit-types/add-sub-setup-audit-types.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-sub-setup-audit-types',
  templateUrl: './sub-setup-audit-types.component.html',
  styleUrls: ['./sub-setup-audit-types.component.scss']
})
export class SubSetupAuditTypesComponent implements OnInit {


  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog) { }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  values = [];
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
  { modulename: "PQA", status: true, default: '', type: 'PQA' },
  { modulename: "Body Audit", status: true, default: 'N/A', type: 'BA' },
  { modulename: "Paint Audit", status: false, default: '', type: 'PA' }, // corrected
  { modulename: "RQA", status: true, default: 'N/A', type: 'RQA' },
  { modulename: "Process Audit", status: true, default: 'N/A', type: 'PA' }
];


  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  public addaudit(item) {
    this.dialog.open(AddSubSetupAuditTypesComponent, {
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
}
