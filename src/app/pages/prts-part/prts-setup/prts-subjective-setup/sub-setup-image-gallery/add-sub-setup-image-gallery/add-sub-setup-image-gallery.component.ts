import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-image-gallery',
  templateUrl: './add-sub-setup-image-gallery.component.html',
  styleUrls: ['./add-sub-setup-image-gallery.component.scss']
})
export class AddSubSetupImageGalleryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<AddSubSetupImageGalleryComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }


}
