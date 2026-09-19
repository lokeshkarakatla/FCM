import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-obj-setup-category-master',
  templateUrl: './add-obj-setup-category-master.component.html',
  styleUrls: ['./add-obj-setup-category-master.component.scss']
})
export class AddObjSetupCategoryMasterComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<AddObjSetupCategoryMasterComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
