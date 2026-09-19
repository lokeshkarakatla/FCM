import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-manager-dialog',
  templateUrl: './manager-dialog.component.html',
  styleUrls: ['./manager-dialog.component.scss']
})
export class ManagerDialogComponent implements OnInit {

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<ManagerDialogComponent> ,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  managers = [
    { Manager:'Navin Malik'},
    { Manager:'Sourabh'},
    { Manager:'Surya Teja'},
    { Manager:'Vamshi'}
  ]
}
