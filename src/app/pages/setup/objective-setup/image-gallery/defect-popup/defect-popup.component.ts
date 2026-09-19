import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-defect-popup',
  templateUrl: './defect-popup.component.html',
  styleUrls: ['./defect-popup.component.scss']
})
export class DefectPopupComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<DefectPopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  values1 = [
    { defect: 'Thin Paint', module: 'Front Door', function: 'Aesthetics' },
    { defect: 'Thin Paint', module: 'Front Door', function: 'Aesthetics' },
    { defect: 'Thin Paint', module: 'Front Door', function: 'Aesthetics' },
   

  ]
  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  close() {
    this.dialogRef.close();
  }



}
