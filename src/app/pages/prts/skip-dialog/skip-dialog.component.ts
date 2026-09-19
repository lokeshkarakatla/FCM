import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-skip-dialog',
  templateUrl: './skip-dialog.component.html',
  styleUrls: ['./skip-dialog.component.scss']
})
export class SkipDialogComponent implements OnInit {
 
  NotesForm: FormGroup;
  isProject: boolean = false;
  isSaveBtnClicked: boolean = false;
  todayDate = new Date();
  manageService: any;

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SkipDialogComponent>,
  ) {

  }
  ngOnInit() {
  }

  close(value) {
    this.dialogRef.close(value);
  }
  

}
