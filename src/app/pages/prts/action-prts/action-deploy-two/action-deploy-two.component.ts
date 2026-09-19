import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
enum CheckBoxType { APPLY_FOR_JOB, MODIFY_A_JOB, NONE };
@Component({
  selector: 'app-action-deploy-two',
  templateUrl: './action-deploy-two.component.html',
  styleUrls: ['./action-deploy-two.component.scss']
})
export class ActionDeployTwoComponent implements OnInit {

  check_box_type = CheckBoxType;

  currentlyChecked: CheckBoxType;
  constructor(public router: Router) { }

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
    this.router.navigate(['/app/prtsnavbar/actionmoniter-two']);
  }


}
