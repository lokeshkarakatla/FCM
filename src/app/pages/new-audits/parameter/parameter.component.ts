import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddParameterAuditComponent } from './add-parameter-audit/add-parameter-audit.component';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {
  // Subjective Audit
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
    { date: '03-12-2021', vin: 'HR07 BP0721', audittype: 'C-Rating', location: 'Hyderabad', demerits: '75', compailance: '89%', issues: '68', auditor: 'Surya', model: 'Hector', variant: 'Manual', intercam_trim: 'High', color: 'White', transmission: 'Manual', fuel_type: 'Diesel', status: true },
    { date: '13-11-2021', vin: 'HR02 BP0421', audittype: 'D-Rating', location: 'Mumbai', demerits: '25', compailance: '72%', issues: '70', auditor: 'Siva', model: 'Astor', variant: 'Automatic', intercam_trim: 'Low', color: 'Black', transmission: 'AMT', fuel_type: 'Petrol', status: true },
    { date: '05-11-2021', vin: 'CG07 VP0021', audittype: 'C-Rating', location: 'Banglore', demerits: '50', compailance: '91%', issues: '45', auditor: 'Ridhma', model: 'Gloster', variant: 'Manual', intercam_trim: 'High', color: 'Blue', transmission: 'DCT', fuel_type: 'Diesel', status: true },
    { date: '29-10-2021', vin: 'TN17 EP5021', audittype: 'C-Rating', location: 'Pune', demerits: '100', compailance: '82%', issues: '42', auditor: 'Navin', model: 'Astor', variant: 'Semi-Automatic', intercam_trim: 'Medium', color: 'White', transmission: 'AMT', fuel_type: 'Petrol', status: true },
    { date: '01-12-2021', vin: 'PN07 AM9021', audittype: 'D-Rating', location: 'Raipur', demerits: '25', compailance: '94%', issues: '32', auditor: 'Surya', model: 'Hector', variant: 'Automatic', intercam_trim: 'Low', color: 'Orange', transmission: 'Manual', fuel_type: 'Petrol', status: true },
  ]
  opendashboard() {
    window.open('/#/app/checklistdoard');
  }

  ///#/app/parameterboard has been changed to /app/checklistdoard

  addgrid() {
    // this.dialog.open(ManageGridComponent,{
    //   width:"600px",
    //   height:"auto"
    // })
  }
  // addParameter(){
  //   this.dialog.open(AddparameterauditComponent,{
  //     width:"600px",
  //     height:"auto"
  //   })
  // }
  public addParameter(auditdata) {
    let dialogRef = this.dialog.open(AddParameterAuditComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

}
