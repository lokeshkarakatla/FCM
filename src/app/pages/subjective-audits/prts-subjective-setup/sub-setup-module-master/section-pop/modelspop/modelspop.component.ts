import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modelspop',
  templateUrl: './modelspop.component.html',
  styleUrls: ['./modelspop.component.scss']
})
export class ModelspopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModelspopComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
