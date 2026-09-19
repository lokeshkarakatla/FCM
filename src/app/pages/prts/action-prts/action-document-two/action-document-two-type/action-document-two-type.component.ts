import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-document-two-type',
  templateUrl: './action-document-two-type.component.html',
  styleUrls: ['./action-document-two-type.component.scss']
})
export class ActionDocumentTwoTypeComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<ActionDocumentTwoTypeComponent>,) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
