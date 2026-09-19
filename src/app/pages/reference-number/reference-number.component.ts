import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PageHeaderService } from '../../shared/page-header.service';

@Component({
  selector: 'app-reference-number',        // update to match your actual selector
  templateUrl: './reference-number.component.html',
  styleUrls: ['./reference-number.component.scss']
})
export class ReferenceNumberComponent implements OnInit, OnDestroy {

  activeTab: string = '';

  constructor(private router: Router, private pageHeaderService: PageHeaderService) { }

  ngOnInit(): void {
    this.pageHeaderService.showBackButton(() => this.goBack());
    // Set active tab from current URL on first load
    this.activeTab = this.router.url;

    // Keep it updated on every navigation
    this.router.events
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
  }

  get isBaseInfoActive(): boolean {
    return this.activeTab.includes('base-info');
  }

}