import { Component, OnInit } from '@angular/core';
import { AddTransmissionAuditComponent } from './add-transmission-audit/add-transmission-audit.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StatusConfirmationDialogComponent } from 'src/app/pages/testing/testing-projects/add-projects/status-confirmation-dialog/status-confirmation-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-a-transmission',
  templateUrl: './a-transmission.component.html',
  styleUrls: ['./a-transmission.component.scss']
})
export class ATransmissionComponent {

 canCreate: any;

  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;
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
      { transmissionName: '6-Speed Torque Converter Automatic with Sequential Shift', transmissionCode: 'TRN-6AT', model: 'Toyota Fortuner 4x4', status: 'Active', IsActive: true },
      { transmissionName: 'Electronic Continuously Variable Transmission (e-CVT)', transmissionCode: 'TRN-ECVT', model: 'Toyota Camry Hybrid', status: 'Active', IsActive: true },
      { transmissionName: '7-Speed Dual-Clutch Transmission (7-DCT)', transmissionCode: 'TRN-7DCT', model: 'Hyundai Creta SX', status: 'Active', IsActive: true },
      { transmissionName: '6-Speed Intelligent Manual Transmission (6-iMT)', transmissionCode: 'TRN-6MT', model: 'Hyundai Verna Turbo', status: 'Active', IsActive: true },
      { transmissionName: '6-Speed Aisin Torque Converter with AWD Lock', transmissionCode: 'TRN-AWD6', model: 'Mahindra XUV700 AX7', status: 'Active', IsActive: true },
      { transmissionName: '6-Speed Hydra-Matic Automatic Transmission', transmissionCode: 'TRN-6HAT', model: 'Tata Safari Dark Edition', status: 'Active', IsActive: true },
      { transmissionName: 'Single-Speed Direct Reduction EV Transmission', transmissionCode: 'TRN-EV1S', model: 'Tata Nexon EV Max', status: 'Active', IsActive: true },
      { transmissionName: 'Advanced Continuous Variable Transmission (CVT)', transmissionCode: 'TRN-CVT', model: 'Honda Elevate ZX', status: 'Active', IsActive: true }
    ];

   // Function to get status text
   getStatusText(status: boolean): string {
     return status ? 'Active' : 'Inactive';
   }


    public addmodule(id: any) {
      console.log('jkhksbdjk');
      let dialogRef = this.dialog.open(AddTransmissionAuditComponent, {
        data: id,
        height: 'auto',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe((data: any) => {});
    }



}
