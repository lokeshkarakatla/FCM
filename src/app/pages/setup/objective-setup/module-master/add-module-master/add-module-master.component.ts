import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-module-master',
  templateUrl: './add-module-master.component.html',
  styleUrls: ['./add-module-master.component.scss']
})
export class AddModuleMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddModuleMasterComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }


}
