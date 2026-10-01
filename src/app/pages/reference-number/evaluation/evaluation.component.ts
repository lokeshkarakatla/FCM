import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  activeTab: string = 'audit';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateActiveTab();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveTab();
      });
  }

  setTab(tab: string): void {
    this.activeTab = tab;
    this.router.navigate([tab], { relativeTo: this.route });
  }

  private updateActiveTab(): void {
    const url = this.router.url;
    if (url.includes('/5w2h')) {
      this.activeTab = '5w2h';
    } else if (url.includes('/fishbone')) {
      this.activeTab = 'fishbone';
    } else if (url.includes('/fmea')) {
      this.activeTab = 'fmea';
    } else if (url.includes('/guidelines')) {
      this.activeTab = 'guidelines';
    } else if (url.includes('/flowchart') || url.includes('/flowchat')) {
      this.activeTab = 'flowchart';
    } else {
      this.activeTab = 'audit';
    }
  }
}
