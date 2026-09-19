import { AddObjectiveAuditComponent } from './add-objective-audit/add-objective-audit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { objectivedata } from '../objectivedata';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objective-audits-issue-status',
  templateUrl: './objective-audits-issue-status.component.html',
  styleUrls: ['./objective-audits-issue-status.component.scss']
})
export class ObjectiveAuditsIssueStatusComponent implements OnInit {
  //Objective Audit
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;


  constructor(
    public dialog: MatDialog,private router: Router) { }
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

  values1 = [
  ]

  opencheckpoint(item: any) {
    const selectedImage = item && item.image ? item.image : '/assets/car10x10.png';
    const cellsToHighlight = item && item.highlightedCells ? item.highlightedCells : [];
    const selectedModule = item && item.Model ? item.Model : '';

    sessionStorage.setItem('currentCheckpointImage', selectedImage);
    sessionStorage.setItem('disableOverview', 'true');
    sessionStorage.setItem('highlightedCells', JSON.stringify(cellsToHighlight));
    sessionStorage.setItem('selectedModule', selectedModule);

    this.router.navigate(['/app/parameterboard']);
  }

  opendashboard() {
    this.router.navigate(['/app/parameterboard']);
  }

  //parameterboard
  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }
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
    Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }

}
