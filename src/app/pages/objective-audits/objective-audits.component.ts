import { AddObjectiveAuditComponent } from './objective-audits-issue-status/add-objective-audit/add-objective-audit.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Settings } from 'src/app/app.settings.model';
import { ObjectiveIthelpDeskComponent } from './objective-ithelp-desk/objective-ithelp-desk.component';
import { objectivedata } from './objectivedata';


@Component({
  selector: 'app-objective-audits',
  templateUrl: './objective-audits.component.html',
  styleUrls: ['./objective-audits.component.scss']
})
export class ObjectiveAuditsComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  //Objective Audit
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  constructor(
    public dialog: MatDialog,
  ) { }


  isNavOpen = true;

  // This function toggles the state.
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  values1: any[] = objectivedata.objectiveArchive();
  opendashboard() {
    window.open('/#/app/parameterboard');
  }
  isOpen = true;

  public toggleSidenav() {
    // console.log('toggle')
    this.sidenav.toggle();
    this.isOpen = !this.isOpen
  }

  //parameterboard
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }
  public addchecklistaudit(auditdata) {
    let dialogRef = this.dialog.open(AddObjectiveAuditComponent, {
      data: auditdata,
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
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
