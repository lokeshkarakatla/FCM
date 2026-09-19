import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatMenuTrigger } from '@angular/material/menu';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { MenuService } from '../theme/components/menu/menu.service';
import { filter } from 'rxjs/operators';
import { PageHeaderService } from '../shared/page-header.service';




@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [MenuService]
})
export class PagesComponent implements OnInit {
  showBreadcrumb = true;
  showBackBtn = false;
  @ViewChild('sidenav') sidenav: any;
  @ViewChild('backToTop') backToTop: any;
  @ViewChild('notifMenuTrigger') notifMenuTrigger!: MatMenuTrigger;
  @ViewChildren(PerfectScrollbarDirective) pss!: QueryList<PerfectScrollbarDirective>;
  public settings: Settings;
  public menus = ['vertical', 'horizontal'];
  public menuOption!: string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption!: string;
  public lastScrollTop: number = 0;
  public showBackToTop: boolean = false;
  public toggleSearchBar: boolean = false;
  private defaultMenu!: string; //declared for return default menu when window resized

  hiddenRoutes: string[] = [
    '/app/prts-part',
    '/app/prtsnavbar',
    '/app/prtsonepager',
    '/app/setups',
    '/app/setups/setup-masterdata',
    // '/base-info',
    // '/alert',
    // '/updates',
    // '/mitigation',
    // '/document',
    // '/grid-view',
    // '/calenders',
    // '/moniter',
    // '/action-grid-calender/grid-meet',
    // '/d1',
    // '/d2',
    // '/d3',
    // '/d3-b',
    // '/d4',
    // '/d4-b',
    // '/d5',
    // '/d6',
    // '/d7',
    // '/closure'
  ];

  constructor(
    public appSettings: AppSettings,
    public router: Router,
    private menuService: MenuService,
    public pageHeaderService: PageHeaderService,
    private cdr: ChangeDetectorRef
  ) {

    this.settings = this.appSettings.settings;

    // Evaluate on every navigation, including the initial load
    const checkUrl = (url: string) => {
      const path = url.split('?')[0];
      this.showBreadcrumb = !this.hiddenRoutes.some(route => path.startsWith(route));
    };

    checkUrl(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        checkUrl(event.urlAfterRedirects);
      });
  }

  ngOnInit() {
    if (window.innerWidth <= 768) {
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.settings.menu = 'horizontal';
    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;
  }

  ngAfterViewInit() {
    // Subscribe here — view is fully initialized, so detectChanges() is safe
    this.pageHeaderService.backBtnVisible$.subscribe(v => {
      this.showBackBtn = v;
      this.cdr.detectChanges();
    });

    setTimeout(() => { this.settings.loadingSpinner = false }, 300);
    this.backToTop.nativeElement.style.display = 'none';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.settings.sidenavIsPinned) {
          this.sidenav.close();
        }
        if (window.innerWidth <= 768) {
          this.sidenav.close();
        }
      }
    });
    if (this.settings.menu == "vertical")
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
  }

  public chooseMenu() {
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    this.router.navigate(['/']);
  }

  public chooseMenuType() {
    this.settings.menuType = this.menuTypeOption;
  }

  public changeTheme(theme: any) {
    this.settings.theme = theme;
  }

  public handleBack(): void {
    this.pageHeaderService.triggerBack();
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  public onPsScrollY(event: any) {
    (event.target.scrollTop > 300)
      ? this.backToTop.nativeElement.style.display = 'flex'
      : this.backToTop.nativeElement.style.display = 'none';

    if (this.settings.menu == 'horizontal') {
      const horizontalMenu = document.querySelector('#horizontal-menu');

      if (this.settings.fixedHeader) {
        const currentScrollTop = (event.target.scrollTop > 56) ? event.target.scrollTop : 0;

        if (horizontalMenu) {
          if (currentScrollTop > this.lastScrollTop) {
            horizontalMenu.classList.add('sticky');
            event.target.classList.add('horizontal-menu-hidden');
          } else {
            horizontalMenu.classList.remove('sticky');
            event.target.classList.remove('horizontal-menu-hidden');
          }
        }

        this.lastScrollTop = currentScrollTop;
      } else {
        if (horizontalMenu) {
          if (event.target.scrollTop > 56) {
            horizontalMenu.classList.add('sticky');
            event.target.classList.add('horizontal-menu-hidden');
          } else {
            horizontalMenu.classList.remove('sticky');
            event.target.classList.remove('horizontal-menu-hidden');
          }
        }
      }
    }
  }


  public scrollToTop() {
    this.pss.forEach(ps => {
      if (ps.elementRef.nativeElement.id == 'main' || ps.elementRef.nativeElement.id == 'main-content') {
        ps.scrollToTop(0, 250);
      }
    });
  }


  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 768) {
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical'
    }
    else {
      (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical'
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  public closeSubMenus() {
    let menu = document.querySelector(".sidenav-menu-outer");
    if (menu) {
      for (let i = 0; i < menu.children[0].children.length; i++) {
        let child = menu.children[0].children[i];
        if (child) {
          if (child.children[0].classList.contains('expanded')) {
            child.children[0].classList.remove('expanded');
            child.children[1].classList.remove('show');
          }
        }
      }
    }
  }
  notifications = [
    { title: 'Process Audit', date: '06/07/2026', sub: 'Commodity - Casting' },
    { title: 'Parts Audit', date: '01/07/2026', sub: 'Commodity - Forging' },
    { title: 'Process Audit', date: '05/07/2026', sub: 'Commodity - Machining' },
    { title: 'Parts Audit', date: '03/07/2026', sub: 'Commodity - Fasteners' },
    { title: 'Process Audit', date: '02/07/2026', sub: 'Commodity - Sheet Metal' }
  ];

  alerts() {
    this.router.navigate(['/app/prts-part/new-alerts']);
  }

  viewAllNotifications() {
    this.router.navigate(['/app/complaints/capa'], { queryParams: { filter: 'overdue' } });
  }

  openNotificationMenu() {
    if (this.notifMenuTrigger && !this.notifMenuTrigger.menuOpen) {
      this.notifMenuTrigger.openMenu();
    }
  }
}
