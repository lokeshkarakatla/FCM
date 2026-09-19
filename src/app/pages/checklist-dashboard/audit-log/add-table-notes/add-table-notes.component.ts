import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-table-notes',
  templateUrl: './add-table-notes.component.html',
  styleUrls: ['./add-table-notes.component.scss']
})
export class AddTableNotesComponent implements OnInit {
  myGroup: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddTableNotesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(): void {
    this.dialogRef.close();
  }


}