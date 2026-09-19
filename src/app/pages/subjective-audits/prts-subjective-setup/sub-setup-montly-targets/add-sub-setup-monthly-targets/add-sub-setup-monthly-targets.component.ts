import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-add-sub-setup-monthly-targets',
  templateUrl: './add-sub-setup-monthly-targets.component.html',
  styleUrls: ['./add-sub-setup-monthly-targets.component.scss']
})
export class AddSubSetupMonthlyTargetsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddSubSetupMonthlyTargetsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }
 
}
