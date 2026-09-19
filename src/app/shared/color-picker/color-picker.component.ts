import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  
  constructor(
    private _dialogRef: MatDialogRef<ColorPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public color: string) {

    _dialogRef.disableClose = true;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  pickColor() {
    this._dialogRef.close(this.color);
  }
  changeEvent(event) {
    // 
    this.color = event.color.hex;
  }

  onNoClick() {
    this._dialogRef.close();
  }

}
