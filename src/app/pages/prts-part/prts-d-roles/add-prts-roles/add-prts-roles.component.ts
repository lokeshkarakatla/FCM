import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-prts-roles',
  templateUrl: './add-prts-roles.component.html',
  styleUrls: ['./add-prts-roles.component.scss']
})
export class AddPrtsRolesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPrtsRolesComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
