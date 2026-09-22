import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-parameter-lineitem',
  templateUrl: './add-parameter-lineitem.component.html',
  styleUrls: ['./add-parameter-lineitem.component.scss']
})
export class AddParameterLineitemComponent implements OnInit {

  category: string = 'Exterior';
  checkpoint: string = '1A - HOOD TO FRONT GRILL - GAP( a )';
  image: string = 'Right Fender';
  measure: string = 'GAP';
  lsl: string = '0.20';
  usl: string = '1.20';
  value: string = '0.85';
  row: number = 4;
  col: number = 5;

  constructor(public dialogRef: MatDialogRef<AddParameterLineitemComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data) {
      this.checkpoint = this.data.checkpoints || this.checkpoint;
      this.measure = this.data.measure || 'GAP';
      this.lsl = this.data.lsl || '0.20';
      this.usl = this.data.usl || '1.20';
      this.value = this.data.value || '0.85';
      this.row = parseInt(this.data.row) || 4;
      this.col = parseInt(this.data.col) || 5;
    }
  }

  save() {
    const valNum = parseFloat(this.value);
    const lslNum = parseFloat(this.lsl);
    const uslNum = parseFloat(this.usl);
    const isPass = !isNaN(valNum) && !isNaN(lslNum) && !isNaN(uslNum) && valNum >= lslNum && valNum <= uslNum;
    
    this.dialogRef.close({
      serial: this.data ? this.data.serial : Math.floor(140 + Math.random() * 850).toString(),
      checkpoints: this.checkpoint.includes(' - ') ? this.checkpoint.split(' - ')[0] : this.checkpoint,
      measure: this.measure,
      lsl: this.lsl,
      usl: this.usl,
      value: this.value,
      unit: 'mm',
      row: this.row.toString(),
      col: this.col.toString(),
      status: isPass ? 'Pass' : 'Fail',
      color: isPass ? 'rgba(127, 255, 127, 0.62)' : 'rgba(255, 205, 205, 0.64)'
    });
  }

  close() {
    this.dialogRef.close();
  }

}
