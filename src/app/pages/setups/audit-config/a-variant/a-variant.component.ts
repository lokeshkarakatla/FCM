import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddVariantAuditComponent } from './add-variant-audit/add-variant-audit.component';
import { FormGroup, FormControl } from '@angular/forms';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-variant',
  templateUrl: './a-variant.component.html',
  styleUrls: ['./a-variant.component.scss']
})
export class AVariantComponent  {

canCreate: any;
      deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });

}

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

constructor(private router: Router, private dialog: MatDialog) { }


  tableList = [
    { variantType: 'ZX 4x4 AT (2.8L Diesel)', modelName: 'Toyota Fortuner 4x4', status: 'Active', IsActive: true, statusClass: 'active' },
    { variantType: 'Dynamic Hybrid e-CVT (2.5L)', modelName: 'Toyota Camry Hybrid', status: 'Active', IsActive: true, statusClass: 'active' },
    { variantType: 'SX(O) Turbo 7-DCT (1.5L TGDi)', modelName: 'Hyundai Creta SX', status: 'Active', IsActive: true, statusClass: 'active' },
    { variantType: 'SX(O) Turbo 6MT (160 PS)', modelName: 'Hyundai Verna Turbo', status: 'Active', IsActive: true, statusClass: 'active' },
    { variantType: 'AX7 Luxury Pack AWD (Diesel AT)', modelName: 'Mahindra XUV700 AX7', status: 'Active', IsActive: true, statusClass: 'active' },
    { variantType: 'Accomplished+ 6S Dark (Diesel AT)', modelName: 'Tata Safari Dark Edition', status: 'Active', IsActive: true, statusClass: 'active' },
    { variantType: 'Empowered+ LR (40.5 kWh EV)', modelName: 'Tata Nexon EV Max', status: 'Active', IsActive: true, statusClass: 'active' },
    { variantType: 'ZX CVT with ADAS Sensing Suite', modelName: 'Honda Elevate ZX', status: 'Active', IsActive: true, statusClass: 'active' }
  ];

  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddVariantAuditComponent, {
      data: id,
      height: 'auto',
      width: '700px',
    });
    dialogRef.afterClosed().subscribe((data: any) => {});
  }


}
