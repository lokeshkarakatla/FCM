import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-drivetype-audit',
  templateUrl: './add-drivetype-audit.component.html',
  styleUrls: ['./add-drivetype-audit.component.scss']
})
export class AddDrivetypeAuditComponent implements OnInit {

  userForm: any;
     showDialog = false;
   
     constructor(
       @Inject(MAT_DIALOG_DATA) public data: any,
       public dialogRef: MatDialogRef<AddDrivetypeAuditComponent>
     ) { }
   
     ngOnInit() { }
   
     close() {
       this.dialogRef.close();
     }
}
