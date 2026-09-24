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
  subtitle?: string;
}

@Component({
  selector: 'app-reference-number',
  templateUrl: './reference-number.component.html',
  styleUrls: ['./reference-number.component.scss']
})
export class ReferenceNumberComponent implements OnInit, OnDestroy {

  activeTab: string = '';
  sidenavCollapsed: boolean = false;
  refNo: string = 'FIELD/2024/09/3';
  private routerSub!: Subscription;

  navItems: NavItem[] = [
    { label: 'Base Info',        icon: 'info',           route: 'base-info',        iconColor: '#1976d2', subtitle: 'View and manage core complaint details and vehicle reference information.' },
    { label: 'Summary',          icon: 'summarize',      route: 'summary',          iconColor: '#388e3c', subtitle: 'Set review schedule, priority, and define root cause and corrective action strategies.' },
    { label: 'Timeline',         icon: 'timeline',       route: 'timeline',         iconColor: '#7b1fa2', subtitle: 'Chronological record of key events, actions, and status updates.' },
    { label: 'Investigation',    icon: 'search',         route: 'investigation',    iconColor: '#f57c00', subtitle: 'Determine the nature of the complaint and decide routing.' },
    { label: 'Warranty Claim',   icon: 'receipt_long',   route: 'warranty-claim',   iconColor: '#c62828', subtitle: 'Capture warranty claim details and link supporting evidence.' },
    { label: 'Field Dispatch',   icon: 'local_shipping', route: 'field-dispatch',   iconColor: '#4e342e', subtitle: 'Coordinate field technician dispatch and track resolution.' },
    { label: 'Technical Review', icon: 'engineering',    route: 'technical-review', iconColor: '#0277bd', subtitle: 'Engineering assessment of failure modes and risk evaluation.' },
    { label: 'Containment',      icon: 'shield',         route: 'containment',      iconColor: '#ad1457', subtitle: 'Immediate containment actions to protect the customer.' },
    { label: 'Supplier Action',  icon: 'factory',        route: 'supplier-action',  iconColor: '#6a1b9a', subtitle: 'Assign actions to supplier and track containment/root cause.' },
    { label: 'CAPA',             icon: 'fact_check',     route: 'capa',             iconColor: '#2e7d32', subtitle: 'Corrective and preventive action planning and management.' },
    { label: 'Implementation',   icon: 'build',          route: 'implementation',   iconColor: '#e65100', subtitle: 'Track implementation of permanent corrective actions (PCA).' },
    { label: 'Verification',     icon: 'verified',       route: 'verification',     iconColor: '#00838f', subtitle: 'Confirm that the implemented corrective actions have resolved the problem.' },
    { label: 'Monitoring',       icon: 'show_chart',     route: 'monitoring',       iconColor: '#33691e', subtitle: 'Observe and hold the gains. Demonstrate the problem remains in control over time.' },
    { label: 'Prevention',       icon: 'security',       route: 'prevention',       iconColor: '#bf360c', subtitle: 'Prevent recurrence through standardisation and system updates.' },
    { label: 'Recognition',      icon: 'emoji_events',   route: 'recognition',      iconColor: '#ff8f00', subtitle: 'Congratulate the team and record lessons learned.' },
    { label: 'Closure',          icon: 'task_alt',       route: 'closure',          iconColor: '#1b5e20', subtitle: 'Close the complaint with final remarks and generate the closure report.' },
    { label: 'Documents',        icon: 'description',    route: 'documents',        iconColor: '#546e7a', subtitle: 'Store and manage project documents.' },
    { label: 'Notes',            icon: 'sticky_note_2',  route: 'notes',            iconColor: '#795548', subtitle: 'Record and manage project notes and comments.' },
  ];

  get currentNavItem(): NavItem {
    const rawUrl = this.activeTab || this.router.url || '';
    const cleanUrl = rawUrl.split('?')[0].split('#')[0];
    const segments = cleanUrl.split('/').filter(segment => segment.length > 0);
    const lastSeg = segments[segments.length - 1];
    const matched = this.navItems.find(item => item.route === lastSeg);
    return matched || this.navItems[0];
  }

  constructor(private router: Router, private pageHeaderService: PageHeaderService) { }

  ngOnInit(): void {
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