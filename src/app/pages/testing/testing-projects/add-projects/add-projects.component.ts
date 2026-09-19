import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProjectSectionComponent } from '../add-project-section/add-project-section.component';
 
@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {
  addStep = 1;
  updateStep = 1;
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,private dialog: MatDialog,
      public dialogRef: MatDialogRef<AddProjectsComponent>
    ) {}
 
    ngOnInit() {}
 
    close() {
      this.dialogRef.close();
    }
     changeAddStep(value: any) {
    this.addStep = value;
  }
 
  changeUpdateStep(value: any) {
    this.updateStep = value;
  }
 
        openEditDialog(value: any) {
    let dialogRef = this.dialog.open(AddProjectSectionComponent, {
      data: value,
      height: 'auto',
      width: '500px',
    });
    // dialogRef.afterClosed().subscribe(data => {
    //   //if () {
    //     this.getAllProjects();
    //  // }
    // })
  }
 
}
 