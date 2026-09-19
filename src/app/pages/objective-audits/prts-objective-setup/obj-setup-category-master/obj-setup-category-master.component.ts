import { AddObjSetupCategoryMasterComponent } from './add-obj-setup-category-master/add-obj-setup-category-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { environment } from 'src/environments/environment';
import { ObjSetupAudittypessComponent } from '../obj-setup-modules-checkpoints/obj-setup-audittypess/obj-setup-audittypess.component';

@Component({
  selector: 'app-obj-setup-category-master',
  templateUrl: './obj-setup-category-master.component.html',
  styleUrls: ['./obj-setup-category-master.component.scss']
})
export class ObjSetupCategoryMasterComponent implements OnInit {

  filterToggle = false;
  
  constructor(public dialog: MatDialog,) { }

  values = []
  hidden = false;
  url = "/assets/carrear.jpeg"

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  Status = [
  { name: 'Body Leak Test', value: true },
  { name: 'Torque Audit', value: false },
  { name: 'D - Rating', value: false },
  { name: 'C - Rating', value: false },
 ];



  values1 = [
    { category: 'Exterior', status: true, Audit: '4/8' },
    { category: 'Interior', status: true, Audit: 'C - Rating' },
    { category: 'Matching', status: true, Audit: 'D - Rating' },
    { category: 'Sealing', status: true, Audit: 'D - Rating' },
  ]

       deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
      Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }

  addcategory(item) {
    this.dialog.open(AddObjSetupCategoryMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  openimg() {

  }

  imageSource1() {
    window.open("/assets/carrear.jpeg");
  }

  imageSource() {
    this.hidden = !this.hidden;
  }

   openAuditTypes() {
        let dialogRef = this.dialog.open(ObjSetupAudittypessComponent, {
          data: null,
          height: 'auto',
          width: '600px'
        });
  
      }

}
