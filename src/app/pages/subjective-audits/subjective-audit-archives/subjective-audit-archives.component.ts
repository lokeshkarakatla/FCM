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
 


  values1: any[] = objectivedata.objectiveArchive();
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
  public addParameter(auditdata) {
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }
    Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { StatusId: item.VIN || item.vin, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
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
