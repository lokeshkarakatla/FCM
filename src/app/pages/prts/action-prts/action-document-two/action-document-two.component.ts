import { ActionDocumentTwoTypeComponent } from './action-document-two-type/action-document-two-type.component';
import { ActionDocumentTwoDialogComponent } from './action-document-two-dialog/action-document-two-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-action-document-two',
  templateUrl: './action-document-two.component.html',
  styleUrls: ['./action-document-two.component.scss']
})
export class ActionDocumentTwoComponent implements OnInit {

  constructor(public router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.document();
    }
    else {

    }
  }
  values = [

  ]
  next() {
    this.router.navigate(['/app/prtsnavbar/summary']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/d7']);
  }
  public adddocument(auditdata) {
    let dialogRef = this.dialog.open(ActionDocumentTwoDialogComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public adddocumenttype(audit) {
    let dialogRef = this.dialog.open(ActionDocumentTwoTypeComponent, {
      data: audit,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
