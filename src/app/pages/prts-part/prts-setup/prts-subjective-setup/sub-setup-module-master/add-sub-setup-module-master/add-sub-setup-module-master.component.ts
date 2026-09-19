import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sub-setup-module-master',
  templateUrl: './add-sub-setup-module-master.component.html',
  styleUrls: ['./add-sub-setup-module-master.component.scss']
})
export class AddSubSetupModuleMasterComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddSubSetupModuleMasterComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
