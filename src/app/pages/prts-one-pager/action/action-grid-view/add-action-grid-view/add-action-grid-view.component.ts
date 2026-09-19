import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-action-grid-view',
  templateUrl: './add-action-grid-view.component.html',
  styleUrls: ['./add-action-grid-view.component.scss']
})
export class AddActionGridViewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddActionGridViewComponent>, @Inject(MAT_DIALOG_DATA) public campaign: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
