import { AddSubSetupDefectDialogComponent } from './add-sub-setup-defect-dialog/add-sub-setup-defect-dialog.component';
import { AddSubSetupImageGalleryComponent } from './add-sub-setup-image-gallery/add-sub-setup-image-gallery.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ImageGallaryZoneDialogComponent } from './image-gallary-zone-dialog/image-gallary-zone-dialog.component';
import { ModelspopComponent } from '../sub-setup-module-master/section-pop/modelspop/modelspop.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-sub-setup-image-gallery',
  templateUrl: './sub-setup-image-gallery.component.html',
  styleUrls: ['./sub-setup-image-gallery.component.scss']
})
export class SubSetupImageGalleryComponent implements OnInit {

  filterToggle:boolean = false;
  gridToggle = false;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  constructor(public dialog: MatDialog,) { }

  hidden = false;

  values = []
  url: any[];
  Image: any[];

  values1 = [
    { audit: '29', modulename: 'BSO', Audit: 'Product Quality Audit', title: 'Back Rear Grill', checkpoints: '3', zone: " 1", },
    { audit: '45', modulename: 'Door', Audit: 'Product Quality Audit', title: 'Front right head lamp', checkpoints: '7', zone: " 3", },
    { audit: '700', modulename: 'Fuel Flap', Audit: 'Product Quality Audit', title: 'Back Rear tail lamp', checkpoints: '2', zone: " 2", },
    { audit: '390', modulename: 'Upper trim', Audit: 'Product Quality Audit', title: 'Front Bumper section', checkpoints: '4', zone: " 1", },
    { audit: '200', modulename: 'BSO', Audit: 'Product Quality Audit', title: 'Back Rear tail lamp', checkpoints: '2', zone: " 3", },
    { audit: '291', modulename: 'Rear bumper', Audit: 'Product Quality Audit', title: 'Front Bumper section', checkpoints: '4', zone: " 2", },

  ]
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

   Modulecount() {
      this.dialog.open(ModelspopComponent, {
        height: '300px',
        width: '600px'
      });
    }

  imageSource1(val) {
    this.Image = val;
    this.hidden = true;
    this.dialog.open(ImageGallaryZoneDialogComponent, {
      width: "600px",
      height: "auto"
    })

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
    deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}

}
