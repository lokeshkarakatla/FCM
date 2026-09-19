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
    // { stageName: 'Upper Level Criticality', stageCode: 'EM', status: 'Active' },
    { stageName: ' Global Distributors Pvt. Ltd',Continent:'South America',Country :'America', stageCode: 'I-115', status: 'Active' },
     { stageName: 'Prime Trade & Supply',Continent:'North America',Country :'Andorra',  stageCode: 'PNT', status: 'Inactive' },
    { stageName: 'Vertex Distribution Services',Continent:'Antarctica',Country :'Angolas',  stageCode: 'PNT', status: 'Active' },
   

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
