import { ActionDocumentTypeComponent } from './action-document-type/action-document-type.component';
import { AddActionDocumentComponent } from './add-action-document/add-action-document.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-action-document',
  templateUrl: './action-document.component.html',
  styleUrls: ['./action-document.component.scss']
})
export class ActionDocumentComponent implements OnInit {

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
    this.router.navigate(['/app/prtsnavbar/deploy-two']);
  }
  public adddocument(auditdata) {
    let dialogRef = this.dialog.open(AddActionDocumentComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public adddocumenttype(auditdata) {
    let dialogRef = this.dialog.open(ActionDocumentTypeComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
