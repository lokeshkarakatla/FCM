import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-checklist-lineitem',
  templateUrl: './add-checklist-lineitem.component.html',
  styleUrls: ['./add-checklist-lineitem.component.scss']
})
export class AddChecklistLineitemComponent implements OnInit {
  Issue: any;
  lead: any;
  isAutoPopulate: boolean = false;
  addStep = 1;

  iss: any = [

  ]

  issues: any = [
    { id: 0, value: "Fuel filler hinge area/Fuel flap edge  " },
    { id: 1, value: "RHR BSO Ding  " },
    { id: 2, value: "LHR Door outer scratch" },
    { id: 3, value: "Roof rail - Sink marks" },

  ]


  constructor(public dialogRef: MatDialogRef<AddChecklistLineitemComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  changeAddStep(value) {
    this.addStep = value;
  }

  showOptions(event, val) {
    if (event.checked) {
      this.Issue = val;
      console.log(this.Issue);
    }
    else {
      this.isAutoPopulate = event.checked;
      this.Issue = null;
    }

  }
  // selectedIssue(event) {
  //   if (this.isAutoPopulate) {
  //     this.Issue = event;
  //   }

  // }
}
