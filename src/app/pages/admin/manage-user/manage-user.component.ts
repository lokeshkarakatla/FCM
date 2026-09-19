import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    // this.titleService.setTitle(newTitle);
  }

  ngOnInit() {

  }
}
