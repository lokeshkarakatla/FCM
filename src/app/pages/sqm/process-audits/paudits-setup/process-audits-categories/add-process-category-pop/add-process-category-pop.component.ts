import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-process-category-pop',
  templateUrl: './add-process-category-pop.component.html',
  styleUrls: ['./add-process-category-pop.component.scss']
})
export class AddProcessCategoryPopComponent implements OnInit {

  isEditMode: boolean = false;

  selectedCommodity: string = '';

  constructor(
    private dialogRef: MatDialogRef<AddProcessCategoryPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.isEditMode = this.data === 1;
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({
      commodity: this.selectedCommodity
    });
  }

}