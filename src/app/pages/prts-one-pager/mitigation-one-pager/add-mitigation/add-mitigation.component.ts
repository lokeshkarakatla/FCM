import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-mitigation',
  templateUrl: './add-mitigation.component.html',
  styleUrls: ['./add-mitigation.component.scss']
})
export class AddMitigationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddMitigationComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
