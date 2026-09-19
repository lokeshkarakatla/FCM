import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NewAuditComponent } from './new-audit/new-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { PauditsHelpDeskComponent } from '../process-audits/paudits-help-desk/paudits-help-desk.component';

@Component({
  selector: 'app-parts-audits',
  templateUrl: './parts-audits.component.html',
  styleUrls: ['./parts-audits.component.scss']
})
export class PartsAuditsComponent implements OnInit, AfterViewInit {
  isSidenavOpen: boolean = true;
  hideSidebar: boolean = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { 
    // Listen to route changes to hide the sidebar on the reference page
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isHiddenRoute = event.urlAfterRedirects.includes('reference') || event.urlAfterRedirects.includes('details');
        this.hideSidebar = isHiddenRoute;
        this.isSidenavOpen = !isHiddenRoute;
      }
    });
  }

  ngOnInit(): void {
    // Check initial route in case it is loaded directly from a new tab
    const isHiddenRoute = this.router.url.includes('reference') || this.router.url.includes('details');
    this.hideSidebar = isHiddenRoute;
    this.isSidenavOpen = !isHiddenRoute;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  openaudit(): void {
    this.dialog.open(NewAuditComponent, {
      width: '600px',
      height: '600px'
    });
  }
  openUserManual(fileName: string): void {
   
    const pdfUrl = `assets/${fileName}`; 
    
   
    window.open(pdfUrl, '_blank');
  }
 openHelpDesk(){
     this.dialog.open(PauditsHelpDeskComponent, {
       width: '600px',
       height: '350px'
     });
   }
}