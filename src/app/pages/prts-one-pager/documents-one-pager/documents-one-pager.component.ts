import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
import { PartsData } from '../../prts/PartsData';
import { AddDocumentsComponent } from './add-documents/add-documents.component';

// export interface DocumentItem {
//   date: string;
//   subject: string;
// }

@Component({
  selector: 'app-documents-one-pager',
  templateUrl: './documents-one-pager.component.html',
  styleUrls: ['./documents-one-pager.component.scss']
})
export class DocumentsOnePagerComponent implements OnInit {

  constructor(public router: Router,
    public dialog: MatDialog) { }


  values: any[] = [];

  ngOnInit(): void {

    this.values = PartsData.closur();

  }

  next() {
    // this.router.navigate(['/app/prtsnavbar/summary']);
  }
  back() {
    // this.router.navigate(['/app/prtsnavbar/d7']);
  }
  public adddocument(auditdata: any) {
    let dialogRef = this.dialog.open(AddDocumentsComponent, {
      data: auditdata,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }



}
