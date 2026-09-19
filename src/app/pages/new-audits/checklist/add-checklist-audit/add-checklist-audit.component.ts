import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChecklistComponent } from '../checklist.component';

@Component({
  selector: 'app-add-checklist-audit',
  templateUrl: './add-checklist-audit.component.html',
  styleUrls: ['./add-checklist-audit.component.scss']
})
export class AddChecklistAuditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddChecklistAuditComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }



}
