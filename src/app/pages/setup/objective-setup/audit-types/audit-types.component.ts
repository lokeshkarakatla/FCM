import { AddAuditDiolougeComponent } from './add-audit-diolouge/add-audit-diolouge.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-audit-types',
  templateUrl: './audit-types.component.html',
  styleUrls: ['./audit-types.component.scss']
})
export class AuditTypesComponent implements OnInit {

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
    this.dialog.open(AddAuditDiolougeComponent,{
      data:item,
      width:"600px",
      height:"auto"
    })
  }


}
