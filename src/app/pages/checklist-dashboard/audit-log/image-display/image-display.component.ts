import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.scss']
})
export class ImageDisplayComponent implements OnInit {
  //myGroup: FormGroup;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  images = ["/assets/carrear.jpeg", "", ""];

  constructor(public dialogRef: MatDialogRef<ImageDisplayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }
  loadcount: number;
  loadtotal: number;
  preloaded: boolean;
  loadImages(imagefiles: any) {
    return new Promise<any>(resolve => {
      let loadcount = 0;
      let loadtotal = 1;
      this.preloaded = false;
      var loadedimages = [];
      for (var i = 0; i < imagefiles.length; i++) {
        var image = new Image();
        image.onload = () => {

          loadcount++;
          if (loadcount == loadtotal) {
            this.preloaded = true;
          }

        };
        image.src = imagefiles[i];
        loadedimages[i] = image;
        if (i == imagefiles.length - 1) {
          resolve(loadedimages)
        }
      }
    })
  }


}