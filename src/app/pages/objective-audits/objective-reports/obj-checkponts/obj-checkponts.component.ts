import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddPsrPopComponent } from './add-psr-pop/add-psr-pop.component';
import { PopupComponent } from './popup/popup.component';
@Component({
  selector: 'app-obj-checkponts',
  templateUrl: './obj-checkponts.component.html',
  styleUrls: ['./obj-checkponts.component.scss']
})
export class ObjCheckpontsComponent implements OnInit {

  // Pagination variable
  currentPage: number;
  pageSize: number = parseInt(localStorage.getItem('hanndover-master') ? localStorage.getItem('handover-master') : '50')
  totalSize: number;
  fromIndex: number = 0;
  toIndex: any = parseInt(sessionStorage.getItem('gridValue') ? sessionStorage.getItem('gridValue') : '50');

  filterForm: FormGroup;
  filterToggle: boolean;
  tableList: Array<any> = [
    { category: 'Exterior', measure: 'Gap', one: '2', Issues: '123 Gap (a)', Defect: 'Thin Paint', Reference: '2', Initiated: '15-01-2023', Closed: '01-03-2023' },
    { category: 'Interior', measure: 'Alignment', one: '5', Issues: '125 Gap (c)', Defect: 'Tool / Scuff Marks', Reference: '4', Initiated: '10-12-2022', Closed: '10-02-2023' },
    { category: 'Matching', measure: 'Flush', one: '1', Issues: '128 Flush', Defect: 'Sink / flow marks', Reference: '7', Initiated: '15-01-2023', Closed: '01-03-2023' },
    { category: 'Sealing', measure: 'Parallelism', one: '4', Issues: '135 Alignment', Defect: 'Scratch', Reference: '1', Initiated: '10-12-2022', Closed: '10-02-2023' },
    { category: 'Exterior', measure: 'Consistency', one: '3', Issues: '144 Parallelism', Defect: 'Sink / flow marks', Reference: '5', Initiated: '15-01-2023', Closed: '01-03-2023' },
  ];


  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.filterForm = this.fb.group({
    });
  }


  ngOnInit() {
  }

  openONEdialog(item) {
    let dialogRef = this.dialog.open(PopupComponent, {
      data: item,
      height: 'auto',
      width: '900px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
        //this.getAllClients();
      }
    });
  }

  openPSRdialog(item) {
    let dialogRef = this.dialog.open(AddPsrPopComponent, {
      data: item,
      height: 'auto',
      width: '900px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
        //this.getAllClients();
      }
    });
  }


   public addchecklistaudit(auditdata) {
    // this.router.navigate(['./app/prts/intiative']);
    window.open('/#/app/prts-grid')

    //  let dialogRef = this.dialog.open(AddintiativeComponent, {
    //    data: auditdata,
    //    height: 'auto',
    //    width: '1500px'
    //  });
    //  dialogRef.afterClosed().subscribe(data => {
    //  });
  }

}

