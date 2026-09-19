import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-tests',
  templateUrl: './add-tests.component.html',
  styleUrls: ['./add-tests.component.scss']
})
export class AddTestsComponent implements OnInit {

   constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      public dialogRef: MatDialogRef<AddTestsComponent>
    ) {}
  
    ngOnInit() {}
  
    close() {
      this.dialogRef.close();
    }

}
