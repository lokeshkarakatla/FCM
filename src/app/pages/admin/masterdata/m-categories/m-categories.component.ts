import { Component, OnInit } from '@angular/core';
// import { AddCategoryComponent } from './add-category/add-category.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCategoryComponent } from 'src/app/pages/setup/subjective-setup/category-master/add-category/add-category.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-categories',
  templateUrl: './m-categories.component.html',
  styleUrls: ['./m-categories.component.scss']
})
export class MCategoriesComponent  {

  canCreate: any;

      filterToggle: any;
      totalSize: any;
      currentPage: any;
      pageSize: any;


      constructor(private router: Router, private dialog: MatDialog) { }


       tableList = [
         { stageName: 'ADAS, Radar & Safety Vision Sensors', stageCode: 'CAT-ADAS', status: 'Active' },
         { stageName: 'Engine, Turbocharger & Fuel Injection', stageCode: 'CAT-ENG', status: 'Active' },
         { stageName: 'Automatic Transmission & Dual-Clutch (DCT)', stageCode: 'CAT-TRN', status: 'Active' },
         { stageName: 'High Voltage Battery & BMS (EV)', stageCode: 'CAT-EVB', status: 'Active' },
         { stageName: 'Infotainment, Digital Cluster & Telematics', stageCode: 'CAT-INF', status: 'Active' },
         { stageName: 'HVAC, Dual-Zone AC & Compressor', stageCode: 'CAT-HVAC', status: 'Active' },
         { stageName: 'Suspension, Steering & ABS / ESP', stageCode: 'CAT-CHS', status: 'Active' },
         { stageName: 'Body Panel Fitment, Paint & NVH', stageCode: 'CAT-NVH', status: 'Active' }
       ];

      // Function to get status text
      getStatusText(status: boolean): string {
        return status ? 'Active' : 'Inactive';
      }


      public addmodule(id: any) {
        console.log('jkhksbdjk');
        let dialogRef = this.dialog.open(AddCategoryComponent, {
          data: id,
          height: 'auto',
          width: '600px',
        });
        dialogRef.afterClosed().subscribe((data: any) => { });
      }

        Confirmation() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: 'auto',
      data: { component: null, title: 'Change Status', content: 'Are you sure you want to Change the Status ?', isConfirmation: true }
    });
    dialogRef.afterClosed().subscribe(
      (data: any) => {
        if (data) {
        }
      }
    );
  }


}
