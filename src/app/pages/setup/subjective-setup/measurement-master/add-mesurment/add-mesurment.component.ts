import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-mesurment',
  templateUrl: './add-mesurment.component.html',
  styleUrls: ['./add-mesurment.component.scss']
})
export class AddMesurmentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddMesurmentComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
