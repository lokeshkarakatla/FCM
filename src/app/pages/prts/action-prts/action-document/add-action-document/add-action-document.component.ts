import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-action-document',
  templateUrl: './add-action-document.component.html',
  styleUrls: ['./add-action-document.component.scss']
})
export class AddActionDocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddActionDocumentComponent>,) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
