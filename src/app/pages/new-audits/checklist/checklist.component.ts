import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddChecklistAuditComponent } from './add-checklist-audit/add-checklist-audit.component';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  //Objective Audit
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
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
    { Date: '1-11-2021', VIN: 'HR07 BP0721', AuditType: 'Product Quality Audit', Checkpoints: '510/560', Demerits: '12/510', Location: 'Hyderabad', Auditor: 'Surya', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'High', Colour: 'White', Transmission: 'Manual', Fuel_Type: 'Diesel', Status: true },
    { Date: '12-11-2021', VIN: 'HR02 BP0421', AuditType: 'Body Audit', Checkpoints: '490/560', Demerits: '34/490', Location: 'Banglore', Auditor: 'Siva', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Low', Colour: 'Black', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
    { Date: '15-11-2021', VIN: 'HR07 EP0021', AuditType: 'Paint Audit', Checkpoints: '532/560', Demerits: '26/532', Location: 'Mumbai', Auditor: 'Navin', Model: 'Gloster', Variant: 'Manual', Interior_Trim: 'High', Colour: 'Blue', Transmission: 'DCT', Fuel_Type: 'Petrol', Status: true },
    { Date: '23-10-2021', VIN: 'HR07 RG7218', AuditType: 'Body Audit', Checkpoints: '521/560', Demerits: '19/521', Location: 'Pune', Auditor: 'Ridhima', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Medium', Colour: 'White', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
    { Date: '5-08-2021', VIN: 'HR07 FK0770', AuditType: 'Paint Audit', Checkpoints: '502/560', Demerits: '15/502', Location: 'Raipur', Auditor: 'Siva', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'Low', Colour: 'Orange', Transmission: 'Manual', Fuel_Type: 'Hybrid', Status: true },
  ]
  opendashboard() {
    window.open('/#/app/parameterboard');
  }

  //parameterboard
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }
  public addchecklistaudit(auditdata) {
    let dialogRef = this.dialog.open(AddChecklistAuditComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
