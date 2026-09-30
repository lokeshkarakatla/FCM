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
    { label: 'Base Info',             icon: 'info',           route: 'base-info',        iconColor: '#1976d2', subtitle: 'View and manage core complaint details and vehicle reference information.' },
    { label: 'Warranty Claim (D0)',   icon: 'receipt_long',   route: 'warranty-claim',   iconColor: '#c62828', subtitle: 'Capture warranty claim details and link supporting evidence.' },
    { label: 'Field Dispatch (D0)',   icon: 'local_shipping', route: 'field-dispatch',   iconColor: '#4e342e', subtitle: 'Coordinate field technician dispatch and track resolution.' },
    { label: 'Team (D1)',             icon: 'group',          route: 'team',             iconColor: '#0284c7', subtitle: 'Assign cross-functional team members to lead and support complaint resolution.' },
    { label: 'Summary (D2)',          icon: 'summarize',      route: 'summary',          iconColor: '#388e3c', subtitle: 'Set review schedule, priority, and define root cause and corrective action strategies.' },
    { label: 'Timeline (D2)',         icon: 'timeline',       route: 'timeline',         iconColor: '#7b1fa2', subtitle: 'Chronological record of key events, actions, and status updates.' },
    { label: 'Containment (D3)',      icon: 'shield',         route: 'containment',      iconColor: '#ad1457', subtitle: 'Immediate containment actions to protect the customer.' },
    { label: 'Investigation (D4)',    icon: 'search',         route: 'investigation',    iconColor: '#f57c00', subtitle: 'Determine the nature of the complaint and decide routing.' },
    { label: 'Evaluation (D4)',       icon: 'assessment',     route: 'evaluation',       iconColor: '#00897b', subtitle: 'Risk evaluation, failure mode assessment, and escape point analysis.' },
    { label: 'Technical Review (D4)', icon: 'engineering',    route: 'technical-review', iconColor: '#0277bd', subtitle: 'Engineering assessment of failure modes and risk evaluation.' },
    { label: 'RCA (D4)',              icon: 'psychology',     route: 'rca',              iconColor: '#8e24aa', subtitle: 'Perform root cause analysis using 5-Whys, Fishbone (Ishikawa), and validation.' },
    { label: 'CAPA (D5)',             icon: 'fact_check',     route: 'capa',             iconColor: '#2e7d32', subtitle: 'Corrective and preventive action planning and management.' },
    { label: 'Supplier Action (D5)',  icon: 'factory',        route: 'supplier-action',  iconColor: '#6a1b9a', subtitle: 'Assign actions to supplier and track containment/root cause.' },
    { label: 'Verification (D5)',     icon: 'verified',       route: 'verification',     iconColor: '#00838f', subtitle: 'Confirm that the implemented corrective actions have resolved the problem.' },
    { label: 'Implementation (D6)',   icon: 'build',          route: 'implementation',   iconColor: '#e65100', subtitle: 'Track implementation of permanent corrective actions (PCA).' },
    { label: 'Prevention (D7)',       icon: 'security',       route: 'prevention',       iconColor: '#bf360c', subtitle: 'Prevent recurrence through standardization and system updates.' },
    { label: 'Recognition (D8)',      icon: 'emoji_events',   route: 'recognition',      iconColor: '#ff8f00', subtitle: 'Congratulate the team and record lessons learned.' },
    { label: 'Closure (D8)',          icon: 'task_alt',       route: 'closure',          iconColor: '#1b5e20', subtitle: 'Close the complaint with final remarks and generate the closure report.' },
    { label: 'Documents',             icon: 'description',    route: 'documents',        iconColor: '#546e7a', subtitle: 'Store and manage project documents.' },
    { label: 'Notes',                 icon: 'sticky_note_2',  route: 'notes',            iconColor: '#795548', subtitle: 'Record and manage project notes and comments.' },
  ];

  get currentNavItem(): NavItem {
    const rawUrl = this.activeTab || this.router.url || '';
    const cleanUrl = rawUrl.split('?')[0].split('#')[0];
    const segments = cleanUrl.split('/').filter(segment => segment.length > 0);
    for (let i = segments.length - 1; i >= 0; i--) {
      const matched = this.navItems.find(item => item.route === segments[i]);
      if (matched) return matched;
    }
    return this.navItems[0];
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
   * Matches whether the route is the exact segment or part of active child hierarchy.
   */
  isActive(route: string): boolean {
    const rawUrl = this.activeTab || this.router.url || '';
    const cleanUrl = rawUrl.split('?')[0].split('#')[0];
    const segments = cleanUrl.split('/').filter(segment => segment.length > 0);
    return segments.includes(route);
  }
}