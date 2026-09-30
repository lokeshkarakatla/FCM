import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cause-dialog',
  templateUrl: './add-cause-dialog.component.html',
  styleUrls: ['./add-cause-dialog.component.scss']
})
export class AddCauseDialogComponent implements OnInit {

  shortCode: string = '';
  possibleCause: string = '';
  selectedCategory: string = 'man';
  isSaveBtnClicked: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<AddCauseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data && this.data.category) {
      this.selectedCategory = this.data.category;
    }
  }

  save(): void {
    this.isSaveBtnClicked = true;
    this.dialogRef.close({
      shortCode: this.shortCode,
      possibleCause: this.possibleCause,
      category: this.selectedCategory
    });
  }

  close(): void {
    this.dialogRef.close(null);
  }
}
