import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zone-pop',
  templateUrl: './zone-pop.component.html',
  styleUrls: ['./zone-pop.component.scss']
})
export class ZonePopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ZonePopComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  values1 = [
    { issue: "Zone 1", status: true },
    { issue: "Zone 2", status: true },
    { issue: "Zone 3", status: true },
    //{ location: "Banglore", status: true },


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
