import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  Image: any = '/assets/cardoor.png';
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ImageDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }


}
