import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { objectivedata } from '../objectivedata';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-objective-audit-archives',
  templateUrl: './objective-audit-archives.component.html',
  styleUrls: ['./objective-audit-archives.component.scss']
})
export class ObjectiveAuditArchivesComponent implements OnInit {

  //Objective Audit
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }
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
      //this.values = PartsData.getd1();
      this.values = objectivedata.objectiveArchive();
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
  public addchecklistaudit(auditdata) {
    //   let dialogRef = this.dialog.open(AddObjectiveAuditComponent, {
    //     data: auditdata,
    //     height: 'auto',
    //     width: '600px'
    //   });
    //   dialogRef.afterClosed().subscribe(data => {
    //   });
  }
        Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }
}
