import { LogauditresultComponent } from './../../logauditresult/logauditresult.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteComponent } from '../../note/note.component';
import { environment } from 'src/environments/environment';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-action-moniter',
  templateUrl: './action-moniter.component.html',
  styleUrls: ['./action-moniter.component.scss']
})
export class ActionMoniterComponent implements OnInit {

  constructor(public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    if (environment.mode == 1) {
      this.values = PartsData.monitor();
    }
    else {

    }
  }
  values = [

  ]
  next() {
    this.router.navigate(['/app/prtsnavbar/deploy']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/why']);
  }
  action() {
    this.router.navigate(['/app/prtsnavbar/why']);
  }
  note() {

    let dialogRef = this.dialog.open(NoteComponent, {

      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  addlog() {
    let dialogRef = this.dialog.open(LogauditresultComponent, {

      height: 'auto',
      width: '1300px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });

  }


}
