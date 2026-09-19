import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-checkpoint',
  templateUrl: './add-checkpoint.component.html',
  styleUrls: ['./add-checkpoint.component.scss']
})
export class AddCheckpointComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddCheckpointComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
