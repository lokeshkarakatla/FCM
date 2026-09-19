import { Component, OnInit } from '@angular/core';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { environment } from 'src/environments/environment';
import { admindata } from '../admindata';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public popoverStatusTitle: string = "Confirm Save Changes";
  public popoverStatusMessage: string =
    "Are you sure you want to save changes?";
  public cancelClicked: boolean = false;

  constructor(
    // private alertService: AlertService,
    //private titleService: Title
  ) { }
  public setTitle(newTitle: string) {
    //this.titleService.setTitle(newTitle);
  }
  tableList = []
  ngOnInit() {
    // this.setTitle("MG | Admin | Settings");
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.tableList = admindata.preferance();
    }
    else {

    }
  }



  saveSettings() {
    // this.alertService.createAlert("Successfully Saved", 1);
  }

}
