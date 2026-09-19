import { ObjImageDialogComponent } from './obj-image-dialog/obj-image-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-obj-setup-modules-checkpoints',
  templateUrl: './obj-setup-modules-checkpoints.component.html',
  styleUrls: ['./obj-setup-modules-checkpoints.component.scss']
})
export class ObjSetupModulesCheckpointsComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog, public router:Router) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  values = []
  hidden = false;
  url = "/assets/carrear.jpeg"
  Image: any = '/assets/cardoor.png';

  // values1 = [
  //   { title: 'Back Rear Grill', image: "/assets/part1.png", checkpoints: '3', },
  //   { title: 'Front right head lamp', image: "/assets/part2.png", checkpoints: '7', },
  //   { title: 'Back Rear tail lamp', image: "/assets/part3.png", checkpoints: '2', },
  //   { title: 'Front Bumper section', image: "/assets/part5.png", checkpoints: '4', },

  // ]

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }


  values1 = [
    { module: 'Left Frant Door', checkpoint: '10', min: '121', max: '130', status: true, image: "/assets/cardoor.png" },
    { module: 'Right Frant Door', checkpoint: '5', min: '131', max: '140', status: true, image: "/assets/cardoor.png" },
    // { module: 'Left Frant Door', checkpoint: '10', min: '121', max: '130', status: true, image: "/assets/part1.png" },
    // { module: 'Left Frant Door', checkpoint: '10', min: '121', max: '130', status: true, image: "/assets/part1.png" },
   
  ]
  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par');
  }

  addcheckpoint(item) {
    this.router.navigate(['/app/setup/subjective/overview']);
   // window.open('/#/parameter-dashboard/issuelog-par');
    // this.dialog.open(AddCheckpointComponent, {
    //   data: item,
    //   width: "600px",
    //   height: "auto"
    // })
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  imageSource(val) {
    this.Image = val;
    this.hidden = true;
    // this.hidden = !this.hidden;
    //console.log(this.Image)
    this.dialog.open(ObjImageDialogComponent, {
     width: "600px",
      height: "auto"
    })

  }
  openUploadCSV() {

  }

  downloadSampleExcel() {

  }
  

}
