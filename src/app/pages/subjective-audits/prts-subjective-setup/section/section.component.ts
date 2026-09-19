// import { AddSectionComponent } from './add-section/add-section.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DragulaService } from 'ng2-dragula';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { AddSubSetupModuleMasterComponent } from '../sub-setup-module-master/add-sub-setup-module-master/add-sub-setup-module-master.component';
import { AddsecComponent } from 'src/app/addsec/addsec.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ObjSetupAudittypessComponent } from 'src/app/pages/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints/obj-setup-audittypess/obj-setup-audittypess.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  /* The above code is for the table. */

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle: boolean = false;
  gridCmp: any;
  supplyDetails = [];
  tableList = [];
  Status = [{ name: 'Active', value: true },
  { name: "Inactive", value: false }];
  type: any;
  navParameter: any;

  constructor(
    public dialog: MatDialog,
    private dragulaService: DragulaService,
    private _activeRoute: ActivatedRoute,) {
    //Drag And Drop
    this.dragulaService.destroy("MONITORSTEPS");
    this.dragulaService.createGroup("MONITORSTEPS", {
      revertOnSpill: true,
    });
    this.dragulaService.dropModel("MONITORSTEPS").subscribe((args) => {
    });
  }

  ngOnInit() {
    if (environment.mode == 1) {
      this.supplyDetails = this.supplyDetails1
    }
    else {
      return;
    }
  }

  supplyDetails1 = [
    { Audit: 'Product Quality Audit', section: "Static", status: true },
    { Audit: 'Product Quality Audit', section: "Dynamic" },
    { Audit: ' Body Audit', section: "Electrical", status: true },
    { Audit: 'Paint Audit', section: "Chasis & U B", status: true },
    { Audit: 'Product Quality Audit', section: "Rain Test", status: true },

  ]
  statusOptions = [
    { value: 1, name: 'Prepared Quote', colorCode: '#00ff0040' },
    { value: 2, name: 'PM Quote Review', colorCode: '#C0C0C0' },
    { value: 3, name: 'Quote Send', colorCode: '#87CEFA' },
    { value: 4, name: 'Awarded', colorCode: '#FFA50069' },
    { value: 5, name: 'Rejected', colorCode: '#FFFF00' },
    { value: 6, name: 'Document Taker Only', colorCode: '#FF00FF' },
  ]
  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  public addmodule(item) {
    this.dialog.open(AddsecComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
  public addsection(item) {
    this.dialog.open(AddSubSetupModuleMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
      Confirmation(item: any) {
    let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
      width: 'auto',
      data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
    });
  }


     openAuditTypes() {
        let dialogRef = this.dialog.open(ObjSetupAudittypessComponent, {
          data: null,
          height: 'auto',
          width: '600px'
        });
  
      }
}
