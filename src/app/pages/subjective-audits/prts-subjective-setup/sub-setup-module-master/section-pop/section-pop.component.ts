import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-section-pop',
  templateUrl: './section-pop.component.html',
  styleUrls: ['./section-pop.component.scss']
})
export class SectionPopComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SectionPopComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
