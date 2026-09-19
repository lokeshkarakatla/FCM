import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-notes-table',
  templateUrl: './add-notes-table.component.html',
  styleUrls: ['./add-notes-table.component.scss']
})
export class AddNotesTableComponent implements OnInit {
  myGroup: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddNotesTableComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }


}
