import { Component, OnInit } from '@angular/core';
import { AddCountrysComponent } from './add-countrys/add-countrys.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-country',
  templateUrl: './m-country.component.html',
  styleUrls: ['./m-country.component.scss']
})
export class MCountryComponent   {

  canCreate: any;

        filterToggle: any;
        totalSize: any;
        currentPage: any;
        pageSize: any;


        constructor(private router: Router, private dialog: MatDialog) { }


        tableList = [
          { stageName: 'Thailand', continent: 'Asia', stageCode: 'THA', status: 'Active', IsActive: true },
          { stageName: 'Israel', continent: 'Asia', stageCode: 'ISR', status: 'Active', IsActive: true },
          { stageName: 'Nepal', continent: 'Asia', stageCode: 'NPL', status: 'Active', IsActive: true },
          { stageName: 'Turkey', continent: 'Europe', stageCode: 'TUR', status: 'Active', IsActive: true },
          { stageName: 'Germany', continent: 'Europe', stageCode: 'DEU', status: 'Active', IsActive: true },
          { stageName: 'South Africa', continent: 'Africa', stageCode: 'ZAF', status: 'Active', IsActive: true },
          { stageName: 'India', continent: 'Asia', stageCode: 'IND', status: 'Active', IsActive: true },
          { stageName: 'Brazil', continent: 'South America', stageCode: 'BRA', status: 'Active', IsActive: true }
        ];

        // Function to get status text
        getStatusText(status: boolean): string {
          return status ? 'Active' : 'Inactive';
        }


        public addmodule(id: any) {
          console.log('jkhksbdjk');
          let dialogRef = this.dialog.open(AddCountrysComponent, {
            data: id,
            height: 'auto',
            width: '600px',
          });
          dialogRef.afterClosed().subscribe((data: any) => { });
        }
     deleteConfirmation(item: any) {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { ProjectId: item.ProjectId, title: 'Delete Confirmation', content: 'Are you sure you want to Delete?' }
    });
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
  goBack() {
    this.router.navigate(['/app/complaints']);
  }

}
