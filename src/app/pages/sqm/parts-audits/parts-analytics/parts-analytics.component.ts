import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-parts-analytics',
  templateUrl: './parts-analytics.component.html',
  styleUrls: ['./parts-analytics.component.scss']
})
export class PartsAnalyticsComponent implements OnInit {

  // ✅ Inject ChangeDetectorRef
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  // ✅ Add this function! 
  // This simulates the "extra clicks" by forcing Angular to update the UI
  // right after the heavy Highcharts math finishes freezing the thread.
  forceUpdate(): void {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 50); 
  }

}