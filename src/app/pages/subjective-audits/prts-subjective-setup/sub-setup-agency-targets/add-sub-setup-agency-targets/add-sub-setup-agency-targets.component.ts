import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-agency-targets',
  templateUrl: './add-sub-setup-agency-targets.component.html',
  styleUrls: ['./add-sub-setup-agency-targets.component.scss']
})
export class AddSubSetupAgencyTargetsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<AddSubSetupAgencyTargetsComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
