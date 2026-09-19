import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-par-auditlog',
  templateUrl: './par-auditlog.component.html',
  styleUrls: ['./par-auditlog.component.scss']
})
export class ParAuditlogComponent implements OnInit {

  isChecked1: string = 'no';
  isChecked2: string = 'yes';



  constructor(
    public dialog: MatDialog,
    public router: Router,
    private location: Location) { }


  ngOnInit() {
  }

  back() {
    this.location.back();
  }

  color1() {
    this.isChecked1 = 'no'
    this.isChecked2 = 'yes'
  }

  color2() {
    this.isChecked1 = 'yes'
    this.isChecked2 = 'no'
  }



}