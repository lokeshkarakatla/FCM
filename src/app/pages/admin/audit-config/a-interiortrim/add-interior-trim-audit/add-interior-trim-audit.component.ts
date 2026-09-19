import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-interior-trim-audit',
  templateUrl: './add-interior-trim-audit.component.html',
  styleUrls: ['./add-interior-trim-audit.component.scss']
})
export class AddInteriorTrimAuditComponent implements OnInit {

   userForm: any;
      showDialog = false;
    
      constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddInteriorTrimAuditComponent>
      ) {}
    
      ngOnInit() {}
    
      close() {
        this.dialogRef.close();
      }
    
}
