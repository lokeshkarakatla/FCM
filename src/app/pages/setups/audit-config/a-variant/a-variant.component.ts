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

constructor(private router: Router, private dialog: MatDialog) { }


  tableList =[
    { variantType: 'FVD++', modelName: 'Fortuner', status: 'Active', statusClass: 'active' },
    { variantType: 'Dodge Nitro', modelName: 'Nitro', status: 'Inactive', statusClass: 'inactive' },
    { variantType: 'Z06', modelName: 'Toyota Camry', status: 'Active', statusClass: 'active' },
    { variantType: 'Hybrid 2.5', modelName: 'Toyota Camry', status: 'Active', statusClass: 'active' },
    { variantType: 'Hyundai Grand i10 Nios', modelName: 'Hyundai', status: 'Active', statusClass: 'active' },
    { variantType: 'Ferrari 250 GTO', modelName: 'Ferrari', status: 'Active', statusClass: 'active' },
    { variantType: 'Maserati logo', modelName: 'Lamborghini', status: 'Active', statusClass: 'active' },
    { variantType: 'LX100', modelName: 'Lexus', status: 'Active', statusClass: 'active' },
    { variantType: 'XUV', modelName: 'Mahindra XUV700', status: 'Active', statusClass: 'active' },
    { variantType: 'vxi', modelName: 'Toyota Fortuner', status: 'Active', statusClass: 'active' },
    { variantType: 'zxi+', modelName: 'Hyundai Creta', status: 'Active', statusClass: 'active' }
  ]

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
