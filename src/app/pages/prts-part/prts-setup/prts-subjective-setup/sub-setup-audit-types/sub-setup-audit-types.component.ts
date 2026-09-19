import { AddSubSetupAuditTypesComponent } from './add-sub-setup-audit-types/add-sub-setup-audit-types.component';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sub-setup-audit-types',
  templateUrl: './sub-setup-audit-types.component.html',
  styleUrls: ['./sub-setup-audit-types.component.scss']
})
export class SubSetupAuditTypesComponent implements OnInit {

 
  gridCmp: any;
  Status = [{ name: 'Active', value: true }, { name: "Inactive", value: false }];

  constructor(public dialog: MatDialog) { }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';

  values=[];
  ngOnInit() {
    if (environment.mode == 1){
      this.values= this.values1
    }
    else {
      return;
    }
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values1 = [
    {modulename:"PQA",status:true},
    {modulename:"Body Audit",status:true},
    {modulename:"Paint Audit",status:true},
    {modulename:"RQA",status:true},
    {modulename:"Process Audit",status:true}

  ]

  saveStatus() {
   // this.alertService.createAlert('Successfully saved.', 1);
  }

  public addaudit(item){
    this.dialog.open(AddSubSetupAuditTypesComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }
}
