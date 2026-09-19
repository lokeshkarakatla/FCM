import { clientMenuItems } from './../menu';
import { Component, OnInit, Input, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';

import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService]
})
export class HorizontalMenuComponent implements OnInit {

  @Input('menuParentId') menuParentId: any;
  public menuItems: Array<any> = [];
  public settings: Settings;
  public currentUrl: string = '';

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

constructor(
  public appSettings: AppSettings,
  public menuService: MenuService,
  public router: Router,
  private cdr: ChangeDetectorRef
) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.menuItems = this.menuService.getHorizontalMenuItems();
  this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);

  const isClient = localStorage.getItem('isClient');
  if (isClient && JSON.parse(isClient) == true) {
    this.menuItems = this.menuService.getClientMenuItems();
  }

  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.currentUrl = event.urlAfterRedirects;
      this.cdr.detectChanges();
    }
  });

  // for new tab: router.url is '/' on first load, re-check after router resolves
  setTimeout(() => this.cdr.detectChanges(), 100);
}

isMenuItemActive(menu: any): boolean {
  // Normalize the URL to handle hash routing and remove query parameters
  const routerUrl = this.router.url.split('?')[0];
  const url = (routerUrl && routerUrl !== '/') ? routerUrl : location.hash.replace('#', '').split('?')[0];

  // 1. Dashboard
  if (menu.routerLink === '/app/complaints-view') {
      return url === '/app/complaints-view';
  }

  // 2. Complaints
  if (menu.routerLink === '/app/complaints') {
      return url === '/app/complaints' || url.startsWith('/app/complaints/');
  }

  // 3. MASTER DATA FIX: If the menu item is Master Data, keep it active for ANY sub-route
  if (menu.routerLink === '/app/setups/setup-masterdata/status-master') {
      // This will match /country, /criticality, /step, etc.
      return url.startsWith('/app/setups/setup-masterdata'); 
  }

  // 4. Default logic & other complex routes
  const result =
    url.startsWith(menu.routerLink) ||
    (menu.routerLink === '/app/prts-part' &&
      (url.startsWith('/app/prtsnavbar') || url.startsWith('/app/prtsonepager'))) ||
    (menu.routerLink === '/app/subjective-audits' && url.startsWith('/app/checklistdoard')) ||
    (menu.routerLink === '/app/objective-audits' &&
      (url.startsWith('/app/setup/subjective/check') ||
       url.startsWith('/app/setup/subjective/overview') ||
       url.startsWith('/app/parameterboard')));

  return result;
}
  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        if (this.settings.fixedHeader) {
          const mainContent = document.getElementById('main-content');

          if (mainContent) {
            mainContent.scrollTop = 0;
          }
        }
        else {
          const drawer = document.getElementsByClassName('mat-drawer-content')[0] as HTMLElement;

          if (drawer) {
            drawer.scrollTop = 0;
          }
        }
      }
    });
  }
}