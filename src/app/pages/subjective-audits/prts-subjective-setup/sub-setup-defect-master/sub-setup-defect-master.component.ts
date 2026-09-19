import { DefectMasterIssueDialogComponent } from './defect-master-issue-dialog/defect-master-issue-dialog.component';
import { AddSubSetupDefectMasterComponent } from './add-sub-setup-defect-master/add-sub-setup-defect-master.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ModelspopComponent } from '../sub-setup-module-master/section-pop/modelspop/modelspop.component';
import { ModulePopComponent } from './module-pop/module-pop.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ObjSetupAudittypessComponent } from 'src/app/pages/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints/obj-setup-audittypess/obj-setup-audittypess.component';

@Component({
  selector: 'app-sub-setup-defect-master',
  templateUrl: './sub-setup-defect-master.component.html',
  styleUrls: ['./sub-setup-defect-master.component.scss']
})
export class SubSetupDefectMasterComponent implements OnInit {

  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  values = []
  hidden = false;
  url = '/assets/zones.png'
  Sno: any;

  ngOnInit() {

    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle: boolean = false;

  Image: any = '/assets/zones.png';


  values1 = [
    { sqno: 1, Audit: 'Product Quality Audit', modulename: "BSO", functioname: "Aesthetics", defectname: "Thin Paint", zone: " 1", issue: "4" },
    { sqno: 2, Audit: 'Product Quality Audit', status: true, modulename: "Door", functioname: "Mutilation", defectname: "Tool / Scuff Marks", zone: " 3", issue: " 2" },
    { sqno: 3, Audit: 'Product Quality Audit', status: true, modulename: "Rear bumper", functioname: "Mutilation", defectname: "Scratch", zone: " 2", issue: " 1" },
    { sqno: 4, Audit: 'Product Quality Audit', status: true, modulename: "Fuel Flap", functioname: "Aesthetics", defectname: "Sink / flow marks", zone: " 1", issue: "3" },
    // {status:true,modulename:"Upper trim",functioname:"Mutilation",defectname:"Contamination"},
    // {status:true,modulename:"Tailgate",functioname:"Aesthetics",defectname:"Uneven/Excess Gap/ Flushness"},
    // {status:true,modulename:"Central Console",functioname:"Mutilation",defectname:"Improper assembly"},
    // {status:true,modulename:"C pillar",functioname:"Aesthetics",defectname:"Dent/ Ding / Bump"},
    // {status:true,modulename:"REAR SEAT",functioname:"Mutilation",defectname:"Color / Shade Mismatch"},
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
 Modulecount() {
      this.dialog.open(ModulePopComponent, {
        height: '300px',
        width: '600px'
      });
    }
  public adddefect(item) {
    this.dialog.open(AddSubSetupDefectMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  imageSource(val) {
    this.Image = val;
    this.hidden = true;
    this.Sno = val;

  }

  openzone(item) {
    // this.dialog.open(ZonePopComponent, {
    //   data: item,
    //   width: "600px",
    //   height: "auto"
    // })

  }

  openissue(item) {
    this.dialog.open(DefectMasterIssueDialogComponent, {
      data: item,
      width: "650px",
      height: "auto"
    })
  }
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
  openAuditTypes() {
        let dialogRef = this.dialog.open(ObjSetupAudittypessComponent, {
          data: null,
          height: 'auto',
          width: '600px'
        });
  
      }

}
