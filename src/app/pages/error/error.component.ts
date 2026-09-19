import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {
  public settings = []
  constructor(public router: Router) {

  }

  goHome(): void {
    this.router.navigate(['/app']);
  }

  ngAfterViewInit() {
    //this.settings.loadingSpinner = false;
  }

}