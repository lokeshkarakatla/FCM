import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-capa',
  templateUrl: './add-capa.component.html',
  styleUrls: ['./add-capa.component.scss']
})
export class AddCapaComponent implements OnInit {

  userForm: any;
  showDialog = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddCapaComponent>
  ) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

}
