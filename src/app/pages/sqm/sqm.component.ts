import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

// Import your dialog components here (adjust relative paths as needed)
import { PauditsNewAuditComponent } from './process-audits/paudits-new-audit/paudits-new-audit.component';
import { NewAuditComponent as PartsNewAuditComponent } from './parts-audits/new-audit/new-audit.component';
import { PauditsHelpDeskComponent } from './process-audits/paudits-help-desk/paudits-help-desk.component';
import { DefectsPopComponent } from './inspection/inspection-datatable/defects-pop/defects-pop.component';
import { AddRecordPopComponent } from './inspection/add-record-pop/add-record-pop.component';
import { DefectsPopMasterComponent } from './inspection/inspection-datatable/defects-pop-master/defects-pop-master.component';

@Component({
  selector: 'app-sqm',
  templateUrl: './sqm.component.html',
  styleUrls: ['./sqm.component.scss']
})
export class SqmComponent implements OnInit {
  hideSidebar = false;
  isSidenavOpen = true;
  activeTab = 'sqmd'; // Can be 'sqmd', 'process', or 'parts'

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Check initial route
    this.updateLayout(this.router.url);

    // Listen for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateLayout(event.urlAfterRedirects);
      });
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  // Pass the module string from the template to open the correct dialog
  openaudit(module: string) {
    if (module === 'process') {
      this.dialog.open(PauditsNewAuditComponent, { width: '600px', height: 'auto' });
    } else if (module === 'parts') {
      this.dialog.open(PartsNewAuditComponent, { width: '600px', height: 'auto' });
    }
  }

  openUserManual(fileName: string): void {
    window.open(`assets/${fileName}`, '_blank');
  }

  openHelpDesk() {
    this.dialog.open(PauditsHelpDeskComponent, { width: '600px', height: '350px' });
  }

  // Inside SqmComponent class
  updateLayout(url: string) {
    // Hide sidebar entirely for specific inner screens
    this.hideSidebar = url.includes('reference') || url.includes('details') || url.includes('inspect-inner-screen');

    let newTab = 'sqmd';
    if (url.includes('/setup')) {
      newTab = 'setup';
    } else if (url.includes('/process')) {
      newTab = 'process';
    } else if (url.includes('/parts')) {
      newTab = 'parts';
    } else if (url.includes('/inspection') || url.includes('/inspect-inner-screen')) { 
      newTab = 'inspection';
    }

    // Auto-set isSidenavOpen when the TAB changes
    if (newTab !== this.activeTab) {
      // ✅ FIX: Removed 'inspection' from this condition so the sidebar stays open
      if (newTab === 'sqmd' || newTab === 'setup') { 
        this.isSidenavOpen = false;
      } else {
        // Show sidenav for Process, Parts, AND Inspection
        this.isSidenavOpen = !this.hideSidebar;
      }
    }

    // Always hide if sidebar is forcibly hidden by inner routes
    if (this.hideSidebar) {
      this.isSidenavOpen = false;
    }

    this.activeTab = newTab;
    this.cdr.detectChanges();
  }

  openheatmapname() {
    this.dialog.open(DefectsPopMasterComponent, { width: '1400px', height: 'auto' });
  }

  addrecordpop(item: any) {
    this.dialog.open(AddRecordPopComponent, {
      width: '1000px',
      height: 'auto',
      data: item 
    });
  }
}