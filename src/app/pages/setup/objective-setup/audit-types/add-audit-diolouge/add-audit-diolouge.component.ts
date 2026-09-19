import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-audit-diolouge',
  templateUrl: './add-audit-diolouge.component.html',
  styleUrls: ['./add-audit-diolouge.component.scss']
})
export class AddAuditDiolougeComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddAuditDiolougeComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
