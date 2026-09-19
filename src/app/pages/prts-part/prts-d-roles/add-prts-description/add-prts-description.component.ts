import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-prts-description',
  templateUrl: './add-prts-description.component.html',
  styleUrls: ['./add-prts-description.component.scss']
})
export class AddPrtsDescriptionComponent implements OnInit {

  myGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddPrtsDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
