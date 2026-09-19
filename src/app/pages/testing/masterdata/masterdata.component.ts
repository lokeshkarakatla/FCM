import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.scss']
})
export class MasterdataComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit(): void {
  }
  isNavOpen = true;
 
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
 
}
 