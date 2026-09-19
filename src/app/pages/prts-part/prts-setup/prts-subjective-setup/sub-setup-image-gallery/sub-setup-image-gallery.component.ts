import { AddSubSetupDefectDialogComponent } from './add-sub-setup-defect-dialog/add-sub-setup-defect-dialog.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { AddSubSetupImageGalleryComponent } from './add-sub-setup-image-gallery/add-sub-setup-image-gallery.component';

@Component({
  selector: 'app-sub-setup-image-gallery',
  templateUrl: './sub-setup-image-gallery.component.html',
  styleUrls: ['./sub-setup-image-gallery.component.scss']
})
export class SubSetupImageGalleryComponent implements OnInit {

  filterToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }
  hidden = false;

  Image: any = "/assets/door10x10.png";

  values1 = [
    {
      Audit: 'Product Quality Audit', title: 'Back Rear Grill', checkpoints: '3', zone: " 1",
    },
    {
      Audit: 'Product Quality Audit', title: 'Front right head lamp', checkpoints: '7', zone: " 3",
    },
    { Audit: 'Product Quality Audit', title: 'Back Rear tail lamp', checkpoints: '2', zone: " 2", },
    { Audit: 'Product Quality Audit', title: 'Front Bumper section', checkpoints: '4', zone: " 1", },
    { Audit: 'Product Quality Audit', title: 'Back Rear tail lamp', checkpoints: '2', zone: " 3", },
    { Audit: 'Product Quality Audit', title: 'Front Bumper section', checkpoints: '4', zone: " 2", },

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
    this.dialog.open(AddSubSetupImageGalleryComponent, {
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
    // this.Image = val;
    // this.hidden = true;
    // // this.hidden = !this.hidden;
    // //console.log(this.Image)
    // this.dialog.open(ZoneImageDialogComponent, {
    //   width: "600px",
    //   height: "auto"
    // })

  }

  openzone() {
    this.dialog.open(AddSubSetupDefectDialogComponent, {

      width: "600px",
      height: "auto"
    })


  }
  openzone1(item) {
    // this.dialog.open(ZonePopComponent, {
    //   data: item,
    //   width: "600px",
    //   height: "auto"
    // })

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
