import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-obj-image-dialog',
  templateUrl: './obj-image-dialog.component.html',
  styleUrls: ['./obj-image-dialog.component.scss']
})
export class ObjImageDialogComponent implements OnInit {

  Image: any = '/assets/cardoor.png';
  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<ObjImageDialogComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }


}
