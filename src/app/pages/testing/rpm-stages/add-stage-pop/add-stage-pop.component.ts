import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-stage-pop',
  templateUrl: './add-stage-pop.component.html',
  styleUrls: ['./add-stage-pop.component.scss']
})
export class AddStagePopComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<AddStagePopComponent>) { }

  ngOnInit(): void {
  }

   close(): void {
    this.dialogRef.close();
  }
}
