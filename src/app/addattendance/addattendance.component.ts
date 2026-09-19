import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addattendance',
  templateUrl: './addattendance.component.html',
  styleUrls: ['./addattendance.component.scss']
})
export class AddattendanceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddattendanceComponent>) { }

    ngOnInit(): void {
    }
     close() {
      this.dialogRef.close();
    }

  }
