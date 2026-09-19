import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prts-one-pager',
  templateUrl: './prts-one-pager.component.html',
  styleUrls: ['./prts-one-pager.component.scss']
})
export class PrtsOnePagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isNavOpen = true;

toggleNav() {
  this.isNavOpen = !this.isNavOpen;
}

}
