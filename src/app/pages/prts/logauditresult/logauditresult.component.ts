import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };
@Component({
  selector: 'app-logauditresult',
  templateUrl: './logauditresult.component.html',
  styleUrls: ['./logauditresult.component.scss']
})
export class LogauditresultComponent implements OnInit {
  isRepeted: boolean = false;
  currentlyChecked: CheckBoxType;
  constructor(public dialogRef: MatDialogRef<LogauditresultComponent>,) { }

  ngOnInit(): void {
  }
  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }
  close() {
    this.dialogRef.close();
  }
}
