import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDocumentComponent>,) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
}
