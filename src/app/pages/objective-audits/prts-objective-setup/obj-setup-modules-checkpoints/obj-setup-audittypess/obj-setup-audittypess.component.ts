import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-obj-setup-audittypess',
  templateUrl: './obj-setup-audittypess.component.html',
  styleUrls: ['./obj-setup-audittypess.component.scss']
})
export class ObjSetupAudittypessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ObjSetupAudittypessComponent>) { }
 
   ngOnInit(): void {
   }
   close() {
     this.dialogRef.close();
   }
 

}
