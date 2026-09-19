import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-audittype',
  templateUrl: './user-audittype.component.html',
  styleUrls: ['./user-audittype.component.scss']
})
export class UserAudittypeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserAudittypeComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
