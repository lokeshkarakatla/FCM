import { Component, OnInit } from '@angular/core';
import { AddphotoPopComponent } from './addphoto-pop/addphoto-pop.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-project-photos',
  templateUrl: './project-photos.component.html',
  styleUrls: ['./project-photos.component.scss']
})
export class ProjectPhotosComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  Addphoto(value: any) {
    this.dialog.open(AddphotoPopComponent, {
      data: value,
      height: 'auto',
      width: '500px',
    });
  }




}
