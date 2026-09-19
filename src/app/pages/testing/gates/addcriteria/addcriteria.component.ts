import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addcriteria',
  templateUrl: './addcriteria.component.html',
  styleUrls: ['./addcriteria.component.scss']
})
export class AddcriteriaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddcriteriaComponent>) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    // handle the file — e.g. store it, upload it, etc.
    console.log('Selected file:', file);
  }
}



}
