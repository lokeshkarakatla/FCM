import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PageHeaderService } from '../../shared/page-header.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  iconColor: string;
}

@Component({
  selector: 'app-reference-number',
  templateUrl: './reference-number.component.html',
  styleUrls: ['./reference-number.component.scss']
})
export class ReferenceNumberComponent implements OnInit, OnDestroy {

  activeTab: string = '';
  sidenavCollapsed: boolean = false;
  private routerSub!: Subscription;

  navItems: NavItem[] = [
    { label: 'Base Info',        icon: 'info',           route: 'base-info',        iconColor: '#1976d2' },
    { label: 'Summary',          icon: 'summarize',      route: 'summary',          iconColor: '#388e3c' },
    { label: 'Timeline',         icon: 'timeline',       route: 'timeline',         iconColor: '#7b1fa2' },
    { label: 'Investigation',    icon: 'search',         route: 'investigation',    iconColor: '#f57c00' },
    { label: 'Warranty Claim',   icon: 'receipt_long',   route: 'warranty-claim',   iconColor: '#c62828' },
    { label: 'Field Dispatch',   icon: 'local_shipping', route: 'field-dispatch',   iconColor: '#4e342e' },
    { label: 'Technical Review', icon: 'engineering',    route: 'technical-review', iconColor: '#0277bd' },
    { label: 'Containment',      icon: 'shield',         route: 'containment',      iconColor: '#ad1457' },
    { label: 'Supplier Action',  icon: 'factory',        route: 'supplier-action',  iconColor: '#6a1b9a' },
    { label: 'CAPA',             icon: 'fact_check',     route: 'capa',             iconColor: '#2e7d32' },
    { label: 'Implementation',   icon: 'build',          route: 'implementation',   iconColor: '#e65100' },
    { label: 'Verification',     icon: 'verified',       route: 'verification',     iconColor: '#00838f' },
    { label: 'Monitoring',       icon: 'monitoring',     route: 'monitoring',       iconColor: '#33691e' },
    { label: 'Prevention',       icon: 'security',       route: 'prevention',       iconColor: '#bf360c' },
    { label: 'Recognition',      icon: 'emoji_events',   route: 'recognition',      iconColor: '#ff8f00' },
    { label: 'Closure',          icon: 'task_alt',       route: 'closure',          iconColor: '#1b5e20' },
    { label: 'Documents',        icon: 'description',    route: 'documents',        iconColor: '#546e7a' },
    { label: 'Notes',            icon: 'sticky_note_2',  route: 'notes',            iconColor: '#795548' },
  ];

  constructor(private router: Router, private pageHeaderService: PageHeaderService) { }

  ngOnInit(): void {
    this.pageHeaderService.showBackButton(() => this.goBack());
    this.activeTab = this.router.url;

    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.activeTab = event.urlAfterRedirects;
      });
  }

  goBack(): void {
    this.router.navigate(['/app/complaints']);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.hideBackButton();
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  /**
   * Checks if a route segment is the currently active child route.
   * Uses exact segment matching to avoid false positives
   * (e.g. 'monitor' accidentally matching 'monitoring').
   */
  isActive(route: string): boolean {
    const rawUrl = this.activeTab || this.router.url || '';
    const cleanUrl = rawUrl.split('?')[0].split('#')[0];
    const segments = cleanUrl.split('/').filter(segment => segment.length > 0);
    return segments.length > 0 && segments[segments.length - 1] === route;
  }
}