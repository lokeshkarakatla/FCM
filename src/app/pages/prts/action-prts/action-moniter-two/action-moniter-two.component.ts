import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LogauditresultComponent } from '../../logauditresult/logauditresult.component';
import { NoteComponent } from '../../note/note.component';
import { PartsData } from '../../PartsData';

@Component({
  selector: 'app-action-moniter-two',
  templateUrl: './action-moniter-two.component.html',
  styleUrls: ['./action-moniter-two.component.scss']
})
export class ActionMoniterTwoComponent implements OnInit {


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
    this.router.navigate(['/app/prtsnavbar/deploy-two']);
  }
  back() {
    this.router.navigate(['/app/prtsnavbar/why-two']);
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