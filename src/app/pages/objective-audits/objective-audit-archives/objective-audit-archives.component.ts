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

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  values: any[] = [];

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = objectivedata.objectiveArchive();
      this.totalSize = this.values.length;
    }
  }

  scrollRight() {
    const container = document.getElementById('grid-table-container tableScroll');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
 
  scrollLeft() {
    const container = document.getElementById('grid-table-container tableScroll');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  opencheckpoint(item: any) {
    window.open('/#/app/parameterboard/par-auditlog/sealing');
  }

  Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { StatusId: item.VIN || item.vin, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }
}
