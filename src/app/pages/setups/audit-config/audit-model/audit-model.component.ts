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
    { ModelName: 'Fortuner' },
    { ModelName: 'Toyota LandCruiser' },
    { ModelName: 'Defender 310' },
    { ModelName: 'Corvette' },
    { ModelName: 'Lexus' },
    { ModelName: 'Mahindra XUV700' }
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


  tableList =[
    { name: 'Fortuner', code: ')', status: 'Active' },
    { name: 'Toyota LandCruiser', code: '+', status: 'Active' },
    { name: 'Toyota Forturner', code: '!', status: 'Active' },
    { name: 'Defender 310', code: '#', status: 'Active' },
    { name: 'Corvette', code: 'w', status: 'Active' },
    { name: 'Toyota Camry', code: 'b', status: 'Active' },
    { name: 'Hyundai', code: 'h', status: 'Active' },
    { name: 'Ferrari', code: 'u', status: 'Active' },
    { name: 'Lamborghini', code: 's', status: 'Active' },
    { name: 'Lexus', code: 'q', status: 'Active' },
    { name: 'Mahindra XUV700', code: 'p', status: 'Active' },
  ]

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
