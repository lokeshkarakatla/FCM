import { AddPrtsDocumentComponent } from './add-prts-document/add-prts-document.component';
import { AddPrtsPillarComponent } from './add-prts-pillar/add-prts-pillar.component';
import { AddPrtsDescriptionComponent } from './add-prts-description/add-prts-description.component';
import { AddPrtsRolesComponent } from './add-prts-roles/add-prts-roles.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { StatusConfirmationDialogComponent } from '../../testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';

@Component({
  selector: 'app-prts-d-roles',
  templateUrl: './prts-d-roles.component.html',
  styleUrls: ['./prts-d-roles.component.scss']
})
export class PrtsDRolesComponent implements OnInit {

  dropdownList!: any[];
  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];
  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;
  constructor(public dialog: MatDialog,) {

  }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  values = []
  ngOnInit() {


    if (environment.mode == 1) {
      this.values = this.values1
    }
    else {
      return;
    }
  }

  options: Array<any> = [
    { RoleName: "Admin", RoleId: 1 },
    { RoleName: "Pavan", RoleId: 2 },
    { RoleName: "Surya", RoleId: 3 },
    { RoleName: "Satya", RoleId: 4 },
  ]


  filterToggle: boolean = false;

  values1 = [
    { stepcode: 'D1', stepname: "Process", checklist: '5', status: true },
    { stepcode: 'D2', stepname: "Tools", checklist: '5', status: true },
    { stepcode: 'D3a', stepname: "Production", checklist: '5', status: true },
    { stepcode: 'D3b', stepname: "SQM", checklist: '5', status: true },
    { stepcode: 'D4a', stepname: "Internal Quality Control", checklist: 'NA', status: true },
    { stepcode: 'D4b', stepname: "Supplier Part Quality", checklist: 'NA', status: true },
    { stepcode: 'D5', stepname: "Process ENG", checklist: 'NA', status: true },
    { stepcode: 'D6', stepname: "Product ENG", checklist: 'NA', status: true },
    { stepcode: 'D7', stepname: "CFT", checklist: 'NA', status: true },

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
    //this.alertService.createAlert('Successfully saved.', 1);
  }

  public addmodule(item:any) {
    this.dialog.open(AddPrtsRolesComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  public adddesc(item:any) {
    this.dialog.open(AddPrtsDescriptionComponent, {
      data: item,
      width: "600px",
      height: "auto"
    })
  }

  public addchecklist(item:any) {
    this.dialog.open(AddPrtsPillarComponent, {
      data: item,
      width: "580px",
      height: "auto"
    })
  }

  public adddocument(item:any) {
    this.dialog.open(AddPrtsDocumentComponent, {
      data: item,
      width: "620px",
      height: "auto"
    })
  }



  box() {
    // this.dialog.open(AddpillarComponent, {

    //   width: "600px",
    //   height: "auto"

    // })
  }
      deleteConfirmation() {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}
   Confirmation(item: any) {
       let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
         width: 'auto',
         data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
       });

     }
}
