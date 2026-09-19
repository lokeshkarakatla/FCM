import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-uploadstagepop',
  templateUrl: './uploadstagepop.component.html',
  styleUrls: ['./uploadstagepop.component.scss']
})
export class UploadstagepopComponent implements OnInit {
changeAddStep(arg0: number) {
throw new Error('Method not implemented.');
}
onFileSelected($event: Event) {
throw new Error('Method not implemented.');
}
selectedFiles: any;
onDragLeave($event: DragEvent) {
throw new Error('Method not implemented.');
}
onDrop($event: DragEvent) {
throw new Error('Method not implemented.');
}
onDragOver($event: DragEvent) {
throw new Error('Method not implemented.');
}


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UploadstagepopComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
