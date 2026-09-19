import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-issue-master',
  templateUrl: './add-issue-master.component.html',
  styleUrls: ['./add-issue-master.component.scss']
})
export class AddIssueMasterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddIssueMasterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }


  close(){
    this.dialogRef.close();
  }


}
