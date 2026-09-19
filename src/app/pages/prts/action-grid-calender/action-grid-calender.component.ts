import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-grid-calender',
  templateUrl: './action-grid-calender.component.html',
  styleUrls: ['./action-grid-calender.component.scss']
})
export class ActionGridCalenderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

   goBack(){
    this.router.navigate(['/app/prts-part/prtsissuestatus/psr']);
  }

}
