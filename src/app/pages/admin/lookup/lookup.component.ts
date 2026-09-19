import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MenuService } from 'src/app/theme/components/menu/menu.service';
import { environment } from 'src/environments/environment';
import { admindata } from '../admindata';
import { AddLookupDialogComponent } from './add-lookup-dialog/add-lookup-dialog.component';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {


  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];





  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change vcStatus.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;

  public searchText: string;
  public page: any;

  constructor(
    //public appSettings: AppSettings,
    public dialog: MatDialog,
    //private alertService: AlertService
  ) {

  }


  tableList = []
  ngOnInit() {
    if (environment.mode == 1) {
      //this.values = PartsData.getd1();
      this.tableList = admindata.lookUp();
    }
    else {

    }
  }




  public addlookup(applicant) {
    let dialogRef = this.dialog.open(AddLookupDialogComponent, {
      data: applicant,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  deleteUser() {
    // this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
    //this.alertService.createAlert('Successfully saved.', 1);
  }

}
