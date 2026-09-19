import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { Router } from '@angular/router';
import { AddCheckpointComponent } from './add-checkpoint/add-checkpoint.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkpoint-master',
  templateUrl: './checkpoint-master.component.html',
  styleUrls: ['./checkpoint-master.component.scss']
})
export class CheckpointMasterComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog, public router: Router) { }

  values = []
  hidden = false;
  url = "/assets/carrear.jpeg"
  Image: any = '/assets/cardoor.png';

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
    this.dialog.open(ImageDialogComponent, {
      width: "600px",
      height: "auto"
    })

  }
  openUploadCSV() {

  }

  downloadSampleExcel() {

  }



}
