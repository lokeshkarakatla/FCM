import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-pop-sealing',
  templateUrl: './img-pop-sealing.component.html',
  styleUrls: ['./img-pop-sealing.component.scss']
})
export class ImgPopSealingComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<ImgPopSealingComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}

