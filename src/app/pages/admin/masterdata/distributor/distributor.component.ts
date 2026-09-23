import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddDistributorComponent } from './add-distributor/add-distributor.component';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-distributor',
  templateUrl: './distributor.component.html',
  styleUrls: ['./distributor.component.scss']
})
export class DistributorComponent  {

 canCreate: any;

  filterToggle: any;
  totalSize: any;
  currentPage: any;
  pageSize: any;


  constructor(private router: Router, private dialog: MatDialog) { }


  tableList = [
    { stageName: 'Apex Auto Retail Group (Berlin)', Continent: 'Europe', Country: 'Germany', stageCode: 'DLR-DEU01', status: 'Active' },
    { stageName: 'EuroStar Motors Ltd. (London)', Continent: 'Europe', Country: 'United Kingdom', stageCode: 'DLR-GBR01', status: 'Active' },
    { stageName: 'Metro Auto Distribution (Los Angeles)', Continent: 'North America', Country: 'United States', stageCode: 'DLR-USA01', status: 'Active' },
    { stageName: 'Siam Premier Motors Co. (Bangkok)', Continent: 'Asia', Country: 'Thailand', stageCode: 'DLR-THA01', status: 'Active' },
    { stageName: 'Bosphorus Auto Sales (Istanbul)', Continent: 'Europe', Country: 'Turkey', stageCode: 'DLR-TUR01', status: 'Active' },
    { stageName: 'Himalaya Motors Pvt. Ltd. (Kathmandu)', Continent: 'Asia', Country: 'Nepal', stageCode: 'DLR-NPL01', status: 'Active' },
    { stageName: 'Cape Town Automotive Hub', Continent: 'Africa', Country: 'South Africa', stageCode: 'DLR-ZAF01', status: 'Active' },
    { stageName: 'Alliance Auto France SAS (Paris)', Continent: 'Europe', Country: 'France', stageCode: 'DLR-FRA01', status: 'Active' }
  ];

  // Function to get status text
  getStatusText(status: boolean): string {
    return status ? 'Active' : 'Inactive';
  }


  public addmodule(id: any) {
    console.log('jkhksbdjk');
    let dialogRef = this.dialog.open(AddDistributorComponent, {
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
