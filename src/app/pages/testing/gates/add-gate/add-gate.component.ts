import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-gate',
  templateUrl: './add-gate.component.html',
  styleUrls: ['./add-gate.component.scss']
})
export class AddGateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddGateComponent>) { }

  ngOnInit(): void {
  }

   close(): void {
    this.dialogRef.close();
  }

}
