import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-document-type',
  templateUrl: './action-document-type.component.html',
  styleUrls: ['./action-document-type.component.scss']
})
export class ActionDocumentTypeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ActionDocumentTypeComponent>,) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
