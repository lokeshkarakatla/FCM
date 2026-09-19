import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { Onepager } from '../Onepager';
import { AddMitigationComponent } from './add-mitigation/add-mitigation.component';

@Component({
  selector: 'app-mitigation-one-pager',
  templateUrl: './mitigation-one-pager.component.html',
  styleUrls: ['./mitigation-one-pager.component.scss']
})
export class MitigationOnePagerComponent implements OnInit {

  totalSize: any;
  currentPage: any;
  pageSize: any;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
   
  }

content: string = '';

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ script: 'sub' }, { script: 'super' }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image'],
      ['clean']
    ]
  };



  values = [

  ];

  public addParameter(auditdata: any) {
    let dialogRef = this.dialog.open(AddMitigationComponent, {
      data: auditdata,
      height: 'auto',
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }



}
