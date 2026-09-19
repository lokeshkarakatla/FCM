import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filetr-current-status',
  templateUrl: './filetr-current-status.component.html',
  styleUrls: ['./filetr-current-status.component.scss']
})
export class FiletrCurrentStatusComponent implements OnInit {

   gridColumnForm: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public grids: any,
    private formBuilder: FormBuilder,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<FiletrCurrentStatusComponent>) {
  }

  ngOnInit() {
    this.gridColumnForm = this.formBuilder.group({
      raBillRef: true,
      project: true,
      vendor: true,
      workOrder: true,
      month: true,
      year: true,
      billDate: true,
      status: true,
      action: true,
    });
  }


  close(): void {
    this.dialogRef.close();
  }

}



