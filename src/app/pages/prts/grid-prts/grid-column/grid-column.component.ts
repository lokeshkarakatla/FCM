import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss']
})
export class GridColumnComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridColumnComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
