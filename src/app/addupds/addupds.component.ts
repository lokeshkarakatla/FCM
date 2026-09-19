import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addupds',
  templateUrl: './addupds.component.html',
  styleUrls: ['./addupds.component.scss']
})
export class AddupdsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddupdsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

   ngOnInit() {
   }

   close(): void {
     this.dialogRef.close();
   }

 }
