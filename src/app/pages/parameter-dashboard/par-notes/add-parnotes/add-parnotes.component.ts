import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-parnotes',
  templateUrl: './add-parnotes.component.html',
  styleUrls: ['./add-parnotes.component.scss']
})
export class AddParnotesComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddParnotesComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }


}
