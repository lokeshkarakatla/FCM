import { AddSubjectiveAuditComponent } from './subjective-audits-issue-status/add-subjective-audit/add-subjective-audit.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Settings } from 'src/app/app.settings.model';
import { ObjectiveIthelpDeskComponent } from '../objective-audits/objective-ithelp-desk/objective-ithelp-desk.component';

@Component({
  selector: 'app-subjective-audits',
  templateUrl: './subjective-audits.component.html',
  styleUrls: ['./subjective-audits.component.scss']
})
export class SubjectiveAuditsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  // Subjective Audit
  public settings: Settings;

  filterToggle = false;
  checked = true;
  filterForm: FormGroup;
  values = [];


  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    //this.settings =
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }
isNavOpen = true;

  // This function toggles the state.
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  isOpen = true;

  public toggleSidenav() {
    // console.log('toggle')
    this.sidenav.toggle();

    this.isOpen = !this.isOpen
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



  addgrid() {
  }

  public addParameter(auditdata) {
    let dialogRef = this.dialog.open(AddSubjectiveAuditComponent, {
      data: auditdata,
      height: 'auto',
      width: '900px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  changestatusdata() {
    this.checked = !this.checked;
    let status = this.checked ? true : false;
    this.filterForm.get('Status').setValue(status);
  }
      itHelpDeskPop(item) {
    // this._sharedService.UpsertEventLog(267).subscribe();
    let dialogRef = this.dialog.open(ObjectiveIthelpDeskComponent, {
      data: item,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
      }
    });
  }

}
