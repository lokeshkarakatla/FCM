import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-defects-pop',
  templateUrl: './add-defects-pop.component.html',
  styleUrls: ['./add-defects-pop.component.scss']
})
export class AddDefectsPopComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddDefectsPopComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
