import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };
@Component({
  selector: 'app-action-deploy',
  templateUrl: './action-deploy.component.html',
  styleUrls: ['./action-deploy.component.scss']
})
export class ActionDeployComponent implements OnInit {
  check_box_type = CheckBoxType;

  currentlyChecked: CheckBoxType;
  constructor(public router:Router) { }

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
  back() {
    this.router.navigate(['/app/prtsnavbar/actionmoniter']);
  }

}
