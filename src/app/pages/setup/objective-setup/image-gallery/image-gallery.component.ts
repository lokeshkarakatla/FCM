import { ZoneImageDialogComponent } from './zone-image-dialog/zone-image-dialog.component';
import { DefectPopupComponent } from './defect-popup/defect-popup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppRoutingModule } from 'src/app/app.routing';
import { environment } from 'src/environments/environment';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { ZonePopComponent } from '../defect-master/zone-pop/zone-pop.component';
import { ImageDialogComponent } from '../../subjective-setup/checkpoint-master/image-dialog/image-dialog.component';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoversendMessage: 'Are you sure you want to send.?'
  public popoversendTitle: string = 'Confirm Delete';
  hidden = false;

  Image: any = "/assets/zones.png";

  values1 = [
    {
      Audit: 'Product Quality Audit', title: 'Back Rear Grill', image: "/assets/zones.png", checkpoints: '3', zone: " 1", },
    {
      Audit: 'Product Quality Audit', title: 'Front right head lamp', image: "/assets/zones.png", checkpoints: '7', zone: " 3", },
    { Audit: 'Product Quality Audit', title: 'Back Rear tail lamp', image: "/assets/zones.png", checkpoints: '2', zone: " 2", },
    { Audit: 'Product Quality Audit', title: 'Front Bumper section', image: "/assets/zones.png", checkpoints: '4', zone: " 1", },
    { Audit: 'Product Quality Audit', title: 'Back Rear tail lamp', image: "/assets/zones.png", checkpoints: '2', zone: " 3", },
    { Audit: 'Product Quality Audit', title: 'Front Bumper section', image: "/assets/zones.png", checkpoints: '4', zone: " 2", },

  ]
  values = []
  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  addtarget(item) {
    this.dialog.open(AddPhotoComponent, {
      data: item,
      width: "900px",
      height: "auto"
    })
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  openUploadCSV() {

  }

  downloadSampleExcel() {

  }

  imageSource(val) {
    this.Image = val;
    this.hidden = true;
    // this.hidden = !this.hidden;
    //console.log(this.Image)
    this.dialog.open(ZoneImageDialogComponent, {
      width: "600px",
      height: "auto"
    })

  }

  openzone() {
    this.dialog.open(DefectPopupComponent, {
      
      width: "600px",
      height: "auto"
    })

    
  }
  openzone1(item) {
    this.dialog.open(ZonePopComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })

  }

  /* imageSource(val) {
      if (val === null) {
        this.Image = "/assets/carrear.jpeg"
      }
      else {
        this.Image = val;
        // this.hidden = true;
        this.hidden = !this.hidden;
        //console.log(this.Image)
      }
    }*/
}