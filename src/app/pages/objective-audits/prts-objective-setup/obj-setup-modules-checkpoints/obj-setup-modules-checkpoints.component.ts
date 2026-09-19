import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ObjSetupAudittypessComponent } from './obj-setup-audittypess/obj-setup-audittypess.component';
import { ImageGallaryZoneDialogComponent } from 'src/app/pages/subjective-audits/prts-subjective-setup/sub-setup-image-gallery/image-gallary-zone-dialog/image-gallary-zone-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ModelspopComponent } from 'src/app/pages/subjective-audits/prts-subjective-setup/sub-setup-module-master/section-pop/modelspop/modelspop.component';
import { ObjImageDialogComponent } from './obj-image-dialog/obj-image-dialog.component';

@Component({
  selector: 'app-obj-setup-modules-checkpoints',
  templateUrl: './obj-setup-modules-checkpoints.component.html',
  styleUrls: ['./obj-setup-modules-checkpoints.component.scss']
})
export class ObjSetupModulesCheckpointsComponent implements OnInit {

  filterToggle = false;
  gridToggle = false;
  Status = [
    { name: 'Active', value: true },
    { name: "Inactive", value: false }
  ];

  values: any[] = [];
  hidden = false;
  url = "/assets/carrear.jpeg";
  Image: any = '/assets/car.png';
values1 = [
  {
    audit: '200',
    module: 'Right Fender',
    checkpoint: '50',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Right_Fender.png",
    model: 'Fortuner',
    audittype: '4/9',
    highlightedCells: [
      { col: 2, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 5, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 7, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 3, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 2, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 3, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 6, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "2" },
    ],
    checkpoints :'7'
  },
  {
    audit: '961',
    module: 'Right Front Door',
    checkpoint: '35',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Right_Front_Door.png",
    model: 'Toyota',
    audittype: '6/9',
    highlightedCells: [
  { col: 3, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 6, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 7, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 5, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 7, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "2" },
    ],
       checkpoints :'6'
  },
  {
    audit: '10',
    module: 'Right Rear Door',
    checkpoint: '45',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Right_Rear_Door.png",
    model: 'Toyota Fortuner',
    audittype: '5/9',
    highlightedCells: [
      { col: 3, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 6, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      // { col: 8, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 6, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 7, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 6, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      // { col: 5, row: 8, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      // { col: 6, row: 8, color: "rgba(255, 205, 205, 0.64)", value: "1" },
    ],
       checkpoints :'6'
  },
  {
    audit: '50',
    module: 'Rear',
    checkpoint: '40',
    min: '10x10',
    max: '10',
    image: "/assets/Swift/Back.png",
    model: 'Hyundai',
    audittype: '4/9',
    highlightedCells: [
        { col: 4, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 6, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 2, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 4, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 6, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 8, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 2, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "2" },
    ],
       checkpoints :'7'
  },
  {
    audit: '290',
    module: 'Left Rear Door',
    checkpoint: '27',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Left_Rear_Door.png",
    model: 'Ferrari',
    audittype: '7/9',
    highlightedCells: [
     { col: 6, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 6, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 7, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 3, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 6, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 5, row: 8, color: "rgba(255, 205, 205, 0.64)", value: "1" },
    ],
       checkpoints :'7'
  },
  {
    audit: '982',
    module: 'Left Front Door',
    checkpoint: '33',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Left_Front_Door.png",
    model: 'Toyota',
    audittype: '6/9',
    highlightedCells: [
    { col: 6, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 8, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 7, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 3, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 4, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 5, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 7, row: 7, color: "rgba(255, 205, 205, 0.64)", value: "3" },
    ],
       checkpoints :'7'
  },
  {
    audit: '781',
    module: 'Left Fender',
    checkpoint: '38',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Left_Fender.png",
    model: 'BMW',
    audittype: '5/9',
    highlightedCells: [
     { col: 11, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 8, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 6, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 10, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 7, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 9, row: 1, color: "rgba(255, 205, 205, 0.64)", value: "2" },
    ],
       checkpoints :'6'
  },
  {
    audit: '108',
    module: 'Roof',
    checkpoint: '37',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Roof.png",
    model: 'Ruby',
    audittype: '4/9',
    highlightedCells: [
         { col: 5, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 9, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 10, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 6, row: 3, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 6, row: 6, color: "rgba(255, 205, 205, 0.64)", value: "1" },
    ]
    ,   checkpoints :'5'
  },
  {
    audit: '851',
    module: 'Bonnet',
    checkpoint: '39',
    min: '10x10',
    max: '10',
    status: true,
    image: "/assets/Swift/Bonnet.png",
    model: 'Ruby',
    audittype: '5/9',
    highlightedCells: [
       { col: 7, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "1" },
      { col: 4, row: 5, color: "rgba(255, 205, 205, 0.64)", value: "3" },
      { col: 3, row: 2, color: "rgba(255, 205, 205, 0.64)", value: "2" },
      { col: 3, row: 4, color: "rgba(255, 205, 205, 0.64)", value: "1" },

    ]
    ,   checkpoints :'4'
  }
];

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit() {
    if (environment.mode == 1) {
      this.values = this.values1;
    } else {
      return;
    }
  }

  modelspop() {
    this.dialog.open(ModelspopComponent, {
      height: '300px',
      width: '700px'
    });
  }

  opendashboard() {
    window.open('/#/parameter-dashboard/issuelog-par'); 
  }

  addcheckpoint(item: any) {
    const selectedImage = item && item.image ? item.image : '/assets/car10x10.png';
  
    // Save image and ENABLE the overview tab
    sessionStorage.setItem('currentCheckpointImage', selectedImage);
    sessionStorage.setItem('disableOverview', 'false');
  
    this.router.navigate(['/app/setup/subjective/check']);
  }
  
opencheckpoint(item: any) {
    const selectedImage = item && item.image ? item.image : '/assets/car10x10.png';
    const cellsToHighlight = item && item.highlightedCells ? item.highlightedCells : [];
    
    // Grab the module name to pass to the next screen
    const selectedModule = item && item.module ? item.module : ''; 

    // Save image, DISABLE the overview tab, save highlighted cells, and save module ID
    sessionStorage.setItem('currentCheckpointImage', selectedImage);
    sessionStorage.setItem('disableOverview', 'true');
    sessionStorage.setItem('highlightedCells', JSON.stringify(cellsToHighlight));
    sessionStorage.setItem('selectedModule', selectedModule); // NEW: Save the module name

    this.router.navigate(['/app/parameterboard']);
  }

  saveStatus() {
    // this.alertService.createAlert('Successfully saved.', 1);
  }

  imageSource(val: any) {
    this.dialog.open(ObjImageDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        image: val
      }
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

  openUploadCSV() {}

  downloadSampleExcel() {}

  imageSource1(val: any) {
    this.Image = val;
    this.hidden = true;
    this.dialog.open(ImageGallaryZoneDialogComponent, {
      width: "600px",
      height: "auto"
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