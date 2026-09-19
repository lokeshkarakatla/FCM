import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-edit-image',
  templateUrl: './pop-edit-image.component.html',
  styleUrls: ['./pop-edit-image.component.scss']
})
export class PopEditImageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopEditImageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}