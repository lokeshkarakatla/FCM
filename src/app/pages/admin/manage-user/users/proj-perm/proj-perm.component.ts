import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proj-perm',
  templateUrl: './proj-perm.component.html',
  styleUrls: ['./proj-perm.component.scss']
})
export class ProjPermComponent implements OnInit {

  public screens = [
    { "name": "C Rating", "value1": true, "value2": true, "value3": true, "value4": true },
    { "name": "D Rating", "value1": true, "value2": true, "value3": true, "value4": true },
    // {"name":"Indian Oil Corporation Ltd","value1":true,"value2":true,"value3":true,"value4":true},
    // {"name":"NTPC Ltd","value1":true,"value2":true,"value3":true,"value4":true},
    // {"name":"Vedanta Ltd","value1":true,"value2":true,"value3":true,"value4":true},
    // {"name":"Grasim Industries Ltd.","value1":true,"value2":true,"value3":true,"value4":true}
  ];

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
  savePermissions() {

  }

}
