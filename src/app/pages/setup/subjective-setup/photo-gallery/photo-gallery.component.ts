import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AddImageComponent } from './add-image/add-image.component';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

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

  Image: any = '/assets/carrear.jpeg';

  values1 = [
    { title: 'Back Rear Grill', image: "/assets/part1.png", checkpoints: '3', },
    { title: 'Front right head lamp', image: "/assets/part2.png", checkpoints: '7', },
    { title: 'Back Rear tail lamp', image: "/assets/part3.png", checkpoints: '2', },
    { title: 'Front Bumper section', image: "/assets/part5.png", checkpoints: '4', },

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
    this.dialog.open(AddImageComponent, {
      data: item,
      width: "600px",
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
  }


}
