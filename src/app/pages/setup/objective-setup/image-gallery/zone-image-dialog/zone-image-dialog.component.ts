import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-zone-image-dialog',
  templateUrl: './zone-image-dialog.component.html',
  styleUrls: ['./zone-image-dialog.component.scss']
})
export class ZoneImageDialogComponent implements OnInit {

  Image: any = '/assets/zones.png';
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ZoneImageDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
