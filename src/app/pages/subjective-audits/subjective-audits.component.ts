import { AddSubjectiveAuditComponent } from './subjective-audits-issue-status/add-subjective-audit/add-subjective-audit.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { Settings } from 'src/app/app.settings.model';
import { ObjectiveIthelpDeskComponent } from '../objective-audits/objective-ithelp-desk/objective-ithelp-desk.component';
import { objectivedata } from '../objective-audits/objectivedata';

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




  values1: any[] = objectivedata.objectiveArchive();
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
