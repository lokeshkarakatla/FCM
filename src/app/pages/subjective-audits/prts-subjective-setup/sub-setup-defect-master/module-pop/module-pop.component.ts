import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-module-pop',
  templateUrl: './module-pop.component.html',
  styleUrls: ['./module-pop.component.scss']
})
export class ModulePopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModulePopComponent>) { }

  ngOnInit(): void {
  }
   close() {
    this.dialogRef.close();
  }

}
