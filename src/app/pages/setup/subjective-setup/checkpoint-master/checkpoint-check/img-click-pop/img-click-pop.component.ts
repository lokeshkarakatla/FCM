import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-click-pop',
  templateUrl: './img-click-pop.component.html',
  styleUrls: ['./img-click-pop.component.scss']
})
export class ImgClickPopComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ImgClickPopComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}

