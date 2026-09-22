import { Component } from '@angular/core';
import { AddModuleAuditComponent } from './add-module-audit/add-module-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-audit-model',
  templateUrl: './audit-model.component.html',
  styleUrls: ['./audit-model.component.scss']
})
export class AuditModelComponent  {
canCreate: any;

filterToggle: any;
totalSize: any;
currentPage: any;
pageSize: any;
 myGroup!: FormGroup;
   modelss = [
    { ModelName: 'Toyota Fortuner 4x4' },
    { ModelName: 'Toyota Camry Hybrid' },
    { ModelName: 'Hyundai Creta SX' },
    { ModelName: 'Hyundai Verna Turbo' },
    { ModelName: 'Mahindra XUV700 AX7' },
    { ModelName: 'Tata Safari Dark Edition' },
    { ModelName: 'Tata Nexon EV Max' },
    { ModelName: 'Honda Elevate ZX' }
  ];

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      Keyword: new FormControl(''),
      ModelName: new FormControl(''),
      Status: new FormControl('')
    });
  }
     Confirmation(item: any) {
       let dialogRef = this.dialog.open(StatusConfirmationDialogComponent, {
         width: 'auto',
         data: { TractorStatusId: item.TractorStatusId, title: 'Change Status', content: 'Are you sure you want to Change the Status ?' }
       });

     }
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}

constructor(private router: Router, private dialog: MatDialog) { }


  tableList = [
    { name: 'Toyota Fortuner 4x4', code: 'CAR-FORT', status: 'Active', IsActive: true },
    { name: 'Toyota Camry Hybrid', code: 'CAR-CAM', status: 'Active', IsActive: true },
    { name: 'Hyundai Creta SX', code: 'CAR-CRE', status: 'Active', IsActive: true },
    { name: 'Hyundai Verna Turbo', code: 'CAR-VER', status: 'Active', IsActive: true },
    { name: 'Mahindra XUV700 AX7', code: 'CAR-XUV', status: 'Active', IsActive: true },
    { name: 'Tata Safari Dark Edition', code: 'CAR-SAF', status: 'Active', IsActive: true },
    { name: 'Tata Nexon EV Max', code: 'CAR-NEX', status: 'Active', IsActive: true },
    { name: 'Honda Elevate ZX', code: 'CAR-ELV', status: 'Active', IsActive: true }
  ];

  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddModuleAuditComponent, {
      data: id,
      height: 'auto',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((data: any) => {});
  }

}
