import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddObjectiveAuditComponent } from '../../objective-audits/objective-audits-issue-status/add-objective-audit/add-objective-audit.component';
import { objectivedata } from '../../objective-audits/objectivedata';

@Component({
  selector: 'app-subjective-audit-archives',
  templateUrl: './subjective-audit-archives.component.html',
  styleUrls: ['./subjective-audit-archives.component.scss']
})
export class SubjectiveAuditArchivesComponent implements OnInit {


  // Subjective Audit
 


  values1 = [
    { date: '03-12-2021', vin: 'HR07 BP0721',  statt:'pending',  audittype: 'C-Rating', location: 'Hyderabad', demerits: '75', compailance: '89%', issues: '68', auditor: 'Surya', model: 'Hector', variant: 'Manual', intercam_trim: 'High', color: 'White', transmission: 'Manual', fuel_type: 'Diesel', status: true },
    { date: '13-11-2021', vin: 'HR02 BP0421',  statt:'pending',  audittype: 'D-Rating', location: 'Mumbai', demerits: '25', compailance: '72%', issues: '70', auditor: 'Siva', model: 'Astor', variant: 'Automatic', intercam_trim: 'Low', color: 'Black', transmission: 'AMT', fuel_type: 'Petrol', status: true },
    { date: '05-11-2021', vin: 'CG07 VP0021',  statt:'pending',  audittype: 'C-Rating', location: 'Banglore', demerits: '50', compailance: '91%', issues: '45', auditor: 'Ridhma', model: 'Gloster', variant: 'Manual', intercam_trim: 'High', color: 'Blue', transmission: 'DCT', fuel_type: 'Diesel', status: true },
    { date: '29-10-2021', vin: 'TN17 EP5021',  statt:'pending',  audittype: 'C-Rating', location: 'Pune', demerits: '100', compailance: '82%', issues: '42', auditor: 'Navin', model: 'Astor', variant: 'Semi-Automatic', intercam_trim: 'Medium', color: 'White', transmission: 'AMT', fuel_type: 'Petrol', status: true },
    { date: '01-12-2021', vin: 'PN07 AM9021',  statt:'pending',  audittype: 'D-Rating', location: 'Raipur', demerits: '25', compailance: '94%', issues: '32', auditor: 'Surya', model: 'Hector', variant: 'Automatic', intercam_trim: 'Low', color: 'Orange', transmission: 'Manual', fuel_type: 'Petrol', status: true },
    { date: '03-12-2021', vin: 'HR07 BP0721',  statt:'pending',  audittype: 'C-Rating', location: 'Hyderabad', demerits: '75', compailance: '89%', issues: '68', auditor: 'Surya', model: 'Hector', variant: 'Manual', intercam_trim: 'High', color: 'White', transmission: 'Manual', fuel_type: 'Diesel', status: true },
    { date: '13-11-2021', vin: 'HR02 BP0421',  statt:'pending',  audittype: 'D-Rating', location: 'Mumbai', demerits: '25', compailance: '72%', issues: '70', auditor: 'Siva', model: 'Astor', variant: 'Automatic', intercam_trim: 'Low', color: 'Black', transmission: 'AMT', fuel_type: 'Petrol', status: true },
    { date: '05-11-2021', vin: 'CG07 VP0021',  statt:'pending',  audittype: 'C-Rating', location: 'Banglore', demerits: '50', compailance: '91%', issues: '45', auditor: 'Ridhma', model: 'Gloster', variant: 'Manual', intercam_trim: 'High', color: 'Blue', transmission: 'DCT', fuel_type: 'Diesel', status: true },

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
    //  let dialogRef = this.dialog.open(AddSubjectiveAuditComponent, {
    //    data: auditdata,
    //    height: 'auto',
    //    width: '600px'
    //  });
    //  dialogRef.afterClosed().subscribe(data => {
    //  });
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }
    Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }


  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
 
  constructor(
    public dialog: MatDialog,
  ) { }
  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.values = objectivedata.objectiveStatue();
    }
    else {

    }
  }

  scrollRight() {
  const container = document.getElementById('grid-table-container');
  if (container) {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
 
scrollLeft() {
  const container = document.getElementById('grid-table-container');
  if (container) {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }
}

  

  //parameterboard
 
  addchecklistaudit(auditdata) {
    let dialogRef = this.dialog.open(AddObjectiveAuditComponent, {
      data: auditdata,
      height: 'auto',
      width: '850px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
        deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
  
}
