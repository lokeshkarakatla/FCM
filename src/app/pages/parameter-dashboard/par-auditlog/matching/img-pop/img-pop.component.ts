import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-pop',
  templateUrl: './img-pop.component.html',
  styleUrls: ['./img-pop.component.scss']
})
export class ImgPopComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ImgPopComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}

