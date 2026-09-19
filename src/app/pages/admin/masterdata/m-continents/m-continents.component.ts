import { Component, OnInit } from '@angular/core';
import { AddContinentComponent } from './add-continent/add-continent.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-m-continents',
  templateUrl: './m-continents.component.html',
  styleUrls: ['./m-continents.component.scss']
})
export class MContinentsComponent {

  canCreate: any;

       filterToggle: any;
       totalSize: any;
       currentPage: any;
       pageSize: any;


       constructor(private router: Router, private dialog: MatDialog) { }


       tableList = [
         { stageName: 'Antarctica', stageCode: 'EM', status: 'Active' },
         { stageName: 'South America', stageCode: 'I-115', status: 'Active' },
         { stageName: 'North America', stageCode: 'PNT', status: 'Active' },
         { stageName: 'Africa', stageCode: 'PNT', status: 'Inactive' },
         { stageName: 'Asia', stageCode: 'PNT', status: 'Inctive' },

       ];

       // Function to get status text
       getStatusText(status: boolean): string {
         return status ? 'Active' : 'Inactive';
       }


       public addmodule(id: any) {
         console.log('jkhksbdjk');
         let dialogRef = this.dialog.open(AddContinentComponent, {
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
