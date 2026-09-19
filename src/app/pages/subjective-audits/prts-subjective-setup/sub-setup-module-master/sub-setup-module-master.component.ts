import { SectionPopComponent } from './section-pop/section-pop.component';
import { AddSubSetupModuleMasterComponent } from './add-sub-setup-module-master/add-sub-setup-module-master.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ModelspopComponent } from './section-pop/modelspop/modelspop.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ObjSetupAudittypessComponent } from 'src/app/pages/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints/obj-setup-audittypess/obj-setup-audittypess.component';
import { ObjImageDialogComponent } from 'src/app/pages/objective-audits/prts-objective-setup/obj-setup-modules-checkpoints/obj-image-dialog/obj-image-dialog.component';
import { SetupImgPopComponent } from './setup-img-pop/setup-img-pop.component';

@Component({
  selector: 'app-sub-setup-module-master',
  templateUrl: './sub-setup-module-master.component.html',
  styleUrls: ['./sub-setup-module-master.component.scss']
})
export class SubSetupModuleMasterComponent implements OnInit {

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle: boolean = false;
  gridCmp: any;
  tableList = [];
  values = [];
  Status = [{ name: 'Active', value: true },
  { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

values1 = [
    { 
      section: '2', Audit: 'Product Quality Audit', modulename: "Right Fender", status: true, audittype: '4/9', 
      image: {
        title: 'Right Fender', src: '/assets/Swift/Right_Fender.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 2, row: 2, color: 'rgba(255, 205, 205, 0.64)', value: '2' },
          { col: 5, row: 2, color: 'rgba(255, 205, 205, 0.64)', value: '12' },
          { col: 7, row: 2, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 3, row: 3, color: 'rgba(255, 205, 205, 0.64)', value: '1' },
          { col: 2, row: 4, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 3, row: 1, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 6, row: 3, color: 'rgba(127, 255, 127, 0.62)', value: '12' }
        ]
      }
    },
    { 
      section: '4', Audit: 'Product Quality Audit', modulename: "Right Front Door", audittype: '5/9', 
      image: {
        title: 'Right Front Door', src: '/assets/Swift/Right_Front_Door.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 1, row: 1, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 3, row: 1, color: 'rgba(255, 205, 205, 0.64)', value: '6' },
          { col: 6, row: 2, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 1, row: 5, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 7, row: 5, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 3, row: 6, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 1, row: 7, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 5, row: 7, color: 'rgba(255, 205, 205, 0.64)', value: '12' },
          { col: 7, row: 7, color: 'rgba(127, 255, 127, 0.62)', value: '12' }
        ]
      }
    },
    { 
      section: '3', Audit: 'Product Quality Audit', modulename: "Right Rear Door", status: true, audittype: '5/9', 
      image: {
        title: 'Right Rear Door', src: '/assets/Swift/Right_Rear_Door.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 3, row: 1, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 6, row: 1, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 8, row: 3, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 2, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '8' }, 
          { col: 6, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 7, row: 4, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 3, row: 6, color: 'rgba(255, 205, 205, 0.64)', value: '7' },
          { col: 6, row: 7, color: 'rgba(255, 205, 205, 0.64)', value: '12' },
          { col: 5, row: 8, color: 'rgba(255, 205, 205, 0.64)', value: '6' },
          { col: 6, row: 8, color: 'rgba(127, 255, 127, 0.62)', value: '12' }
        ]
      }
    },
    { 
      section: '1', Audit: 'Product Quality Audit', modulename: "Rear", status: true, audittype: '4/9', 
      image: {
        title: 'Rear', src: '/assets/Swift/Back.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 6, row: 4, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 2, row: 5, color: 'rgba(255, 205, 205, 0.64)', value: '9' },
          { col: 4, row: 6, color: 'rgba(255, 205, 205, 0.64)', value: '2' },
          { col: 6, row: 6, color: 'rgba(255, 205, 205, 0.64)', value: '7' },
          { col: 8, row: 5, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 2, row: 6, color: 'rgba(127, 255, 127, 0.62)', value: '12' }
        ]
      }
    },
    { 
      section: '2', Audit: 'Product Quality Audit', modulename: "Left Rear Door", audittype: '6/9', 
      image: {
        title: 'Left Rear Door', src: '/assets/Swift/Left_Rear_Door.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 3, row: 1, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 6, row: 1, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 2, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '8' },
          { col: 6, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 7, row: 4, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 3, row: 5, color: 'rgba(127, 255, 127, 0.62)', value: '9' },
          { col: 3, row: 6, color: 'rgba(255, 205, 205, 0.64)', value: '7' },
          { col: 6, row: 7, color: 'rgba(255, 205, 205, 0.64)', value: '12' },
          { col: 5, row: 8, color: 'rgba(255, 205, 205, 0.64)', value: '6' }
        ]
      }
    },
    { 
      section: '4', Audit: 'Product Quality Audit', modulename: "Left Front Door", audittype: '5/9', 
      image: {
        title: 'Left Front Door', src: '/assets/Swift/Left_Front_Door.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 6, row: 1, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 8, row: 1, color: 'rgba(255, 205, 205, 0.64)', value: '1' },
          { col: 7, row: 5, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 3, row: 6, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 4, row: 7, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 5, row: 7, color: 'rgba(255, 205, 205, 0.64)', value: '5' },
          { col: 6, row: 8, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 7, row: 7, color: 'rgba(127, 255, 127, 0.62)', value: '12' }
        ]
      }
    },
    { 
      section: '3', Audit: 'Product Quality Audit', modulename: "Left Fender", status: true, audittype: '5/9', 
      image: {
        title: 'Left Fender', src: '/assets/Swift/Left_Fender.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 11, row: 2, color: 'rgba(255, 205, 205, 0.64)', value: '2' },
          { col: 8, row: 2, color: 'rgba(255, 205, 205, 0.64)', value: '12' },
          { col: 6, row: 2, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 10, row: 3, color: 'rgba(255, 205, 205, 0.64)', value: '1' },
          { col: 7, row: 3, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 11, row: 4, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 5, row: 3, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 9, row: 1, color: 'rgba(127, 255, 127, 0.62)', value: '12' }
        ]
      }
    },
    { 
      section: '1', Audit: 'Product Quality Audit', modulename: "Roof", status: true , audittype: '4/9', 
      image: {
        title: 'Roof', src: '/assets/Swift/Roof.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 5, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '2' },
          { col: 9, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '7' },
          { col: 10, row: 5, color: 'rgba(255, 205, 205, 0.64)', value: '3' },
          { col: 11, row: 2, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 6, row: 3, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 6, row: 6, color: 'rgba(127, 255, 127, 0.62)', value: '12' }
        ]
      }
    },
    { 
      section: '2', Audit: 'Product Quality Audit', modulename: "Bonnet", audittype: '6/9', 
      image: {
        title: 'Bonnet', src: '/assets/Swift/Bonnet.png', height: '310px', width: '480px',
        highlightedCells: [
          { col: 7, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '1' },
          { col: 4, row: 5, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 9, row: 5, color: 'rgba(127, 255, 127, 0.62)', value: '12' },
          { col: 10, row: 4, color: 'rgba(255, 205, 205, 0.64)', value: '4' }
        ]
      }
    }
  ];
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
    this.dialog.open(AddSubSetupModuleMasterComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }
  sectionpop() {
    this.dialog.open(SectionPopComponent, {
      height: 'auto',
      width: '400px'
    });
  }
    modelspop() {
    this.dialog.open(ModelspopComponent, {
      height: '300px',
      width: '700px'
    });
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

      imageSource(val: string) {
        this.dialog.open(SetupImgPopComponent, {
          width: 'auto',
          height: 'auto',
          data: {
            image: val
          }
        });
      }
}
