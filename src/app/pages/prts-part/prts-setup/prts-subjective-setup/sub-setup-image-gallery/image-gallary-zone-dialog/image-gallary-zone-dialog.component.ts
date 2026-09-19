import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-gallary-zone-dialog',
  templateUrl: './image-gallary-zone-dialog.component.html',
  styleUrls: ['./image-gallary-zone-dialog.component.scss']
})
export class ImageGallaryZoneDialogComponent implements OnInit {

  Image: any = '/assets/door10x10.png';
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ImageGallaryZoneDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
}
