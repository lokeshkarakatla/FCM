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
    selectedFile: File;
  onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.selectedFile = file;
  }
}
onDragOver(event: DragEvent) {
  event.preventDefault();
}
onDrop(event: DragEvent) {
  event.preventDefault();
  if (event.dataTransfer?.files.length) {
    this.handleFile(event.dataTransfer.files[0]);
  }
}
  handleFile(arg0: File) {
    throw new Error('Method not implemented.');
  }

}
