import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss']
})
export class AddUpdateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddUpdateComponent>, @Inject(MAT_DIALOG_DATA) public campaign: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
