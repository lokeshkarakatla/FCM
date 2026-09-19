import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-parts-family-pop',
  templateUrl: './parts-family-pop.component.html',
  styleUrls: ['./parts-family-pop.component.scss']
})
export class PartsFamilyPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PartsFamilyPopComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
