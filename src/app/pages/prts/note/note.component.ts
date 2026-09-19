import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  NotesForm!: FormGroup;
  isProject: boolean = false;
  isSaveBtnClicked: boolean = false;
  todayDate = new Date();
  manageService: any;

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NoteComponent>,
  ) {

  }
  ngOnInit() {
  }

  close(value:any) {
    this.dialogRef.close(value);
  }


  

}
