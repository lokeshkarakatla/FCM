import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-sub-setup-defect-dialog',
  templateUrl: './add-sub-setup-defect-dialog.component.html',
  styleUrls: ['./add-sub-setup-defect-dialog.component.scss']
})
export class AddSubSetupDefectDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSubSetupDefectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  values1 = [
    { defect: 'Thin Paint', module: 'Front Door', function: 'Aesthetics' },
    { defect: 'Thin Paint', module: 'Front Door', function: 'Aesthetics' },
    { defect: 'Thin Paint', module: 'Front Door', function: 'Aesthetics' },
   

  ]
  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  close() {
    this.dialogRef.close();
  }
}
