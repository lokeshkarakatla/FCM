import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-action-grid-meet',
  templateUrl: './add-action-grid-meet.component.html',
  styleUrls: ['./add-action-grid-meet.component.scss']
})
export class AddActionGridMeetComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddActionGridMeetComponent>, @Inject(MAT_DIALOG_DATA) public campaign: any) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
