import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavItem {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-test-master-data',
  templateUrl: './test-master-data.component.html',
  styleUrls: ['./test-master-data.component.scss']
})
export class TestMasterDataComponent implements OnInit {
  isNavOpen = true;
  activeItemName: string = 'Status Master';

  navItems: NavItem[] = [
    { link: 'status-master', name: 'Status Master', icon: 'toggle_on' },
    { link: 'models', name: 'Models', icon: 'directions_car' },
    { link: 'variants', name: 'Variants', icon: 'style' },
    { link: 'plants', name: 'Plants', icon: 'factory' },
    { link: 'color', name: 'Colors', icon: 'palette' },
    { link: 'transmission', name: 'Transmissions', icon: 'settings' },
    { link: 'fuel-type', name: 'Fuel Types', icon: 'local_gas_station' },
    { link: 'stages', name: 'Stages', icon: 'alt_route' },
    { link: 'engine-type', name: 'Engine Types', icon: 'memory' },
    { link: 'drive-type', name: 'Drive Types', icon: 'commute' },
    { link: 'drive-grade', name: 'Drive Grades', icon: 'grade' },
    { link: 'vehicle-type', name: 'Vehicle Types', icon: 'time_to_leave' },
    { link: 'country', name: 'Countries', icon: 'flag' },
    { link: 'criticality', name: 'Criticalities', icon: 'priority_high' },
    { link: 'step', name: 'Steps', icon: 'stairs' },
    { link: 'distributor', name: 'Distributors', icon: 'local_shipping' },
    { link: 'department', name: 'Departments', icon: 'domain' }
  ];

  constructor(private router: Router) {
    this.updateActiveItem(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateActiveItem(event.urlAfterRedirects || event.url);
      });
  }

  ngOnInit() {
    this.updateActiveItem(this.router.url);
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  setActiveItem(name: string) {
    this.activeItemName = name;
  }

  private updateActiveItem(url: string) {
    if (!url) return;
    const cleanUrl = url.split('?')[0];
    const matched = this.navItems.find(item =>
      cleanUrl.endsWith('/' + item.link) || cleanUrl.includes('/' + item.link + '/')
    );
    if (matched) {
      this.activeItemName = matched.name;
    } else {
      const fallback = this.navItems.find(item => cleanUrl.includes(item.link));
      if (fallback) {
        this.activeItemName = fallback.name;
      }
    }
  }
}
