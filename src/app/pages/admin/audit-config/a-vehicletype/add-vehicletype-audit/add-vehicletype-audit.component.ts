import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-vehicletype-audit',
  templateUrl: './add-vehicletype-audit.component.html',
  styleUrls: ['./add-vehicletype-audit.component.scss']
})
export class AddVehicletypeAuditComponent implements OnInit {

  userForm: any;
       showDialog = false;
     
       constructor(
         @Inject(MAT_DIALOG_DATA) public data: any,
         public dialogRef: MatDialogRef<AddVehicletypeAuditComponent>
       ) { }
     
       ngOnInit() { }
     
       close() {
         this.dialogRef.close();
       }

}
