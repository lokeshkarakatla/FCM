import { AddDocumentComponent } from './closur-note/add-document/add-document.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PartsData } from '../PartsData';
import { environment } from 'src/environments/environment';

interface ClosureItem {
  date: string;
  subject: string;
}

@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {
  values: ClosureItem[] = [];
  activeTab: 'documents' | 'notes' = 'documents';

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    // Set initial tab to Documents
    this.activeTab = 'documents';
    if (environment.mode == 1) {
      this.values = PartsData.closur() || [];
    }
  }

  setTab(tab: 'documents' | 'notes') {
    this.activeTab = tab;
    if (tab === 'notes') {
      this.router.navigate(['/app/prtsnavbar/closure-note']);
    }
    // If tab is documents, stay on this route
  }

  next() {
    this.router.navigate(['/app/prtsnavbar/summary']);
  }

  back() {
    this.router.navigate(['/app/prtsnavbar/d7']);
  }

  public adddocument(auditdata: any) {
    let dialogRef = this.dialog.open(AddDocumentComponent, {
      data: auditdata,
      height: 'auto',
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(() => { });
  }

      goBack(){
    this.router.navigate(['/app/prts-part/prtsissuestatus/psr']);
  }
}